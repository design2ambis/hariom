import React from "react";


function Footer() {
  return (
    <>
      <footer className="row">
        <div className="row m0 topFooter">
          <div className="container line2">
            <div className="row">
              <div className="col-sm-4 widget">
                <div className="row m0">
                  <h4>About Hari Om</h4>
                  <p>
                    We provide the best Quality of products to you.We are always
                    here to help our lovely customers.
                  </p>
                  <ul className="list-inline">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-google-plus" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 widget">
                <div className="row m0">
                  <h4>information</h4>
                  <ul className="nav">
                    <li>
                      <a href="about.php">About Us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Top Brands</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 widget">
                <div className="row m0">
                  <h4>subscribe to our latest news</h4>
                  <form method="post" role="form">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fas fa-envelope" />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        id="subscribeEmail"
                        name="subscribeEmail"
                        placeholder="EMAIL ADDRESS"
                      />
                    </div>
                    <input
                      type="submit"
                      className="form-control"
                      defaultValue="Subscribe"
                      id="submit"
                      name="submit"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row m0 copyRight">
          <div className="container">
            <div className="row">
              <div className="fleft">
                © 2018 <a href="index.php">Hari Om</a> All Rights Reserved.
              </div>
              <ul className="nav nav-pills fright">
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="about.php">about</a>
                </li>
                <li>
                  <a href="/blog">blog</a>
                </li>
                <li>
                  <a href="contact.php">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer