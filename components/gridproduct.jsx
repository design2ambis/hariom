import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Gridproduct = (props) => {
  // const { cat, subcat, page } = useParams();

  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [isCount, setCount] = useState(false);
  const [pages, setPage] = useState([]);
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const proRes = await fetch(
          `https://utsarvajewels.com/api/crud?get_product_details_overall&cat=${props.cat}&&subcat=${props.subcat}&&page=${props.page}`
        );
        const proData = await proRes.json();

        if (proData.status.status === 200) {
          setCount(true);
          setProducts(proData.data);
          setPage(proData.status.page);
        }else{
          setCount(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props]);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [props])

  var minuspage,addpage = "";
  var currentpage = props.page;
  
 
  if(currentpage==1){
    minuspage=1
  }else{
    minuspage=parseInt(currentpage)-1;
  }
  addpage = parseInt(currentpage)+1;

  // const [loading, setLoading] = useState(true);

  return (
    <>
    <div className="filter_data">

      {

      isCount ? (
      
          products.map((pro) => (
            <div className="col-sm-6 col-md-3 col-lg-3  product" key={pro.id}>
              <div className="productInner row m0">
                <div className="row m0 imgHov img-watermark">           
                  <img src={pro.image} alt={pro.image} title={pro.image} />

                  <div className="row m0 hovArea">
                    <div className="row m0 icons">
                      <ul className="list-inline">
                        <li>
                          <a href="#">
                            <i className="fas fa-heart"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-shopping-cart-alt"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-expand"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="row m0 proType">
                      <Link to={`/product/${pro.no}`}>{pro.no}</Link>
                    </div>
                    <div className="row m0 proRating">
                      <i className="fas fa-star-o"></i>
                      <i className="fas fa-star-o"></i>
                      <i className="fas fa-star-o"></i>
                      <i className="fas fa-star-o"></i>
                      <i className="fas fa-star-o"></i>
                    </div>
                    <div className="row m0 proPrice">Wgt: {pro.weight}</div>
                  </div>
                </div>
                <div className="row m0 proName">
                  <Link to={`/product/${pro.no}`}> {pro.no} </Link>
                </div>
                <div className="row m0 proBuyBtn">
                  <button className="addToCart btn">add to cart</button>
                </div>
                {/* <center>
                  <label for="proid<?php echo $list['id'] ?>">
                    <input type="checkbox" id="" /> Add to cart
                  </label>
                </center> */}
              </div>
            </div>
          ))

      ):(

        <center><img src='https://www.utsarvajewels.com/images/empty_data.jpg' id='imagenodata' /></center>


      )
      
      
      };

      </div>

      {

      isCount ? (

        <div>
          <center>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <Link className="page-link" 
                to={`/shop/${props.cat}/${props.subcat}/${minuspage}`} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </Link>
              </li>

              {pages.map((page,index) => (
              <li className="page-item " key={index}>
                <Link
                  className="page-link" 
                  to={`/shop/${props.cat}/${props.subcat}/${page.i}`}>{page.i}
                </Link>
              </li>
              ))}

              <li className="page-item">
                <Link className="page-link" 
                to={`/shop/${props.cat}/${props.subcat}/${addpage}`}
                  aria-label="Next" ><span aria-hidden="true">&raquo;</span>
                </Link>
              </li>
            </ul>
          </nav>
          </center>
        </div>

        ):(

          <p></p>

        )              
              
        };

    </>
  );
};

export default Gridproduct;
