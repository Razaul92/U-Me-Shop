import Image from "next/image";
import { MenuIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import Hamburger from "./Hamburger";
import { useState } from "react";
import FilterData from "./FilterData";
import { XIcon, SearchIcon } from "@heroicons/react/solid";

function Header({ products }) {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  const [itemSearch, setItemSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState([]);
  const [open, setOpen] = useState(false);

  const filterHandler = (e) => {
    let searchItem = e.target.value;
    setItemSearch(searchItem);

    const ItemFiltered = products?.filter((val) => {
      return val.title.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (ItemFiltered === 0 && itemSearch === 0) {
      setFilteredItem([]);
    } else {
      setFilteredItem(ItemFiltered);
    }
  };

  const clickHandler = (val) => {
    setItemSearch(val);
    setFilteredItem([]);
  };

  const Clear = () => {
    setItemSearch("");
    setFilteredItem([]);
  };

  return (
    <>
      <header className="sticky top-0 mt-1 z-40">
        {/*Top Nav*/}

        <div className="flex items-center p-1 flex-grow py-2 bg-blue-900">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <MenuIcon
              className="sm:hidden h-11 mb-2 text-white"
              onClick={() => setOpen(true)}
            />
            <span
              onClick={() => router.push("/")}
              className="cursor-pointer mx-1"
            >
              <Image
                src="/shoplogo.jpg"
                width={150}
                height={50}
                objectFit="cover"
                className="cursor-pointer rounded-lg"
              />
            </span>
          </div>

          {/*Search*/}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-red-500 hover:bg-red-600">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 placeholder-red-300"
              type="text"
              placeholder="Search here..."
              onChange={filterHandler}
              value={itemSearch}
            />
            {itemSearch && (
              <XIcon className="h-10 p-2 bg-gray-50" onClick={Clear} />
            )}
            <SearchIcon className="h-12 p-3" />
          </div>

          {/* Right*/}
          <div className="text-white flex items-center text-xs space-x-6 mx-6">
            <div className="link" onClick={!session ? signIn : signOut}>
              <p>{session ? `Hello,${session.user.name}` : "Sign In"}</p>{" "}
              {/*42:23*/}
              <p className="font-extrabold md:text-sm">Accounts & Lists</p>
            </div>
            <div onClick={() => router.push("/orders")} className="link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
            <div
              onClick={() => router.push("/checkout")}
              className="relative link flex items-center"
            >
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4  bg-red-500 text-center rounded-full text-black font-bold">
                {items.length}
              </span>
              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
              {/* By default Hidden-As its mobile first*/}
            </div>
          </div>
        </div>

        {/*Small Screen Search*/}
        <div className="bg-blue-900 pb-2">
          <div className="sm:hidden flex items-center mx-2  h-8 rounded-md flex-grow cursor-pointer bg-red-500 hover:bg-red-600">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 placeholder-red-300"
              type="text"
              placeholder="Search here"
              onChange={filterHandler}
              value={itemSearch}
            />
            {itemSearch && (
              <XIcon className="h-8 p-2 bg-gray-50" onClick={Clear} />
            )}
            <SearchIcon className="h-12 p-4" />
          </div>
        </div>
        {filteredItem?.length >= 0 && itemSearch && (
          <FilterData filterData={filteredItem} onClick={clickHandler} />
        )}

        <Hamburger open={open} setOpen={setOpen} />
      </header>
      {/*Bottom Nav*/}
      <div className="flex items-center space-x-3 p-2 pl-6 text-white text-sm bg-blue-700">
        <p className="link flex items-center">
          <MenuIcon
            className="hidden sm:inline h-6 mr-1"
            onClick={() => setOpen(true)}
          />
          All
        </p>
        <p className="link">Watch Video</p>
        <p className="link"> Today's Deals</p>
        <p className="link hidden lg:inline-flex"> Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link">Our Bussiness</p>
        <p className="link hidden lg:inline-flex">Premium</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </>
  );
}

export default Header;
