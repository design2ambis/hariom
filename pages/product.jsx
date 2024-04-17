import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

const Product = () => {
  
  const { prono } = useParams();
  const [product, setproduct] = useState([]);
  const [image, setImage] = useState([]);

  const username = localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0)
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

  

  const handleCartSubmit= async (e) => {
    e.preventDefault();
    const form = new FormData();
    for (const key in formData) {
      form.append(key, formData[key]);
    }

    if(username==null){

      Swal.fire({
        title: 'Login',
        text: 'to Add Cart',
        icon: 'error'
      });

    }else{

    try {
      const response = await fetch("https://hariomgolds.com/api/update", {
        method: "POST",
        body: form,
      });
      const data = await response.json();
        if(data.status===true){
          
          Swal.fire({
            title: 'Added',
            text: 'successfully',
            icon: 'success'
          }).then(()=>{
            location.reload();
          })
        }else{
          alert("Oops Something wrong");
        }
    } catch (error) {
      console.error("Error:", error);      
    }

    }
  };

 

  const [formData, setFormData] = useState({
    qty: '1',
    pid: '',
    prono:'',
    add_cart: '',
    token: '',
    prowgt:'',
    proimg:''
  });

  const handleIncrease = () => {
    setFormData((prevData) => ({ ...prevData, qty: parseInt(prevData.qty) + 1 }));
  };

  const handleDecrease = () => {
    setFormData((prevData) => ({ ...prevData, qty: parseInt(prevData.qty) - 1 }));
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
      prono:proNo,
      prowgt:proWgt,
      token: username,
      proimg:proImg
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

                <form onSubmit={handleCartSubmit} id="cartForm" autoComplete="off" name="cartForm" className="row m0 qtyAtc" style={{ marginTop: 10 }}>
                    <div className="fleft quantity">
                      <div className="fleft">
                        Qty <span>=</span>
                      </div>
                    <div className="input-group spinner" style={{ height: "auto" }}>
                      <input type="text" className="form-control" id="qty" name="qty" onChange={handleChange} readOnly value={formData.qty} />
                      <div className="input-group-btn-vertical">
                        <button className="btn btn-default" type="button"  onClick={handleIncrease}>
                          <i className="fas fa-angle-up" />
                        </button>
                        <button className="btn btn-default" type="button" onClick={handleDecrease} >
                          <i className="fas fa-angle-down" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <input type="hidden" name="add_cart" />
                  <input type="hidden" name="pid" id="pid" onChange={handleChange} value={formData.pid} />
                  <input type="hidden" name="prono" id="prono" onChange={handleChange} value={formData.prono} />
                  <input type="hidden" name="prowgt" id="prowgt" onChange={handleChange} value={formData.prowgt} />
                  <input type="hidden" name="proimg" id="proimg" onChange={handleChange} value={formData.proimg} />
                  <input type="hidden" name="token" id="token" onChange={handleChange} value={formData.username} />

                  <button className="fleft btn btn-default" type="submit">
                    <img src="images/icons/cart3.png" alt="" /> add to cart
                  </button>
                  <button type="button" className="btn btn-default">
                    <i className="fas fa-heart" />
                  </button>
                </form>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quaerat error necessitatibus?
                  Exercitationem numquam, voluptas provident consequatur quis in suscipit nesciunt, perferendis quam fugiat
                  totam commodi aliquam sint quia quae?
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
