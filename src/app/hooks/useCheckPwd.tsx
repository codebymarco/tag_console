import { useState } from "react";
import { useStore } from "../store/store";
import { api } from "../api/api";
import { useParams } from "react-router-dom";

export const useCheckPwd = () => {
  const { user } = useStore();
  const { userID } = useParams();

  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [executeNext, setExecuteNext] = useState<boolean>(true);

  const postdata = async (obj: any) => {
    setLoading(true);
    setError(null);
    const response = await fetch(`${api}/api/user/password/check/${userID}`, {
      method: "POST",
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
      setCheck(false);
      setExecuteNext(true);
    }
    if (response.ok) {
      setLoading(false);
      setCheck(true);
      setExecuteNext(false);
    }
  };

  return { postdata, loading, error, check, executeNext };
};
