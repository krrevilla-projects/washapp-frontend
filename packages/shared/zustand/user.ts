import { create } from "zustand";
import { UserResponse } from "../openapi";

export interface AuthState {
  isAuthed: boolean;
  accessToken: string;
  user: UserResponse | null;
  setAccessToken: (accessToken: string) => void;
  isLoggedInSuccessful: (user: UserResponse) => void;
  isLoggedOutSuccessful: () => void;
}

export const useUserStore = create<AuthState>()((set) => ({
  isAuthed: false,
  user: null,
  accessToken: "",
  setAccessToken: (accessToken) => set({ accessToken: accessToken }),
  isLoggedInSuccessful: (data) => set({ isAuthed: true, user: data }),
  isLoggedOutSuccessful: () =>
    set({ isAuthed: false, user: null, accessToken: "" }),
}));
