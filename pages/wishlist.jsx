import React from 'react'

const Wishlist = () => {
  return (
    <>
  <section id="breadcrumbRow" className="row">
    <h2>Wishlist</h2>
    <div className="row pageTitle m0">
      <div className="container">
        <h4 className="fleft">Wishlist</h4>
        <ul className="breadcrumb fright">
          <li>
            <a href="/">home</a>
          </li>
          <li className="active">Wishlist</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="row contentRowPad">
    <div className="container">
      <div className=" cartPage">
        <h3 className="heading pageHeading">Favourite Products</h3>
        {/*?php 
              if(isset($_SESSION['CUSTOMER_LOGIN']) && $_SESSION['CUSTOMER_LOGIN']="YES"){ 
                  $cId = $_SESSION['CUSTOMER_ID'];
                  $res = mysqli_query($con,"select * from tbl_wishlist where wuId = '$cId' ");
                      if(mysqli_num_rows($res)*/}
        0){"{"}
        ?&gt;
        <div className="table-responsive cartTable row m0">
          <table className="table">
            <thead>
              <tr>
                <th className="productImage">Product image</th>
                <th className="productName">Product name</th>
                <th>Weight</th>
                <th>remove</th>
              </tr>
            </thead>
            <tbody>
              {/*?php
                          
                         
                              $x=1;
                              while($row = mysqli_fetch_assoc($res)){ 
                                  
                                  $pId=$row['wpId'];
                                  $curl = curl_init();
                                  curl_setopt($curl, CURLOPT_URL, 'https://www.utsarvajewels.com/api/crud?get_product_details&pId='.$pId);
                                  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                                  $response = curl_exec($curl);
                                  curl_close($curl);
                                  $rowpro = json_decode($response, true);
                                  
  
                           ?*/}
              <tr id="id_<?php echo $row['wId'] ?>">
                <td className="productImage">
                  <a href="single-product.php?id=<?php echo encrypt($row['wpId']) ?>">
                    <img
                      src="<?php echo DESIGN_SITE.$rowpro['design_image'] ?>"
                      alt="<?php echo $rowpro['design_no'] ?>"
                    />
                  </a>
                </td>
                <td className="productName">
                  <h6 className="heading">
                    <a href="single-product.php?id=<?php echo encrypt($row['wpId']) ?>">
                      {/*?php echo $rowpro['design_no'] ?*/}
                    </a>
                  </h6>
                  <div className="row descList m0">
                    <dl className="dl-horizontal">
                      <dt>category :</dt>
                      <dd>{/*?php echo $rowpro['category_name'] ?*/}</dd>
                      <dt>sub-category :</dt>
                      <dd>{/*?php echo $rowpro['sub_cat_name'] ?*/}</dd>
                    </dl>
                  </div>
                </td>
                <td className="price" id="wei_<?php echo $x ?>">
                  {/*?php echo $rowpro['design_weight'] ?*/}
                </td>
                <td>
                  <a
                    href="javascript:void(0)"
                    onclick="wish_remove('<?php echo $row['wId'] ?>','<?php echo $x ?>')"
                    className="edit"
                  >
                    <i className="far fa-trash-alt" />
                  </a>
                </td>
              </tr>
              {/*?php $x++;} ?*/}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={7}>
                  <button
                    type="button"
                    className="btn btn-default btn-lg fright"
                    onclick="clearWish()"
                  >
                    clear wishlist
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        {/*?php }else{ ?*/}
        <div className="col-12 text-center">
          <img src="images/empty-wishlist.png" />
        </div>
        {/*?php } ?*/}
        {/*?php }else{ ?*/}
        <div className="col-12 text-center">
          <h3>
            Please <a href="signin_register">Login</a> to View Wishlist
          </h3>
        </div>
        {/*?php } ?*/}
        {/*<div class="row m0">
            <div class="col-sm-4">
               <form class="row discountCupon m0" action="#" method="get">
                  <h5 class="heading">Discount codes</h5>
                  <p>Enter your coupon code</p>
                  <input type="text" class="form-control" name="cuponCode" id="cuponCode">
                  <input type="submit" class="btn btn-default btn-sm" value="apply code">
               </form>
            </div>
            <div class="col-sm-4">
               <form class="row m0 shippingTax" action="#" method="get">
                  <h5 class="heading">Estimate shipping and tax</h5>
                  <p>Enter your destination to get a shipping estimate</p>
                  <div class="form-group">
                     <label for="country">Country*</label>
                     <select class="selectpicker countrySelect">
                        <option value="bd">Australia</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                     </select>
                  </div>
                  <div class="form-group">
                     <label for="country">State/Province</label>
                     <select class="selectpicker countrySelect">
                        <option value="">Please select region, state or province</option>
                        <option value="Australian Capital Territory">Australian Capital Territory</option>
                        <option value="New South Wales">New South Wales</option>
                        <option value="Northern Territory">Northern Territory</option>
                        <option value="Queensland">Queensland</option>
                        <option value="South Australia">South Australia</option>
                        <option value="South Australia">Tasmania</option>
                        <option value="South Australia">Victoria</option>
                        <option value="South Australia">Western Australia</option>
                     </select>
                  </div>
                  <div class="form-group">
                     <label for="country">Zip/Postal Code</label>
                     <input type="text" class="form-control">
                  </div>
                  <input type="submit" class="btn btn-default btn-sm" value="get a code">
               </form>
            </div>
            <div class="col-sm-4">
               <div class="row m0 totalCheckout">
                  <div class="descList row m0">
                     <dl class="dl-horizontal">
                        <dt>Subtotal</dt>
                        <dd>$1260</dd>
                        <dt class="gt">Grand Total</dt>
                        <dd>$1260</dd>
                     </dl>
                  </div>
                  <a href="#" class="btn btn-default btn-sm">Proceed to Checkout</a>
                  <a href="#" class="link">Checkout with multiple addresses</a>
               </div>
            </div>
         </div>*/}
      </div>
    </div>
  </section>
</>

  )
}

export default Wishlist