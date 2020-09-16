import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import cartIcon from "./../../images/cart.png";

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div>
      <nav className="navbar shadow navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand w-100 text-center" to="/">
          <h2 className="text-styled">JazzShop</h2>
        </Link>

        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/cart" activeClassName="active">
              <button
                type="button"
                style={{ position: "relative" }}
                className="btn btn-outline-danger"
              >
                <img
                  src={cartIcon}
                  className="float-left"
                  height="30px"
                  alt="cart"
                  style={{ zIndex: 2 }}
                />
                <p
                  style={{ position: "absolute", right: 16, zIndex: 1, top: 0 }}
                >
                  {/* <span className="badge badge-danger ">{cart.length}</span> */}
                </p>
              </button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
