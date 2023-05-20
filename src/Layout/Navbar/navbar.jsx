import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="NavbarTop">
        <div className="NavbarLeft">
          <MenuIcon />
        </div>
        <Link to="/">
          <img
            className="Amazonlogo"
            src="./amazon_logo.png"
            alt="Amazon logo"
          />
        </Link>

        {/* Search box input */}
        <div className="NavbarSearch">
          <input type="search" className="NavbarSearchInput" />
          <SearchIcon className="NavbarSearchIcon" />
        </div>

        <div className="NavbarLinks">
          {/* Sign in and sign out */}
          <Link to="/Login" className="NavbarLink">
            <div className="NavbarLinkOptions">
              <span className="NavbarOptionOne">Hello</span>
              <span className="NavbarOptionTwo">User</span>
            </div>
          </Link>

          {/* Return to order */}
          <Link to="/orders" className="NavbarLink">
            <div className="NavbarLinkOptions">
              <span className="NavbarOptionOne">Return</span>
              <span className="NavbarOptionTwo">Order</span>
            </div>
          </Link>

          {/* Try Prime */}
          <Link to="/Prime" className="NavbarLink">
            <div className="NavbarLinkOptions">
              <span className="NavbarOptionOne">Try</span>
              <span className="NavbarOptionTwo">Prime</span>
            </div>
          </Link>

          {/* Profile */}
          <Link to="/Profile" className="NavbarLink">
            <div className="NavbarLinkOptions">
              <span className="NavbarOptionOne">Your</span>
              <span className="NavbarOptionTwo">Profile</span>
            </div>
          </Link>

          {/* {for Basket} */}
          <Link to="/Profile" className="NavbarLink">
            <div className="NavbarLinkOptionsBasket">
              <ShoppingBasketIcon />
              <span className="NavbarOptionOne BasketCount">4</span>
            </div>
          </Link>
        </div>
      </div>

      {/* {Navbar bottom} */}
      <div className="NavbarBottom">
        {/* {For address} */}
        <div className="NavbarAddress">
          <div className="NavbarAddressIcon">
            <LocationOnIcon />
          </div>
          <div className="NavbarLinkOptions">
            <span className="NavbarOptionOne">Deliver to</span>
            <span className="NavbarOptionTwo">Address</span>
          </div>
        </div>

        {/* {Navbar Bottom} */}
        <div className="NavbarBottomNav">
          <span>
            <Link to="/" className="NavbarLink">
              ALL PRODUCTS
            </Link>
          </span>

          <span>
            <Link to="/" className="NavbarLink">
              Books
            </Link>
          </span>

          <span>
            <Link to="/" className="NavbarLink">
              Mobile
            </Link>
          </span>

          <span>
            <Link to="/" className="NavbarLink">
              Electronics
            </Link>
          </span>

          <span>
            <Link to="/" className="NavbarLink">
              Easy coding
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
