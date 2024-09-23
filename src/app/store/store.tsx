import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type user = any;

interface TodoState {
  user: user;
  form: any;
  loginuser: (user: any) => void;
  logoutuser: () => void;
  setform: (form: any) => void;
  removeform: () => void;
}

export const useStore = create<TodoState>()(
  devtools(
    persist(
      (set) => ({
        user: false,
        form: false,
        loginuser: (user) => {
          set(() => ({
            user: user,
          }));
        },
        logoutuser: () => {
          set(() => ({
            user: null,
          }));
        },
        setform: (form: any) => {
          set(() => ({
            form: form,
          }));
        },
        removeform: () => {
          set(() => ({
            form: false,
          }));
        },
      }),
      {
        name: "formio", // unique name
      }
    )
  )
);
