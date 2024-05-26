import { User } from "@/store/user";


export type InputProps = {
  id: string;
  label: string;
  type?: "number" | "password" | "email";
  value: string;
  user: User;
  handleChange: (user: User) => void
}