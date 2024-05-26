import { User } from "@/types/User"
import { generateRandomId } from "@/utils/uuid"
import {create} from "zustand"

type AuthStore = {
  user: User
  setUser: (user: Partial<User>) => void
}

const uniqueId = generateRandomId()

export const useAuthStore = create<AuthStore>((set) => ({
  user: {
    id: uniqueId,
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    address: "",
    username: "",
    password: "",
    confirmPassword: ""
  },
  setUser: (newUser) => set((state) => ({
    user: {...state.user, ...newUser}}))
}))