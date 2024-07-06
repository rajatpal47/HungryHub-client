import { Link } from "react-router-dom"
import { assets } from "../assets";
import MoblieNav from "./MoblieNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className=" container mx-auto flex justify-between items-center">
        <Link to='/'><img src={assets.logo} alt="logo" className="h-auto w-40" /></Link>
        <div className="md:hidden">
          <MoblieNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  )
}

export default Header
