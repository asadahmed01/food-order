import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaPepperHot, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { getCurrentUser } from "./services/authServices";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   setUser(getCurrentUser());
  // }, []);

  const numberInCart = useSelector((state) => state.products);

  const user = getCurrentUser();
  console.log(user);

  return (
    <nav className="flex bg-gray-800 p-1 items-center flex-wrap justify-between  w-full z-10 top-0 sticky border-b-4 border-yellow-500">
      <div className=" items-center flex-shrink-0 text-white mr-6 hidden">
        <NavLink
          className="text-red-700 hover:text-yellow-600 no-underline hover:no-underline "
          to="/"
        >
          <span className="text-2xl pl-2 font-semibold">
            <FaPepperHot className="bg-white rounded-full p-2 text-6xl" />
          </span>
        </NavLink>
      </div>
      {!isOpen && (
        <div className="lg:hidden text-white">
          <NavLink to="/cart" className="focus:no-underline">
            {numberInCart.length}
            <FaShoppingCart color="white" size="25" />
          </NavLink>
        </div>
      )}

      <div className="  text-white mr-6 lg:hidden">
        <NavLink
          className="text-red-700 hover:text-yellow-600 no-underline hover:no-underline "
          to="/"
        >
          <span className="text-2xl pl-2 font-semibold">
            <FaPepperHot className="bg-white rounded-full p-1 text-5xl mb-3" />
          </span>
        </NavLink>
      </div>

      <div className="lg:hidden block">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 "
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <FaBars />
        </button>
      </div>

      <div
        className={
          isOpen
            ? "w-full flex-grow lg:flex lg:items-center lg:w-auto  pt-6 lg:pt-0"
            : "hidden w-full flex-grow lg:flex lg:items-center lg:w-auto  pt-6 lg:pt-0"
        }
      >
        <ul className="list-reset lg:flex justify-end flex-1 items-center text-xl">
          <li className="mr-6">
            <NavLink
              to="/"
              className="inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-yellow-500"
            >
              Menu
            </NavLink>
          </li>

          {!user && (
            <>
              <li className="mr-6">
                <NavLink
                  className="inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>

              <li className="mr-6">
                <NavLink
                  className="inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300"
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}

          {user && (
            <>
              <li className="mr-6">
                <NavLink
                  className="inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300"
                  to="/delete"
                >
                  {user.name ? user.name : user.email}
                </NavLink>
              </li>

              <li className="mr-6">
                <NavLink
                  className="inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300"
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li>
            </>
          )}

          {user && user.isAdmin && (
            <>
              <li className="mr-6">
                <NavLink
                  className="inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300"
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
            </>
          )}

          <li className="mr-6">
            <NavLink
              className="inline-block py-2 px-2 text-white no-underline hover:no-underline hover:text-blue-300 text-2xl"
              to="/cart"
            >
              {numberInCart.length > 0 ? numberInCart.length : "0"}
              <FaShoppingCart />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
