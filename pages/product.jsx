import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Product = () => {
  const { prono } = useParams([]);
  const [product, setproduct] = useState([]);
  const [image, setImage] = useState([]);

  const username = localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ProductRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_product&designno=${prono}`
        );
        const proData = await ProductRes.json();

        if (proData) {
          setproduct(proData);
          setImage(proData.design_image);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCartSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    if (username == null) {
      Swal.fire({
        title: "Login",
        text: "to Add Cart",
        icon: "error",
      });
    } else {
      try {
        const response = await fetch("https://hariomgolds.com/api/update", {
          method: "POST",
          body: form,
        });
        const data = await response.json();
        if (data.status === true) {
          Swal.fire({
            title: 'Added',
            text: 'successfully',
            icon: 'success'
          }).then(()=>{
            location.reload();
          });
        } else {
          alert("Oops Something wrong");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const [formData, setFormData] = useState({
    qty: "1",
    pid: "",
    prono: "",
    add_cart: "",
    token: "",
    prowgt: "",
    proimg: "",
  });

  const handleIncrease = () => {
    setFormData((prevData) => ({
      ...prevData,
      qty: parseInt(prevData.qty) + 1,
    }));
  };

  const handleDecrease = () => {
    setFormData((prevData) => ({
      ...prevData,
      qty: parseInt(prevData.qty) - 1,
    }));
  };

  useEffect(() => {
    // Update formData when product.design_id or localStorage token changes
    const proId = product.design_id;
    const proNo = product.design_no;
    const proWgt = product.design_weight;
    const proImg = product.design_image;

    setFormData((prevData) => ({
      ...prevData,
      pid: proId,
      prono: proNo,
      prowgt: proWgt,
      token: username,
      proimg: proImg,
    }));
  }, [product]);

  return (
    <>
      <section className="row contentRowPad">
        <div className="container">
          <div className="row singleProduct">
            <div className="col-sm-7">
              <div className="row m0 flexslider" id="productImageSlider">
                <ul className="slides">
                  {/* <li> */}
                  <img src={`${image}`} alt={product.design_no} />
                  {/* </li> */}
                </ul>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="row m0">
                <h4 className="heading">{product.design_no}</h4>
                <h5 className="heading price" style={{ fontSize: 16 }}>
                  Wgt: {product.design_weight}
                </h5>

                <form
                  onSubmit={handleCartSubmit}
                  id="cartForm"
                  autoComplete="off"
                  name="cartForm"
                  className="row m0 qtyAtc"
                  style={{ marginTop: 10 }}
                >
                  <div className="fleft quantity">
                    <div className="fleft">
                      Qty <span>=</span>
                    </div>
                    <div
                      className="input-group spinner"
                      style={{ height: "auto" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        id="qty"
                        name="qty"
                        onChange={handleChange}
                        readOnly
                        value={formData.qty}
                      />
                      <div className="input-group-btn-vertical">
                        <button
                          className="btn btn-default"
                          type="button"
                          onClick={handleIncrease}
                        >
                          <i className="fas fa-angle-up" />
                        </button>
                        <button
                          className="btn btn-default"
                          type="button"
                          onClick={handleDecrease}
                        >
                          <i className="fas fa-angle-down" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="add_cart" />
                  <input
                    type="hidden"
                    name="pid"
                    id="pid"
                    onChange={handleChange}
                    value={formData.pid}
                  />
                  <input
                    type="hidden"
                    name="prono"
                    id="prono"
                    onChange={handleChange}
                    value={formData.prono}
                  />
                  <input
                    type="hidden"
                    name="prowgt"
                    id="prowgt"
                    onChange={handleChange}
                    value={formData.prowgt}
                  />
                  <input
                    type="hidden"
                    name="proimg"
                    id="proimg"
                    onChange={handleChange}
                    value={formData.proimg}
                  />
                  <input
                    type="hidden"
                    name="token"
                    id="token"
                    onChange={handleChange}
                    value={formData.username}
                  />

                  <button className="fleft btn btn-default" type="submit">
                    <img src="images/icons/cart3.png" alt="" /> add to cart
                  </button>
                  <button type="button" className="btn btn-default">
                    <i className="fas fa-heart" />
                  </button>
                </form>

                <p className="m0">
                  <>
                    {product.sub_cat_name === "Bangle" && (
                      <>
                        Introducing our exquisite Gold Bangle Collection:
                        Elevate your style and add a touch of timeless elegance
                        with our stunning Gold Bangles. Crafted with precision
                        and attention to detail, each piece in our collection is
                        a testament to exquisite craftsmanship and unparalleled
                        beauty. Whether you're looking for a statement piece or
                        a delicate accessory, our gold bangles are designed to
                        complement any occasion and suit every taste. Material:
                        Our Gold Bangles are meticulously crafted using
                        high-quality, 18-karat gold. This premium material
                        ensures a luxurious finish, durability, and a lustrous
                        shine that will last for generations. We carefully
                        select our gold to provide you with a piece of jewelry
                        that exudes brilliance and sophistication.
                      </>
                    )}

                    {product.sub_cat_name === "Bracelet" && (
                      <>
                        Introducing our exquisite gold bracelet, a true symbol
                        of elegance and timeless beauty. Crafted with utmost
                        precision and attention to detail, this bracelet is
                        designed to adorn your wrist with unparalleled grace.
                        Material: Made from the finest 22K solid gold, this
                        bracelet combines durability with a luxurious appeal.
                        The radiant yellow gold glimmers in the light, adding a
                        touch of opulence to any ensemble.
                      </>
                    )}

                    {product.sub_cat_name === "Chain" && (
                      <>
                        Introducing our Exquisite Gold Chain Collection: Indulge
                        in the timeless allure of our stunning gold chains,
                        meticulously crafted to elevate your style and make a
                        statement. Each piece showcases the perfect blend of
                        luxury, sophistication, and unparalleled craftsmanship.
                        Whether you're looking to enhance your everyday elegance
                        or adorn yourself for a special occasion, our gold
                        chains are designed to captivate and endure. Classic
                        Gold Chain: Unleash the allure of simplicity with our
                        Classic Gold Chain. Crafted with the utmost precision,
                        this chain boasts a seamless blend of understated
                        elegance and enduring style. Its sleek and polished
                        surface reflects light effortlessly, creating a
                        captivating glow. Perfect for any occasion, it
                        effortlessly complements both casual and formal attire.
                      </>
                    )}

                    {product.sub_cat_name === "Charms" && (
                      <>
                        Introducing our exquisite collection of Gold Charms that
                        are designed to add a touch of elegance and
                        personalization to your jewelry collection. Crafted with
                        meticulous attention to detail, our gold charms are the
                        perfect way to express your unique style and commemorate
                        special moments. Timeless Heart Charm: Capture the
                        essence of love with our Timeless Heart Charm. Crafted
                        in gleaming 14K gold, this delicate charm features a
                        classic heart shape, symbolizing affection and devotion.
                        Whether worn on a bracelet or necklace, this timeless
                        piece is a perfect gift for someone special or a
                        beautiful addition to your own collection.
                      </>
                    )}

                    {product.sub_cat_name === "Jhummiki" && (
                      <>
                        Introducing the Exquisite Gold Jhummiki: Welcome to our
                        website, where we proudly present the stunning Gold
                        Jhummiki collection. Our Gold Jhummikis are intricately
                        crafted and beautifully designed pieces of jewelry that
                        celebrate the rich heritage and elegance of Indian
                        culture. With their timeless charm and exquisite
                        craftsmanship, these Jhummikis are perfect for adding a
                        touch of grace and glamour to any occasion. Our Gold
                        Jhummikis are meticulously crafted from high-quality
                        22-karat gold, ensuring a lustrous shine and durability
                        that will last for generations.
                      </>
                    )}

                    {product.sub_cat_name === "Mugappu" && (
                      <>
                        Introducing our exquisite gold Mugappu collection, where
                        traditional charm meets contemporary elegance. Crafted
                        with meticulous attention to detail, our Mugappu designs
                        showcase the timeless beauty of gold, accentuating the
                        grace of every individual who adorns them. Intricate
                        Artistry: Each Mugappu is a testament to the
                        craftsmanship of our skilled artisans. Every stroke and
                        curve is meticulously etched, resulting in intricate
                        patterns and designs that are a delight to behold. Our
                        Mugappu pieces are created with a perfect blend of
                        traditional techniques and modern aesthetics, making
                        them truly unique.
                      </>
                    )}

                    {product.sub_cat_name === "Plain Charms" && (
                      <>
                        Introducing our exquisite collection of Gold Plain
                        Charms, crafted with meticulous attention to detail and
                        designed to add a touch of elegance to any jewelry
                        piece. These timeless charms are perfect for creating
                        personalized bracelets, necklaces, or anklets that
                        reflect your unique style and personality. Each Gold
                        Plain Charm is expertly crafted using high-quality 14K
                        or 18K gold, ensuring durability and a stunning luster
                        that will stand the test of time. The charms feature a
                        sleek and minimalistic design, making them versatile and
                        suitable for any occasion, whether you prefer a casual
                        everyday look or a sophisticated evening ensemble.
                      </>
                    )}

                    {product.sub_cat_name === "Ring" && (
                      <>
                        Introducing the "Eternal Radiance" Gold Ring: Embrace
                        timeless elegance and grace with our exquisite "Eternal
                        Radiance" Gold Ring. Meticulously crafted to perfection,
                        this stunning piece embodies sophistication and beauty,
                        making it an ideal accessory for any occasion. The band
                        of the ring is meticulously handcrafted from 18-carat
                        yellow gold, chosen for its exquisite luster and
                        exceptional durability. Its smooth and polished surface
                        glimmers with a captivating radiance, reflecting the
                        light with every movement.
                      </>
                    )}

                    {product.sub_cat_name === "Stone Charms" && (
                      <>
                        Introducing our exquisite Gold Stone Charms, a
                        collection of enchanting accessories that will add a
                        touch of elegance and charm to your jewelry collection.
                        Crafted with meticulous attention to detail, these
                        stunning charms are the perfect choice to elevate your
                        style and make a statement. Each Gold Stone Charm is
                        meticulously crafted from high-quality 14K gold,
                        ensuring durability and a luxurious shine that will
                        endure for years to come. The captivating centerpiece of
                        each charm is a carefully selected gemstone, known for
                        its beauty and inherent metaphysical properties.
                      </>
                    )}

                    {product.sub_cat_name === "Stud" && (
                      <>
                        Introducing our exquisite gold stud collection, where
                        elegance meets sophistication. Crafted with meticulous
                        attention to detail, these timeless pieces are designed
                        to add a touch of glamour to any ensemble. Let's delve
                        into the captivating description of our gold studs:
                        Material: Each stud is meticulously crafted from
                        high-quality 14-karat or 18-karat gold, ensuring
                        durability and lasting beauty. The lustrous gold
                        captures the essence of luxury, making these studs a
                        perfect investment for your jewelry collection.
                      </>
                    )}

                    {product.sub_cat_name === "Wedding Ring" && (
                      <>
                        Introducing our exquisite collection of gold wedding
                        rings, designed to symbolize the eternal bond of love
                        and commitment. Handcrafted with utmost precision and
                        adorned with timeless elegance, each ring is a testament
                        to exceptional craftsmanship and enduring beauty.
                        Material: Our gold wedding rings are meticulously
                        crafted from the finest quality gold, ensuring both
                        exceptional durability and a luxurious aesthetic. We
                        offer a range of gold options to suit every preference,
                        including classic yellow gold, romantic rose gold, and
                        contemporary white gold.
                      </>
                    )}
                  </>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
