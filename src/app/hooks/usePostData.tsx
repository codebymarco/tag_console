import { useState } from "react";
import { useStore } from "../store/store";
import { api } from "../api/api";
import { useParams } from "react-router-dom";

export const usePostData = () => {
  const { user } = useStore();
  const { formID } = useParams();

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const postdata = async (obj: any) => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/user/forms/edit/${formID}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      setLoading(false);
    }
  };

  return { postdata, loading, error };
};
