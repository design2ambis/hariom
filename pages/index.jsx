import React from 'react'
import { Randomproducts } from '../components/randomproducts'
import { Link, useNavigate, useParams } from 'react-router-dom';

// import { Oval } from 'react-loader-spinner'

export default function Home () {
  let navigate = useNavigate();
  return (
     <>
    {/* <Oval
  visible={true}
  height="100vh"
  width="100vw"
  color="#4fa94d"
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /> */}
    <section id="slider" className="row">
      <div className="row sliderCont flexslider m0">
        <ul className="slides nav">
          <li>
            <img src="/images/slider/5.jpg" alt="" />
            <div className="text_lines row m0">
              <div className="container p0">
                <h3>traditional Designer Jwellery</h3>
                <h2>new collections</h2>
                <h4>
                  <a className="theme_btn with_i" href="#">
                    <i className="fas fa-plus-circle" />
                    Shop now
                  </a>
                </h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section id="shopRings">
      <div className="sectionTitle">
        <h3>New arrivels</h3>
        <h5>know more about our latest collection</h5>
      </div>
      <div
        className="d-carousel-cener owl-carousel"
        style={{ display: "none" }}
      >
        <div className="dc-inner">
          <a
            href="single-product.php?id=<?php echo encrypt($list['design_id']) ?>"
            className="img-watermark"
          >
            <img
              alt="<?php echo $list['design_no'] ?>"
              src="<?php echo $list['design_image'] ?>"
            />
            <div className="dc-containt">
              <h2></h2>
              <p></p>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section id="ring_sec" className="ring_sec">
      <div id="trigger" className="container ">
        <div className="row">
          <div className="col-md-6  diamond_j_cont">
            <div className="diamond_j"></div>
            <div className="diamond_b">
              <img alt="" className="img-responsive" src="/images/ring.png" />
            </div>
          </div>
          <div className="col-md-6  ring_cont">
            <h2>About HARI OM</h2>
            <p>
              Welcome to HARI OM, where artistry and passion intertwine to
              create extraordinary jewelry pieces. Our commitment to exceptional
              craftsmanship and attention to detail sets us apart in the world
              of jewelry manufacture. Join us on a journey to explore the
              intricate process behind the creation of our stunning collections.
            </p>
            <a className="com_btn" href="product.php">
              Start shopping
            </a>
          </div>
        </div>
      </div>
    </section>
  

    <section id="featureCategory" className="row contentRowPad">
      <div className="container">
        <div className="row m0 sectionTitle">
          <h3>our featured categories</h3>
          <h5>make easy shop with our categories</h5>
        </div>
       <div className='row'>
       <Randomproducts/>
       </div>
      </div>
    </section>
  </>
  )
}
