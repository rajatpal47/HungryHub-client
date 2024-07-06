import { RiLoader5Line } from "react-icons/ri"
import { Button } from "./ui/button"


const LoadingButton = () => {
  return (
    <Button disabled>
        <RiLoader5Line className="mr-2 h-4 w-4 animate-spin" />
        Loading
    </Button>
  )
}

export default LoadingButton
