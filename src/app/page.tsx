import Image from "next/image"
import Link from "next/link"
import { MdLogin, MdOutlineLocalLaundryService } from "react-icons/md";

export default function Home() {
  return (
    <main>
      <Image src="/homeImg.svg" alt="Welcome Icon" width={500} height={500} />
      <div>
        <h1>Welcome to Laundromart</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, eveniet ipsum. Cumque enim doloremque odio excepturi, aut mollitia doloribus eum? Iusto, distinctio.</p>
      </div>
      <div className="btn-container">
        <Link href={"/register"} className="btn btn-primary">
          Get Started
          <MdOutlineLocalLaundryService className="icon" />
        </Link>
        <Link  href={"/login"} className="btn btn-secondary">
          Sign In
          <MdLogin className="icon" />
        </Link>
      </div>
    </main>
  )
}