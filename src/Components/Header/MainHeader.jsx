/**
 *
 * react imports
 */
import React, { useEffect, useState } from "react";
import { Base64 } from "js-base64";
import { Link, useLocation, useNavigate } from "react-router-dom";
import user_ from "../Header/app.config";

/**
 * material icons
 */
import SearchIcon from "@material-ui/icons/Search";
import Cart from "@material-ui/icons/ShoppingCartOutlined";
import Help from "@material-ui/icons/HelpOutline";
import ExpandUpIcon from "@material-ui/icons/ExpandLess";
import ExpandDownIcon from "@material-ui/icons/ExpandMore";
import User from "@material-ui/icons/PersonOutlined";
import Menu from "@material-ui/icons/MenuOutlined";
import Close from "@material-ui/icons/Close";

/**
 *
 * imports for assets and styles
 */
import "../Header/MainHeader.css";
import PlusLogo from "../../Drawables/payet1.png";

export default () => {
  /**
   *
   * hooks for the component
   */
  const router_location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    helpDropDownActive: false,
    userDropDownActive: false,
    sideNav: false,
    cart_number: null,
    search_small_screen: false,
  });

  /**
   *
   * app search for products
   */
  const submitSearch = (e) => {
    e.preventDefault();
    const searchValue = new FormData(e.target).get("search");
    navigate(`/catalog?q=${searchValue}`);
    if (router_location.pathname === "/catalog") {
      window.location.reload();
    }
  };

  useEffect(() => {
    let cart = localStorage.getItem("cart_id")
      ? JSON.parse(Base64.decode(localStorage.getItem("cart_id")))
      : [];
    if (cart.length === 0) {
      setState({
        ...state,
        cart_number: 0,
      });
    } else {
      let cart_number = 0;
      cart.forEach((el) => parseInt((cart_number += el.qty)));
      setState({
        ...state,
        cart_number,
      });
    }

    return () => {
      setState({
        ...state,
        helpDropDownActive: false,
        userDropDownActive: false,
        sideNav: false,
        cart_number: null,
      });
    };
  }, []);

  return (
    <>
      <div
        className="sidenav-ctr"
        style={
          state.sideNav
            ? { width: "60%", left: "0px" }
            : { left: "-70%", width: "0px" }
        }
      >
        <button
          className="close-side-nav"
          onClick={() => {
            setState({ ...state, sideNav: !state.sideNav });
          }}
        >
          <Close fontSize="medium" />
        </button>
        <div className="side-nav-content">
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">Shop These Categories - Plus</div>
            <li className="sd-item">
              <Link to="/category/628a66f4dfadcc15c2546ef7">
                <span className="sd-item-name">
                  <i className="las la-shopping-basket ctg-icon"></i>
                  EasyMarket On Plus
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b655966349809adc1d7c6">
                <span className="sd-item-name">
                  <i className="las la-pizza-slice ctg-icon"></i>
                  Fast Foods &amp; Drinks
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b657566349809adc1d7cd">
                <span className="sd-item-name">
                  <i className="las la-layer-group ctg-icon"></i>
                  Supermarket
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b658f66349809adc1d7d4">
                <span className="sd-item-name">
                  <i className="las la-headphones-alt ctg-icon"></i>
                  Phones &amp; Accessories
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b659f66349809adc1d7db">
                <span className="sd-item-name">
                  <i className="las la-charging-station ctg-icon"></i>
                  Electronics
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b65b766349809adc1d7e4">
                <span className="sd-item-name">
                  <i className="las la-tshirt ctg-icon"></i>
                  Clothes &amp; Shoes
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b65d866349809adc1d7ed">
                <span className="sd-item-name">
                  <i className="las la-utensils ctg-icon"></i>
                  Kitchen stuff &amp; Utensils
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b65f666349809adc1d7f4">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Computing &amp; Accessories
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b661966349809adc1d7fc">
                <span className="sd-item-name">
                  <i className="las la-desktop ctg-icon"></i>
                  Cleaning, Healthy &amp; Beauty
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b664566349809adc1d803">
                <span className="sd-item-name">
                  <i className="las la-paperclip ctg-icon"></i>
                  Stationery
                </span>
              </Link>
            </li>
          </ul>
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">My Plus</div>
            {user_ ? (
              <>
                <li className="sd-item">
                  <Link to="/user/profile">
                    <span className="sd-item-name">
                      <i className="las la-shopping-basket ctg-icon"></i>
                      My Profile
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Link to="/user/pending-orders">
                    <span className="sd-item-name">
                      <i className="las la-pizza-slice ctg-icon"></i>
                      My Pending Orders
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Link to="/user/orders">
                    <span className="sd-item-name">
                      <i className="las la-layer-group ctg-icon"></i>
                      My Orders
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Link to="/user/edit">
                    <span className="sd-item-name">
                      <i className="las la-headphones-alt ctg-icon"></i>
                      Edit Profile
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <button
                    className="sd-item-name plus-btn"
                    onClick={() => {
                      const token_stored = localStorage.getItem("token");
                      if (token_stored) {
                        localStorage.removeItem("token");
                      } else {
                        sessionStorage.removeItem("token");
                      }
                      window.location.replace("/");
                    }}
                  >
                    <i className="las la-sign-out ctg-icon"></i>
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <li className="sd-item">
                <Link to="/user/login">
                  <button className="sd-item-name plus-btn">
                    <i className="las la-sign-out ctg-icon"></i>
                    Log in
                  </button>
                </Link>
              </li>
            )}
          </ul>
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">Find Help on Plus</div>
            <li className="sd-item">
              <Link to="/help/request">
                <span className="sd-item-name">
                  <i className="las la-shopping-basket ctg-icon"></i>
                  Request Your item
                </span>
              </Link>
            </li>
          </ul>
          <div>
            <div className="ftr-lw-center">
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Plus Uganda
              </span>
              <div>
                {new Date().getFullYear()} &copy; Dreamscom Technologies LTD
              </div>
              <div>All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="hdr-banner-ctr">
          <div className="hdr-banner">
            <p>Make your festivals come true with payet</p>
          </div>
        </div>
        <div className="react-nav-loader"></div>
        <nav className="hdr-nav-ctr">
          <div className="hdr-nav">
            <div
              className="menu-toggle"
              onClick={() => {
                setState({
                  ...state,
                  sideNav: !state.sideNav,
                });
              }}
            >
              <Menu fontSize="large" />
            </div>
            <Link to="/">
              <div className="hdr-nav-logo">
                <img src={PlusLogo} alt="" />
              </div>
            </Link>
            <div className="hdr-search-ctr">
              <form className="hdr-search" onSubmit={submitSearch}>
                <input
                  type="text"
                  name="search"
                  placeholder="Search Plus...."
                />
                <button className="search-icon" type="submit">
                  <SearchIcon fontSize="medium" />
                </button>
              </form>
            </div>
            <div className="hdr-user">
              <div className="hdr-user-help">
                <button
                  className="-dropdown"
                  onFocus={() => {
                    setState({
                      ...state,
                      helpDropDownActive: true,
                    });
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setState({
                        ...state,
                        helpDropDownActive: false,
                      });
                    }, 500);
                  }}
                >
                  <Help fontSize="small" />
                  <span>Help</span>
                  {state.helpDropDownActive ? (
                    <ExpandUpIcon />
                  ) : (
                    <ExpandDownIcon />
                  )}
                </button>
                <ul
                  className="-help-list -acc-l"
                  style={
                    state.helpDropDownActive
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Link to="/help/request">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      Request Item
                    </li>
                  </Link>
                  <Link to="/help">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      How To Order
                    </li>
                  </Link>
                  <Link to="/help">
                    <li className="-help">
                      <i className="las la-shopping-cart"></i>
                      Make Returns
                    </li>
                  </Link>
                  <li className="-help">
                    <button className="-a-btn -lg" style={{ width: "100%" }}>
                      <i className="las la-sign-out-alt"></i>
                      Service Helpline
                    </button>
                  </li>
                </ul>
              </div>
              <div className="hdr-user-account">
                <button
                  className="-dropdown"
                  onFocus={() => {
                    if (user_) {
                      setState({
                        ...state,
                        userDropDownActive: true,
                      });
                    } else {
                      navigate("/user/login");
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setState({
                        ...state,
                        userDropDownActive: false,
                      });
                    }, 500);
                  }}
                >
                  <User />
                  {/* <span>
                    {user_ ? `${user_.user_name.split(" ")[0]}` : "Account"}
                  </span> */}
                  {state.userDropDownActive ? (
                    <ExpandUpIcon />
                  ) : (
                    <ExpandDownIcon />
                  )}
                </button>
                <ul
                  className="-help-list -acc-l"
                  style={
                    state.userDropDownActive
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Link to="/user/profile">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      My Profile
                    </li>
                  </Link>
                  <Link to="/cart">
                    <li className="-help">
                      <i className="las la-shopping-cart"></i>
                      My Cart
                    </li>
                  </Link>
                  <Link to="/user/orders">
                    <li className="-help">
                      <i className="las la-gift"></i>
                      My Orders
                    </li>
                  </Link>
                  <a href="/user/edit">
                    <li className="-help">
                      <i className="las la-user-edit"></i>
                      Edit Profile
                    </li>
                  </a>
                  <li className="-help">
                    <button
                      className="-a-btn -lg"
                      style={{ width: "100%" }}
                      onClick={() => {
                        const token_stored = localStorage.getItem("token");
                        if (token_stored) {
                          localStorage.removeItem("token");
                        } else {
                          sessionStorage.removeItem("token");
                        }
                        window.location.replace("/");
                      }}
                    >
                      <i className="las la-sign-out-alt"></i>
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
              <div className="hdr-user-cart">
                <Link to="/cart">
                  <span style={{ position: "relative" }}>
                    <Cart />
                    <span
                      style={{
                        position: "absolute",
                        backgroundColor: "#85B811",
                        top: "-7px",
                        color: "#fff",
                        left: "15px",
                        height: "17px",
                        width: "17px",
                        textAlign: "center",
                        fontSize: "14px",
                        borderRadius: "50%",
                      }}
                    >
                      {state.cart_number}
                    </span>
                  </span>
                  <span>Cart</span>
                </Link>
              </div>
            </div>
            <div className="hdr-icons-ctr-sm">
              <div
                className="search-i-sm"
                onClick={() => {
                  setState({
                    ...state,
                    search_small_screen: !state.search_small_screen,
                  });
                }}
              >
                <SearchIcon fontSize="large" />
              </div>
              <div className="user-i-sm">
                <Link to="/user/profile">
                  <User fontSize="large" />
                </Link>
              </div>
              <div className="cart-i-sm">
                <Link to="/cart">
                  <span style={{ position: "relative" }}>
                    <Cart fontSize="large" />
                    <span
                      style={{
                        position: "absolute",
                        backgroundColor: "#85B811",
                        top: "-25px",
                        right: "-5px",
                        color: "#fff",
                        height: "17px",
                        width: "17px",
                        textAlign: "center",
                        fontSize: "14px",
                        borderRadius: "50%",
                      }}
                    >
                      {state.cart_number}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="search-bar-sm-appr"
          style={
            state.search_small_screen
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <form
            className="hdr-search"
            onSubmit={submitSearch}
            style={{ height: "50px" }}
          >
            <input type="text" name="search" placeholder="Search Plus...." />
            <button className="search-icon" type="submit">
              <SearchIcon fontSize="medium" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};
