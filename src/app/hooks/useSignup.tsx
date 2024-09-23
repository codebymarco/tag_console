import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { useStore } from "../store/store";

export const useSignup = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { loginuser } = useStore();

  const signup = async (email: string, password: string) => {
    setLoading(true);
    setError(false);
    const response = await fetch(`${api}/api/auth/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email,password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      console.log(json);
      loginuser(json);
      setLoading(false);
      navigate(`/console/${json.user._id}/forms`);
    }
  };

  return { signup, loading, error };
};
