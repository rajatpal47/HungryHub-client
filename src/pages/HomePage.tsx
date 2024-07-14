import SearchBar, { SearchForm } from "@/components/SearchBar";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const handleSearchSubmit = (serarchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${serarchFormValues.searchQuery}`
    })
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 md:px-32">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar placeholder="Search by city or town" onSubmit={handleSearchSubmit}/>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={assets.landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
                Order takeway even faster!
            </span>
            <span className="">
                Download the HungryHub App for faster ordering and personalised recommendations
            </span>
            <img src={assets.appDownload} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
