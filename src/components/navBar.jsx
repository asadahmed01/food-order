import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaPepperHot, FaShoppingCart } from "react-icons/fa";
import { Context } from "../context";
import { useSelector } from "react-redux";
import { getCurrentUser } from "./services/authServices";

const NavBar = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    setUser(user);
  }, []);

  const numberInCart = useSelector((state) => state.products);

  const { count } = useContext(Context);
  const [dishes] = count;
  //console.log(dishes);
  return (
    <nav className="flex-row md:flex  md:justify-between  bg-yellow-500 ">
      <div className="flex  justify-between pl-5 items-center">
        <NavLink to="/" className="p-2 text-yellow-100 bg-white rounded-full">
          <span className="text-red-600 md:text-5xl text-3xl hover:text-green-600">
            <FaPepperHot />
          </span>
        </NavLink>
        <NavLink
          className="md:hidden text-gray-50 pr-5"
          to=""
          onClick={() => console.log("open")}
        >
          <FaBars />
        </NavLink>
      </div>

      <ul className="hidden md:flex md:flex-row text-yellow-50">
        <li className="p-5">
          <NavLink to="/" className="p-5 rounded-sm hover:bg-yellow-400">
            Menu
          </NavLink>
        </li>
        {!user && (
          <React.Fragment>
            {" "}
            <li className="p-5">
              <NavLink
                to="/login"
                className="p-5 rounded-sm hover:bg-yellow-400"
              >
                Login
              </NavLink>
            </li>
            <li className="p-5">
              <NavLink
                to="/signup"
                className="p-5 rounded-sm hover:bg-yellow-400"
              >
                SignUp
              </NavLink>
            </li>
          </React.Fragment>
        )}

        {user && (
          <React.Fragment>
            <NavLink
              to="/delete"
              className="p-5 rounded-sm hover:bg-yellow-400"
            >
              {user.name ? user.name : user.email}
            </NavLink>
            <NavLink
              to="/logout"
              className="p-5 rounded-sm hover:bg-yellow-400"
            >
              Logout
            </NavLink>
          </React.Fragment>
        )}

        <li
          className={`flex-row p-2 relative ${
            numberInCart.length > 0 ? "" : ""
          }`}
        >
          <span className="bg-white text-black w-5 h-5 rounded-full px-1 text-xs font-bold">
            {numberInCart.length}
          </span>

          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
