"use client"

import InputComponent from "@/components/Input";
import { useAuthStore } from "@/store/user";
import Link from "next/link";

export default function Register() {

  const {user, setUser} = useAuthStore()

  return (
    <>
      <form>
        <h2>Register</h2>
        <div className="form-container">
          <div className="input-container">
            <InputComponent
              id="firstname"
              label="First name:"
              value={user.firstname}
              user={user}
              handleChange={(e) => setUser({
                firstname: e.firstname
              })}
            />
            <InputComponent
              id="lastname"
              label="Last name:"
              value={user.lastname}
              user={user}
              handleChange={(e) => setUser({
                lastname: e.lastname
              })}
            />
          </div>
          <div className="input-container">
            <InputComponent
              id="email"
              label="Email:"
              type="email"
              value={user.email}
              user={user}
              handleChange={(e) => setUser({
                email: e.email
              })}
            />
            <InputComponent
              id="phoneNumber"
              label="Phone number:"
              type="number"
              value={user.phoneNumber}
              user={user}
              handleChange={(e) => setUser({
                phoneNumber: e.phoneNumber
              })}  
            />
          </div>
          <InputComponent
            id="username"
            label="Username:"
            value={user.username}
            user={user}
            handleChange={(e) => setUser({
              username: e.username
            })}
          />
          <div className="input-container">
            <InputComponent
              id="password"
              label="Create Password:" 
              value={user.password}
              user={user}
              handleChange={(e) => setUser({
                password: e.password
              })}
            />
            <InputComponent
              id="confirmPassword"
              label="Confirm Password:" 
              value={user.confirmPassword}
              user={user}
              handleChange={(e) => setUser({
                confirmPassword: e.confirmPassword
              })}
            />
          </div>
          <button type="button" className="btn btn-primary">Submit</button>
        </div>
        <p className="footer-text">Already have an account? <Link href={"/login"} className="link">Sign In</Link></p>
      </form>
    </>
  )
}