import { User } from "@/types/User";

export type InputProps = {
  id: string;
  label: string;
  type?: "number" | "password" | "email";
  value: string;
  required?: boolean;
  user: User;
  handleChange: (user: User) => void
}