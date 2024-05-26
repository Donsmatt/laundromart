import { User } from "@/types/User"
import {create} from "zustand"

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