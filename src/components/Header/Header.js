import React from "react";
import logo from "../../img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase/firebase";
function Header() {
  const [{ user, basket }] = useStateValue();
  const login = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <nav className="header__container">
        <Link to="/">
          <img src={logo} className="header__logo" alt="" />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <div className="header__searchIcon">
            <SearchIcon />
          </div>
        </div>
        <div className="header__nav">
          <Link to={!user ? "/login" : ""} className="header__link">
            <div onClick={login} className="header__option">
              <span className="header__optionLineOne">Hello {user?.email}</span>

              <span className="header__optionLineTwo">
                {!user ? "Sign In" : "Sign Out"}
              </span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header__link">
            <div className="header__optionBasket">
              <CartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
