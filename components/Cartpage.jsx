import React from 'react'

export const Cartpage = () => {
  return (
    <>
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

                                <input
                                  type="text"
                                  style={{ width: 80, textAlign: "center" }}
                                  className="form-control"                                  
                                  defaultValue={pro.caQty}
                                  min={1}
                                  readOnly=""
                                />

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
                                <a
                                  href="#!"
                                  
                                  className="edit"
                                >
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
                              <a href="checkout" className="btn btn-primary btn-lg">
                                Proceed to Checkout
                              </a>
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

            };

          </>

          ) : (

              <div className="col-12 text-center">
                <h3>
                  Please <a href="/">Login</a> to View Cart
                </h3>
              </div> 

          )
        };
          
        </div>
    </>
  )
}
