"use client"

import InputComponent from "@/components/Input";
import { getLocalStorageItem, setLocalStorageItem } from "@/lib/localStorage";
import { useAuthStore } from "@/store/user";
import { User } from "@/types/User";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";

export default function Register() {

  const {user, setUser} = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    const storedUser = getLocalStorageItem<User>('user');
    if (storedUser) {
      setUser(storedUser);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalStorageItem('user', user);
  }, [user]);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    console.log('User registered:', user);
    router.push("/login")
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div className="form-container">
          <div className="input-container">
            <InputComponent
              id="firstname"
              label="First name:"
              value={user.firstname}
              user={user}
              required
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
              required
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
              required
              handleChange={(e) => setUser({
                phoneNumber: e.phoneNumber
              })}  
            />
          </div>
          <InputComponent
            id="address"
            label="Address:"
            value={user.address}
            user={user}
            handleChange={(e) => setUser({
              address: e.address
            })}
          />
          <InputComponent
            id="username"
            label="Username:"
            value={user.username}
            user={user}
            required
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
              required
              handleChange={(e) => setUser({
                password: e.password
              })}
            />
            <InputComponent
              id="confirmPassword"
              label="Confirm Password:" 
              value={user.confirmPassword}
              user={user}
              required
              handleChange={(e) => setUser({
                confirmPassword: e.confirmPassword
              })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        <p className="footer-text">Already have an account? <Link href={"/login"} className="link">Sign In</Link></p>
      </form>
    </>
  )
}