import { React, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Orderdetails = (props) => {


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [cart, setCart] = useState([]);
    const { orderId } = useParams();




    const username = localStorage.getItem("token");

    useEffect(() => {
        if (username !== null) {
            setIsLoggedIn(true);
        }
    }, []);





    useEffect(() => {
        const fetchData = async () => {
            try {
                const proRes = await fetch(
                    `https://hariomgolds.com/api/select?get_order_details&id=${orderId}`
                );
                const proData = await proRes.json();
                if (proData.status === 200) {
                    setCart(proData.data);
                } else {

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return (
        <>

            <section id="breadcrumbRow" className="row">
                <h2>Account</h2>
                <div className="row pageTitle m0">
                    <div className="container">
                        <h4 className="fleft">Account</h4>
                        <ul className="breadcrumb fright">
                            <li><a href="/">Home</a></li>
                            <li><Link to="/account">My Order</Link></li>
                            <li className="active">My Order Details</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="row contentRowPad">
                <div className="container">
                    <div className=" cartPage">

                        <h3 className="heading pageHeading">Order Details</h3>

                        <div className="table-responsive cartTable row m0">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Design no</th>
                                        <th>Qty</th>
                                        <th>Image</th>
                                        <th>Weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((pro, index) => (
                                            <tr key={index}>
                                                <td className="productImage">{index + 1}</td>
                                                <td className="productName">{pro.proname}</td>
                                                <td className="qty">{pro.qty}</td>
                                                <td className="qty">
                                                   <img src={pro.img} alt={pro.proname}  style={{width: "80px"}}/>
                                                </td>
                                                <td className="qty">{pro.wgt}</td>

                                            </tr>
                                        ))

                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>

        </>

    )



}

export default Orderdetails