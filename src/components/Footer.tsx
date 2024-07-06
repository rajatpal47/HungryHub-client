import { assets } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-slate-800 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/"><img src={assets.logo} alt="" /></Link>
        <span className="text-white font-bold tracking-tight flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
        </span>
      </div>
    </div>
  )
}

export default Footer
