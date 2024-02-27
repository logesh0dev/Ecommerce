import React, { useEffect, useState } from "react";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export function Nav() {
  const [drawerbool, setdrawerbool] = useState(false);

  const [navlist, setnavlist] = useState([
    { id: 1, name: "Home" },
    { id: 2, name: "Category" },
    { id: 3, name: "Collections" },
    { id: 4, name: "Contact " },
  ]);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 740) {
      //   setdrawerbool(false);
    } else if (width >= 640 && width < 1024) {
      setdrawerbool(false);
    } else {
      setdrawerbool(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="">
        <section className="mx-auto">
          <nav className="flex justify-between border-2 border-slate-800 text-dark w-90 rounded-full m-3 ">
            <div className="px-2 xl:px-12 py-2 flex w-full items-center">
              <a className="text-3xl font-bold font-heading cursor-pointer ">
                Fashion Here.
              </a>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                {navlist.map((arr, index) => (
                  <li key={index}>
                    <a className="hover:text-gray-500 cursor-pointer">
                      {arr.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="hidden md:flex items-center space-x-5 items-center">
                <a className="hover:text-gray-500">
                  <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                </a>

                <a className="flex items-center hover:text-gray-200">
                  <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>

                <a
                  className="flex items-center hover:text-gray-200"
                  data-popover-target="popover-user-profile"
                >
                  <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                </a>
              </div>
            </div>
            <a className="md:hidden flex mr-6 items-center">
              <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>

              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
              </span>
            </a>

            <a
              onClick={() => setdrawerbool(true)}
              className="navbar-burger self-center mr-6 md:hidden"
              data-drawer-target="default-sidebar"
              data-drawer-toggle="default-sidebar"
            >
              <IconButton>
                <MenuOutlinedIcon></MenuOutlinedIcon>
              </IconButton>
            </a>
          </nav>
        </section>
      </div>

      <aside
        id="default-sidebar"
        className={`absolute top-0 right-0 z-40 h-screen transition-all duration-100  
        ease-out ${drawerbool ? "w-72" : "w-0 hidden"}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 ">
          <div className="absolute top-0 left-0">
            <IconButton onClick={() => setdrawerbool(false)}>
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              alt="tania andrew"
              className="relative inline-block object-cover object-center w-12 h-12 rounded-full m-2"
            />
            <h6 className="flex items-center gap-2 mb-2 font-sans text-base antialiased font-medium leading-relaxed tracking-normal text-blue-gray-900">
              <span>Log</span> •{" "}
              <a className="text-sm text-blue-gray-700">@Log#</a>
            </h6>
          </div>

          <hr></hr>
          <ul className="space-y-2 font-medium">
            {navlist.map((arr, index) => (
              <li key={index}>
                <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {arr.name}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </a>
            </li>
            <li>
              <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
