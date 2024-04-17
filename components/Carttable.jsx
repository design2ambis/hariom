import  {React , useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const Carttable = () => {

    const [cart, setCart] = useState([]);  
    const [cartCount, setcartCount] = useState([0]);  

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchData = async () => {
          try {
            const cartResponse = await fetch(`https://hariomgolds.com/api/select?get_cart&token=${token}`);
            const cartData = await cartResponse.json();
            if (cartData.status === 200) {
             
                setCart(cartData.data);
                setcartCount(cartData.data.length)
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <>
        <Link to="/cart">
            <span className="wish">
                <i className="fas fa-gem" />{cartCount}
            </span>
            <span>My cart</span>
        </Link>

        <div className="hclist">
            <div className="table-responsive">
                <table className="table">
                <thead>
                    <tr>
                    <th className="productImage">
                        Product image
                    </th>
                    <th className="productName">Product name</th>
                    </tr>
                </thead>
                <tbody>

                    

                {(cartCount)>0  ?(
                    <>
                        {cart.map((cart, index) => (
                            <tr key={index}>
                                <td className="productImage">
                                    <img
                                    src={cart.capImg}
                                    style={{ width: 50 }}
                                    alt={cart.capName}
                                    />
                                </td>
                                <td className="productName">
                                    <h6 className="heading">{cart.capName}</h6>
                                </td>
                            </tr>
                         ))}
                         </>
                    ) : (
                        <tr><td colSpan={3} style={{textAlign:"center"}}>No Data</td></tr>
                    )}
                    
                </tbody>
                </table>
            </div>
        </div>
    
    </>
  )
}

export default Carttable