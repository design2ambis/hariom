import React from 'react'

const Contact = () => {
  return (
    <div>
        <>
  <section id="breadcrumbRow" className="row">
    <h2>contact us</h2>
    <div className="row pageTitle m0">
      <div className="container">
        <h4 className="fleft">contact us</h4>
        <ul className="breadcrumb fright">
          <li>
            <a href="index.php">home</a>
          </li>
          <li className="active">contact us</li>
        </ul>
      </div>
    </div>
  </section>
  <section id="contactRow" className="row contentRowPad">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <div className="row m0">
            <h4 className="contactHeading heading">contact form style</h4>
          </div>
          <div className="row m0 contactForm">
            <form
              className="row m0"
              id="contactForm"
              autoComplete="off"
              method="post"
              name="contact"
            >
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="name"
                    required=""
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required=""
                  />
                </div>
              </div>
              <div className="row m0">
                <label htmlFor="subject">subject *</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required=""
                />
              </div>
              <div className="row m0">
                <label htmlFor="message">your message</label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              {/*<div class="row m0 captchaRow">*/}
              {/*    <img src="images/captcha.png" alt=""><br>*/}
              {/*    <label for="captcha">Enter the above text</label>*/}
              {/*    <input type="text" class="form-control" name="captcha" id="captcha">*/}
              {/*</div>*/}
              <button
                className="btn btn-primary btn-lg filled"
                id="submit"
                type="submit"
              >
                send message
              </button>
              <input
                type="hidden"
                className="form-control"
                name="submit-contact-form"
                id="submit-contact-form"
              />
            </form>
            <div id="success">
              <span className="green textcenter">
                Your message was sent successfully! I will be in touch as soon
                as I can.
              </span>
            </div>
            <div id="error">
              <span>
                Something went wrong, try refreshing and submitting the form
                again.
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row m0">
            <h4 className="contactHeading heading">contact info style</h4>
          </div>
          <div className="media contactInfo">
            <div className="media-left">
              <i className="fas fa-map-marker" />
            </div>
            <div className="media-body">
              <h5 className="heading">where to reach us</h5>
              <p>You can reach us at the following address:</p>
              <h5>
                SRI HARI OM ENTERPRISES <br />
                OLD #130, NEW # 216,SHOP # 35,DHANALAXMI COMPLEX, <br /> N.S.C
                BOSE ROAD, CHENNAI-600 079
              </h5>
            </div>
          </div>{" "}
          {/*contactInfo*/}
          <div className="media contactInfo">
            <div className="media-left">
              <i className="fas fa-envelope" />
            </div>
            <div className="media-body">
              <h5 className="heading">Email us @</h5>
              <p>
                Email your issues and suggestion for the following email
                addresses:{" "}
              </p>
              <h5>hmbullion@gmail.com</h5>
            </div>
          </div>
          <div className="media contactInfo">
            <div className="media-left">
              <i className="fas fa-phone" />
            </div>
            <div className="media-body">
              <h5 className="heading">need to call us?</h5>
              <p>From Monday to Saturday,10:00 AM - 8:00 PM, call us at:</p>
              <h5>+91 9169160678</h5>
            </div>
          </div>{" "}
          {/*contactInfo*/}
          <div className="media contactInfo">
            <div className="media-left">
              <i className="fas fa-question" />
            </div>
            <div className="media-body">
              <h5 className="heading">we have great support</h5>
              <p>
                We provide the best Quality of products to you.We are always
                here to help our lovely customers.We ship our products anywhere
                with more secure. We provide the best Quality of products to
                you.
              </p>
            </div>
          </div>{" "}
          {/*contactInfo*/}
        </div>
      </div>
    </div>
  </section>
  <section id="googleMapRow" className="row">
    <div className="row m0" id="mapBox" />
  </section>
</>

    </div>
  )
}

export default Contact