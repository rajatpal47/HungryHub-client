import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { RiMenu3Line } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import MobileNavLinks from "./MobileNavLinks";

const MoblieNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu3Line className="text-orange-500 text-2xl" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <FaCircleUser className="text-orange-500 text-2xl" />
              {user?.name}
            </span>
          ) : (
            <span>Wecome to HungryHub!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button className="flex-1 font-bold bg-orange-500"
            onClick={async () => await loginWithRedirect()}
            >Login</Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MoblieNav;
