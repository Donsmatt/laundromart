import {create} from "zustand"

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  username: string;
  password: string;
  confirmPassword: string;
}

type AuthStore = {
  user: User
  setUser: (user: Partial<User>) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    confirmPassword: ""
  },
  setUser: (newUser) => set((state) => ({
    user: {...state.user, ...newUser}}))
}))