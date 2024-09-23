import { useState } from "react";
import { useStore } from "../store/store";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api/api";

export const useDeleteForm = () => {
  const { user } = useStore();
  const navigate = useNavigate();

  const { formID, userID } = useParams();

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const deleteForm = async () => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/user/forms/${formID}`, {
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
      setLoading(false);
      navigate(`/console/${userID}/forms`);
    }
  };

  return { deleteForm, loading, error };
};
