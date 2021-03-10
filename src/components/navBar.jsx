import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import Cart from "./cart";
import { Context } from "../context";
import { useSelector } from "react-redux";

const NavBar = () => {
  const numberInCart = useSelector((state) => state.products);

  const { count } = useContext(Context);
  const [dishes] = count;
  //console.log(dishes);
  return (
    <nav className="flex-row md:flex  md:justify-between  bg-yellow-500 ">
      <div className="flex  justify-between pl-5 items-center">
        <NavLink
          to="/"
          className="p-5 rounded-sm text-yellow-100 hover:text-gray-50"
        >
          Logo
        </NavLink>
        <Link className="md:hidden text-gray-50 pr-5" to="">
          <FaBars />
        </Link>
      </div>

      <ul className="hidden md:flex md:flex-row text-yellow-50">
        <li className="p-5">
          <NavLink to="/" className="p-5 rounded-sm hover:bg-yellow-400">
            Menu
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink to="/login" className="p-5 rounded-sm hover:bg-yellow-400">
            Login
          </NavLink>
        </li>
        <li className="p-5">
          <NavLink to="/signup" className="p-5 rounded-sm hover:bg-yellow-400">
            SignUp
          </NavLink>
        </li>
        <li className="flex-row p-2 relative">
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
