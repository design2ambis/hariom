import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    submit: "",
    customername: "",
    customerMobile: "",
    customerType: "",
    Companyname: "",
    address: "",
    customerPhone: "",
    customerCity: "",
    customerEmail: "",
    customerPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://hariomgolds.com/api/register", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      if (data.status === true) {
        Swal.fire({
          title: 'Success',
          text: 'Registered Successfully',
          icon: 'success'
        });
      } else {
        Swal.fire({
          title: 'Failed',
          text: 'Registration Failed',
          icon: 'error'
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error response from the server
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await fetch("https://hariomgolds.com/api/signin", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
      if (data.status === true) {
        Swal.fire({
          title: 'Success',
          text: 'Welcome back ',
          icon: 'success'
        }).then(() => {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        })
      } else {
        Swal.fire({
          title: 'Invalid ',
          text: 'User Credientials',
          icon: 'error'
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error response from the server
    }
  };
  var username = localStorage.getItem("token");
  useEffect(() => {
    if (username !== null) {
      history.back();
    }
  }, []);



  return (
    <>
      <section id="breadcrumbRow" className="row">
        <h2>Signin / Register</h2>
        <div className="row pageTitle m0">
          <div className="container">
            <h4 className="fleft">Signin / Register</h4>
            <ul className="breadcrumb fright">
              <li>
                <Link to="/">home</Link>
              </li>
              <li className="active">Account</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="tabsAccordion" className="row shortcodesRow">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h4 className="shortcodeHeading">Signin / Register</h4>
              <div className="row m0 tabRow">
                <ul
                  className="nav nav-tabs nav-justified"
                  role="tablist"
                  id="shortcodeTab"
                >
                  <li role="presentation" className="active">
                    <a
                      href="#signin"
                      aria-controls="description"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className="fas fa-user" />
                      Signin
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#register"
                      aria-controls="review"
                      role="tab"
                      data-toggle="tab"
                    >
                      <i className="fas fa-user-plus" /> Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content shortcodeTabContent">
                  <div
                    role="tabpanel"
                    className="tab-pane row m0 active"
                    id="signin"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row m0">
                          <h4 className="contactHeading heading">Signin</h4>
                        </div>
                        <div className="row m0 contactForm">
                          <form onSubmit={handleSignInSubmit}
                            className="row m0"
                            id="formlogin"
                            autoComplete="off"
                            name="formlogin"
                          >
                            <div className="row">
                              <div className="col-sm-6">
                                <label htmlFor="email">Email *</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Enter Your Registred E-Mail"
                                  required=""
                                  value={formData.email} onChange={handleChange}
                                />
                              </div>
                              <div className="col-sm-6">
                                <label htmlFor="password">Password *</label>
                                <input
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  id="password"
                                  placeholder="Enter Account Password"
                                  required=""
                                  value={formData.password} onChange={handleChange}
                                />
                              </div>
                            </div>
                            <br />
                            <div className="row text-center">
                              <input type="hidden" name="submit" />
                              <button
                                className="btn btn-primary btn-lg filled"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="tabpanel"
                    className="tab-pane row m0"
                    id="register"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="row m0">
                          <h4 className="contactHeading heading center">
                            Register
                          </h4>
                        </div>
                        <div className="row m0">
                          <form
                            className="row m0"
                            id="formregister"
                            autoComplete="off"
                            method="post"
                            name="formregister"
                            onSubmit={handleRegisterSubmit}
                          >
                            <div className="row m0">
                              <h4>Your Personal Details</h4>
                              <div className="col-sm-4">
                                <label htmlFor="customername">
                                  Customername *
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="customername"
                                  id="customername"
                                  placeholder="Your Account Name"
                                  required=""
                                  value={formData.customername} onChange={handleChange}
                                />
                              </div>
                              <div className="col-sm-4">
                                <label htmlFor="customerMobile">Mobile *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="customerMobile"
                                  id="customerMobile"
                                  placeholder="example : +91 9080706050"
                                  required=""
                                  value={formData.customerMobile} onChange={handleChange}
                                />
                              </div>
                              <div className="col-sm-4">
                                <label htmlFor="customerType">
                                  Customer Type *
                                </label>
                                <select
                                  className="form-control js-example-basic-single"
                                  id="customerType"
                                  name="customerType"
                                  aria-label="Default select example"
                                  required=""
                                  value={formData.customerType} onChange={handleChange}
                                >
                                  <option defaultValue="" disabled="">
                                    --Select--
                                  </option>
                                  <option value={1}>Dealer</option>
                                  <option value={2}>Seller</option>
                                </select>
                              </div>
                            </div>
                            <div className="row m0">
                              <h4>Your Company Details</h4>
                              <div className="row">
                                <div className="col-sm-4">
                                  <label htmlFor="Companyname">
                                    Company Name *
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="Companyname"
                                    id="Companyname"
                                    placeholder="Enter Your Company Name"
                                    required=""
                                    value={formData.Companyname} onChange={handleChange}
                                  />
                                </div>
                                <div className="col-sm-4">
                                  <label htmlFor="address">Address</label>
                                  <textarea
                                    name="address"
                                    id="address"
                                    rows={2}
                                    className="form-control"
                                    placeholder=" Enter Your Address"
                                    required=""
                                    value={formData.address} onChange={handleChange}
                                  />
                                </div>
                                <div className="col-sm-4">
                                  <label htmlFor="customerPhone">
                                    Phone Number *
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="customerPhone"
                                    id="customerPhone"
                                    placeholder="example : +91 9080706050"
                                    required=""
                                    value={formData.customerMobile} onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-4">
                                  <label htmlFor="customerCity">City *</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="customerCity"
                                    id="customerCity"
                                    placeholder="Enter Your City"
                                    required=""
                                    value={formData.customerCity} onChange={handleChange}
                                  />
                                </div>
                                <div className="col-sm-4">
                                  <label htmlFor="customerEmail">Email *</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="customerEmail"
                                    id="customerEmail"
                                    placeholder="Enter Your E-Mail"
                                    required=""
                                    value={formData.customerEmail} onChange={handleChange}
                                  />
                                </div>
                                <div className="col-sm-4">
                                  <label htmlFor="customerPass">Password</label>
                                  <input
                                    type="password"
                                    className="form-control"
                                    name="customerPass"
                                    id="customerPass"
                                    placeholder="Create Password For Your Acc"
                                    required=""
                                    value={formData.customerPass} onChange={handleChange}
                                  />
                                </div>
                              </div>
                              <br />
                              <br />
                              <div className="row">
                                <div className="col-sm-12 text-center">

                                  <button
                                    className="btn btn-primary btn-lg filled"
                                    type="submit"
                                  >
                                    Register
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="googleMapRow" className="row">
        <div className="row m0" id="mapBox" />
      </section>
    </>
  );
};

export default Register;
