import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Randomproducts = () => {

    let navigate = useNavigate();
    const [products, setProducts] = useState([]);
   
  useEffect(() => {
    const fetchData = async () => {
      try {
        const proRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_random_category_list`
        );
        const proData = await proRes.json();

        if (proData.option.status === 200) {
         
            setProducts(proData.data);
            console.log(proData.data);
      
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
 

  return (
    <>
    {products.map((pro) => (
        <div className="col-sm-6 col-md-3 col-lg-3 " key={pro.id}>
          <div className="item">
            <div className="row m0 imgHov img-watermark">
              <img src={pro.image} alt={pro.image} style={{width:"-webkit-fill-available"}} />
              <div className="row m0 hovArea text-center">
                <i className="fas fa-heart-o" />
                <br />
                <h4> {pro.cat_name} / {pro.sub_name}</h4>
                <Link  to={`/shop/${pro.cat_name}/${pro.sub_name}/1`} >
                  Shop now
                </Link>
              </div>
            </div>
            {/* <div>
                <Link  to={`/shop/${pro.cat_name}/${pro.sub_name}/1`} >
                <h4></h4>
              </Link>
            </div> */}
          </div>
        </div>
    ))}

    </>
  )
}
