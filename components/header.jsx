import  {React , useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Category from "./categoryfetch";
import Carttable from "./Carttable";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  var username = localStorage.getItem("token");
  
  useEffect(() => {
    if(username!==null){
      setIsLoggedIn(true);
    }
}, []);

const handleClick = () => {
  // console.log("test");
  localStorage.removeItem("token");
  window.location.href="/";
}

  return (
    <>
      <div className="page-loader" style={{display: "none"}}>
        <div className="spinners"></div>
        <div className="txt">
          Please wait Data loading
          <br />
          Dont Refresh or Close the page..
        </div>
      </div>
      <a href="#" id="back-to-top" title="Back to top">
        &uarr;
      </a>
      <header className="row" id="header" style={{ background: "#003663" }}>
        <div className="row m0 logo_line">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 logo">
                <a href="/"  className="logo_a">
                  <img src="/images/hmlogo.png" alt="Hari Om" />
                </a>
              </div>
              <div className="col-sm-7 searchSec">
                <div className="col-sm-12">
                  <div className="fright wishlistCompare">
                    <ul className="nav">
                    {
                      isLoggedIn ? (
                        <>
                      
                        {/* <li>
                          <Link to="/wishlist">
                            <span className="wish">
                              <i className="fas fa-heart" />0
                            </span>
                            <span>Wishlist</span>
                          </Link>
                        </li> */}

                        <li className="h_cart">
                          <Carttable />
                        </li>

                      </>

                        ) : (
                          // <></>

                        <li>
                          <a href="#!">                           
                            <span>Wishlist</span>
                          </a>
                        </li>



                        )
                      }

                    </ul>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="fright searchForm">
                    <div
                      className="input-group"
                      style={{
                        width: "-webkit-fill-available",
                        display: "none",
                      }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="search_param"
                        placeholder="Search Products"
                      />
                    </div>

                    <div
                      className="ac_nov_results"
                      id="displaySearchvalue"
                      style={{
                        display: "none",
                        height: 380,
                        overflowY: "scroll",
                        overflowX: "hidden",
                        border: "1px solid rgb(189, 189, 189)",
                        borderRadius: "0px 0px 15px 15px",
                        width: 360,
                        position: "absolute",
                        top: 48,
                        zIndex: 10001,
                        background: "rgb(255, 255, 255)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-default m0 navbar-static-top">
          <div className="container-fluid container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#mainNav"
              >
                <i className="fas fa-bars" /> MENU
              </button>
            </div>

            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="nav navbar-nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <Category/>

                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                  >Account</a>
                  <ul className="dropdown-menu" role="menu">
                    {
                      isLoggedIn ? (
                        <>
                          <li>
                            <Link to="/account">My Account</Link>
                          </li>
                        
                          <li>
                            <a href="#!" onClick={handleClick}>Logout</a>
                          </li>

                        </>

                        ) : (
                          <li>
                            <Link to="/register">Register / Signin</Link>
                          </li>
                          
                        )
                      }
                                      

                    
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
