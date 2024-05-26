"use client"

import InputComponent from "@/components/Input";
import { useAuthStore } from "@/store/user";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter()
  const {user, setUser} = useAuthStore()

  const handleClick = () => {
    router.push("/dashboard")
  }

  return (
    <>
      <form>
        <h2>Login</h2>
        <div className="form-container">
        <InputComponent
            id="username"
            label="Username:"
            value={user.username}
            user={user}
            handleChange={(e) => setUser({
              username: e.username
            })}
          />
          <InputComponent
              id="password"
              label="Create Password:" 
              value={user.password}
              user={user}
              handleChange={(e) => setUser({
                password: e.password
              })}
            />
          <Link href={"/forgot-password"} className="forgot-password">Forgot password?</Link>
          <button type="button" className="btn btn-primary" onClick={handleClick}>Sign In</button>
        </div>
        <p className="footer-text">Don&apos;t have an account? <Link href={"/register"} className="link">Sign Up</Link></p>
      </form>
    </>
  )
}