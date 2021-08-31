import {
  ChevronDownIcon,
  ChevronRightIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/client";

function Hamburger({ open, setOpen }) {
  const [session] = useSession();
  return (
    <>
      <div
        className={`fixed h-screen top-0 left-0 z-50 bg-gray-50 overflow-x-auto w-80 lg:w-96 translate-x-0 transition-all ${
          !open && "-translate-x-full transition-all"
        } `}
      >
        <div className="sticky top-0 flex items-center bg-gray-800 py-2">
          <UserCircleIcon
            className={`h-10 ml-10 text-white ${session && "ml-2"}`}
          />
          <p
            className={`px-10 text-white font-extrabold text-xl ${
              session && " text-xs font-normal line-clamp-2 px-3"
            }`}
          >
            Hello, {session ? `${session.user.name}` : "Sign In"}
          </p>
          <XIcon
            className={`h-10 ml-10 text-white ${session && "ml-1"}`}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="px-10 py-5 space-y-5 border-b">
          <h1 className="text-xl font-bold ">Trending</h1>
          <p className="text-sm cursor-pointer">Best Sellers</p>
          <p className="text-sm cursor-pointer">New Releases</p>
          <p className="text-sm cursor-pointer">Movers and Shakers</p>
        </div>

        <div className="px-10 py-5 space-y-5 border-b">
          <h1 className="text-xl font-bold ">Digital Content And Devices</h1>
          <p className="flex text-sm cursor-pointer">
            Echo & Alexa{" "}
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            Fire TV{" "}
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            Kinfle-E-Readers & eBooks{" "}
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            Audible Audiobooks{" "}
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            Amazon Prime Video{" "}
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            Amazon Prime Music{" "}
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
        </div>

        <div className="px-10 py-5 space-y-5 border-b">
          <h1 className="text-xl font-bold ">Shop By Department</h1>
          <p className="flex text-sm cursor-pointer">
            Mobiles, Computers
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            TV, Appliances, Electronics
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            Men's Fashion
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            Women's Fashion
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="flex text-sm cursor-pointer">
            See All
            <ChevronDownIcon className="h-5 text-gray-500 mx-auto " />
          </p>
        </div>

        <div className="px-10 py-5 space-y-5 border-b">
          <h1 className="text-xl font-bold ">Programs & Features</h1>
          <p className="flex text-sm cursor-pointer">
            Gift Cards & Mobile Recharges
            <ChevronRightIcon className="h-5 text-gray-500 mx-auto mr-0" />
          </p>
          <p className="text-sm cursor-pointer">Flight Tickets</p>
          <p className="text-sm cursor-pointer">#FoundItOnAmazon</p>
          <p className="text-sm cursor-pointer">Amazon Assistant</p>
        </div>

        <div className="px-10 py-5 space-y-5 border-b">
          <h1 className="text-xl font-bold ">Help & Setting</h1>
          <p className="text-sm cursor-pointer">Your Account</p>
          <p className="text-sm cursor-pointer">Customer Service</p>
          <p
            className="ftext-sm cursor-pointer"
            onClick={!session ? signIn : signOut}
          >
            {!session ? "sign In" : "sign Out"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Hamburger;
