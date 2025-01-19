import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Nav() {

  const product = useSelector((store) => store.store.product)

  const navigate = useNavigate();
  const [drawerbool, setdrawerbool] = useState(false);

  const [navlist, setnavlist] = useState([
    { id: 1, name: "Home", route: "/" },
    { id: 2, name: "Category", route: "/category" },
    { id: 3, name: "Collections", route: "/collections" },
    { id: 4, name: "Contact", route: "/contact" },
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
          <nav className="flex justify-between border-2 border-slate-800 text-dark w-90 rounded-full m-3">
            <div className="px-2 xl:px-12 py-2 flex w-full items-center">
              <Link to="/" className="text-3xl font-bold font-heading cursor-pointer">
                Fashion Here.
              </Link>
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                {navlist.map((arr, index) => (
                  <li key={index}>
                    <Link to={arr.route} className="hover:text-gray-500 cursor-pointer">
                      {arr.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="hidden md:flex items-center space-x-5 items-center">
                <Link to='/wishlist' className=" flex  items-center hover:text-gray-500 cursor-pointer">

                  <a className=" hover:scale-105">
                    <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
                  </a>
                </Link>

                <Link to='/cart' className="hover:text-gray-500 cursor-pointer">

                  <a className="flex items-center hover:scale-105">

                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>

                    <span className="flex absolute -mt-5 ml-4">
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-pink-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-5 w-5 bg-pink-500 text-sm text-white"><span className="absolute top-[-0.5px]  w-5 h-5 flex justify-center" >{product.length}</span></span>

                    </span>

                  </a>
                </Link>



                <a
                  className="flex items-center hover:scale-105"
                  data-popover-target="popover-user-profile"
                >
                  <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
                </a>
              </div>
            </div>
            <Link to='/wishlist' className=" hover:text-gray-500 cursor-pointer">

              <a className="md:hidden flex mr-6 mt-4 items-center hover:scale-105">
                <FavoriteBorderOutlinedIcon></FavoriteBorderOutlinedIcon>
              </a>
            </Link>
            <Link to='/cart' className="hover:text-gray-500 cursor-pointer">

              <a className="md:hidden flex mr-6 mt-4 items-center">

                <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>

                <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"> </span>
                </span>

              </a>
            </Link >


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
        className={`fixed top-0 right-0 z-40 h-screen transition-all duration-300 ease-out transform ${drawerbool ? "w-72 translate-x-0" : "w-0 translate-x-full"}`}
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
              src="https://img.freepik.com/free-vector/man-with-mustache_1308-41559.jpg?t=st=1737268342~exp=1737271942~hmac=d180844cbad08c4fbfaa8715ca232d45f2194b04ab32312d1422eb2617116996&w=740"
              alt="tania andrew"
              className="border-2  border-black relative inline-block object-cover object-center w-12 h-12 rounded-full m-2"
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
                <Link onClick={() => setdrawerbool(false)} to={arr.route} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    {arr.name}
                  </span>
                </Link>
              </li>
            ))}
            {/* <li>
              <Link to="/signin" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </Link>
            </li>
            <li>
              <Link to="/signup" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </Link>
            </li> */}
          </ul>
        </div>
      </aside>
    </div>
  );
}
