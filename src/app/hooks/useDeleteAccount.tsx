import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";

export const useDeleteAccount = () => {
  const { user } = useStore();
  const navigate = useNavigate();

  const { logoutuser, removeform } = useStore();

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const deleteAccount = async () => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/user/${user.user._id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      logoutuser();
      removeform();
      setLoading(false);
      navigate("/");
    }
  };

  return { deleteAccount, loading, error };
};
