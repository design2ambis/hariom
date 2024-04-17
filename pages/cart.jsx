import  {React , useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {

  const [cart, setCart] = useState([]);  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCount, setIsCount] = useState(false);

  const username = localStorage.getItem("token");

  useEffect(() => {
    if(username!==null){
        setIsLoggedIn(true);
      }
  }, []);

  const fetchData = async () => {
    try {
      const cartResponse = await fetch('https://hariomgolds.com/api/select?get_cart&token='+username);
      const cartData = await cartResponse.json();
      if (cartData.status === 200) {            
          setCart(cartData.data);     
          setIsCount(true); 
          // console.log(cartData.data);                     
      }else{
          setIsCount(false); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  


  useEffect(() => {      
      fetchData();
    }, [username]);

    const qty = async (id, qty, type) => {

      try {
        const cartResponse = await fetch(`https://hariomgolds.com/api/update?update_cart&id=${id}&qty=${qty}&type=${type}`);
        const cartData = await cartResponse.json();
        if (cartData.update_sta === true) {            
          fetchData();
        }
      } catch (error) {
        console.error('Error updating cart:', error);
      }
  
     
  }

  return (
    <div><>
    <section id="breadcrumbRow" className="row">
      <h2>cart</h2>
      <div className="row pageTitle m0">
        <div className="container">
          <h4 className="fleft">cart</h4>
          <ul className="breadcrumb fright">
            <li>
              <a href="/">home</a>
            </li>
            <li className="active">cart</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="row contentRowPad">
      <div className="container">
        <div className=" cartPage">
        {
          isLoggedIn ? (
            <>
            {
              isCount ? (
                <>
                  <h3 className="heading pageHeading">Shopping cart</h3>
                    
                    <div className="table-responsive cartTable row m0">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="productImage">Product image</th>
                            <th className="productName">Product name</th>
                            <th>Weight</th>
                            <th>quantity</th>
                            <th>total</th>
                            <th>remove</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            cart.map((pro) => (
                         
                            <tr key={pro.caId}>
                              <td className="productImage">
                                <img
                                  src={pro.capImg}
                                  alt={pro.capName}
                                />
                              </td>

                              <td className="productName">
                                <h6 className="heading">
                                  {pro.capName}
                                </h6>
                                
                              </td>

                              <td className="price">
                                {pro.capWgt}
                              </td>

                              <td style={{ display: "flex", border: "none" }}>
                                <button
                                  type="button"
                                  style={{ width: 5 }}
                                  className="form-control  btn btn-primary btn-sm" 
                                  onClick={() => qty(pro.caId, pro.caQty, 'sub')}                                 
                                >
                                  -
                                </button>

                                <span
                                  style={{ width: 80, textAlign: "center" }}
                                  className="form-control">
                                  {pro.caQty}  
                                  </span>                                  
                                  
                                  
                                

                                <button
                                  type="button"
                                  style={{ width: 5 }}
                                  className="form-control btn btn-primary btn-sm"
                                  onClick={() => qty(pro.caId, pro.caQty, 'add')}  
                                >
                                  +
                                </button>
                              </td>
                              <td className="price">
                              {pro.capWgt * pro.caQty}
                              </td>
                              <td>
                                <a href="#!" className="edit"  onClick={() => qty(pro.caId, pro.caQty, 'delete')}   >
                                  <i className="far fa-trash-alt" />
                                </a>
                              </td>
                            </tr>

                            ))

                            }
                        
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan={7}>
                              <Link to="/checkout" className="btn btn-primary btn-lg">
                                Proceed to Checkout
                              </Link>
                              <button
                                type="button"
                                className="btn btn-default btn-lg fright"                               
                              >
                                clear shopping cart
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>  
                </>

              ) : (

                <div className="col-12 text-center">
                  <img src="images/cart_is_empty.png" />
                </div>

              )

            }

          </>

          ) : (

              <div className="col-12 text-center">
                <h3>
                  Please <a href="/">Login</a> to View Cart
                </h3>
              </div> 

          )
        }
          
        </div>
      </div>
    </section>
  </>
  </div>
  )
}

export default Cart