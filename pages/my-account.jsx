import  {React , useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Account = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCount, setIsCount] = useState(false);
  const [cart, setCart] = useState([]);  

  const username = localStorage.getItem("token");

  useEffect(() => {
    if(username!==null){
        setIsLoggedIn(true);
      }
  }, []);

  const fetchData = async () => {
    try {
      const cartResponse = await fetch('https://hariomgolds.com/api/select?get_order&token='+username);
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

    function Status (type)  {
        if(type=='1'){
          return <button className='btn btn-warning text-warning' style={{backgroundColor: "#eb9316" }}>Pending</button>;
        }else if(type=='2'){
          return <button className='btn btn-success' style={{backgroundColor: "#419641" }}>Order Accept</button>;
        }else{
          return <button class='btn btn-primary' style={{backgroundColor: "#2e6da4" }}>Order complete</button>;
        }
    }


  return (
    <>

    <section id="breadcrumbRow" className="row">
         <h2>Account</h2>
         <div className="row pageTitle m0">
            <div className="container">
               <h4 className="fleft">Account</h4>
               <ul className="breadcrumb fright">
                  <li><a href="/">home</a></li>
                  <li className="active">My order</li>
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
                      <h3 className="heading pageHeading">My order</h3>
               
                       <div className="table-responsive cartTable row m0">
                          <table className="table">
                             <thead>
                                <tr>
                                   <th>Sno</th>
                                   <th>Orderno</th>
                                   <th>Qty</th>
                                   <th>Status</th>
                                   <th>View</th>
                                </tr>
                             </thead>
                             <tbody>
                              {                              
                              cart.map((pro, index) => (
                                <tr key={pro.id}>
                                    <td className="productImage">{index+1}</td>
                                    <td className="productName">SH-{pro.Orderno}</td>
                                    <td className="qty">{pro.Qty}</td>
                                    <td className="status">{Status(pro.OSta)}</td>
                                    <td className="view">
                                       <Link to={`/order-details/${pro.id}`} className="btn btn-primary">
                                          <i className="fas fa-eye"></i>
                                       </Link>
                                    </td>
                                </tr>
                               ))

                              }
                             </tbody>
                          </table>
                       </div>
                       </>
                       ) : (
                   
                            <div className="col-12 text-center"><img src="images/cart_is_empty.png" /></div>
                            
                            )

                          }
              
                        </>
              
                        ) : (
               
                    <div className="col-12 text-center"><h3>Please <a href="signin_register">Login</a> to View Cart</h3></div>
                    
                    )
                  }
               
            </div>
         </div>
      </section>
       
</>

  )
}

export default Account