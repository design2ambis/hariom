
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

const Checkout = () => {

    const token = localStorage.getItem("token");

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        townCity: '',
        stateCountry: '',
        zipcode: '',
        phone: '',
        save: false,
        token:token,
        order_confirmation:''
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://hariomgolds.com/api/insert', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if(data.status===true){
                Swal.fire({
                    title: 'Success',
                    text: 'Order Placed Successfully',
                    icon: 'success'
                  }).then(()=>{
                        window.location.href='/account'
                  });
            }
            console.log('Form submitted:', data);

        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors or display an error message to the user
        }
    };

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isCount, setIsCount] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartTot, setTot] = useState([]);

    const username = localStorage.getItem("token");

    useEffect(() => {
        if (username !== null) {
            setIsLoggedIn(true);
        }
    }, []);

    const fetchData = async () => {
        var tot = 0;
        try {
            const cartResponse = await fetch('https://hariomgolds.com/api/select?get_cart&token=' + username);
            const cartData = await cartResponse.json();
            if (cartData.status === 200) {
                if (cartData.data.length > 0) {
                    setCart(cartData.data);
                    setIsCount(true);
                    for (let i = 0; i < cartData.data.length; i++) {
                        tot = parseFloat(tot) + (parseFloat(cartData.data[i].capWgt) * parseFloat(cartData.data[i].caQty));
                    }
                    setTot(tot);
                } else {
                    setIsCount(false);
                }
            } else {
                setIsCount(false);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <>
            <section id="breadcrumbRow" className="row">
                <h2>checkout</h2>
                <div className="row pageTitle m0">
                    <div className="container">
                        <h4 className="fleft">checkout</h4>
                        <ul className="breadcrumb fright">
                            <li>
                                <a href="/">home</a>
                            </li>
                            <li className="active">checkout</li>
                        </ul>
                    </div>
                </div>
            </section>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        .form-control{\n            margin: 7px;\n        }\n    "
                }}
            />
            <form className="row contentRowPad" onSubmit={handleSubmit}>
                <div className="container">
                    <div className="row mb-3">

                        {
                            isLoggedIn ? (
                                <>
                                    <div className="col-sm-7 loginRow" >
                                        <div className="login row m0">
                                            <div className="row loginInner">
                                                <div className="col-sm-12" id="billingAddress">
                                                    <h4 className="heading">Billing Address</h4>
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                id="firstName"
                                                                placeholder="First Name *"
                                                                className="form-control"
                                                                value={formData.fname}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                id="lastName"
                                                                placeholder="Last Name"
                                                                className="form-control"
                                                                value={formData.lname}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="companyName"
                                                        id="companyName"
                                                        placeholder="Company Name *"
                                                        className="form-control"
                                                        value={formData.cname}
                                                        onChange={handleChange}
                                                    />
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        id="address"
                                                        placeholder="Address"
                                                        className="form-control"
                                                        value={formData.add}
                                                        onChange={handleChange}
                                                    />
                                                    <input
                                                        type="text"
                                                        name="townCity"
                                                        id="townCity"
                                                        placeholder="Town / City"
                                                        className="form-control"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                    />
                                                    <input
                                                        type="text"
                                                        name="stateCountry"
                                                        id="stateCountry"
                                                        placeholder="State / Country"
                                                        className="form-control"
                                                        value={formData.state}
                                                        onChange={handleChange}
                                                    />
                                                    <div className="row">
                                                        <div className="col-sm-6">
                                                            <input
                                                                type="text"
                                                                name="zipcode"
                                                                id="zipcode"
                                                                placeholder="Postcode / ZIP"
                                                                className="form-control"
                                                                value={formData.zip}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                id="phone"
                                                                placeholder="Phone *"
                                                                className="form-control"
                                                                value={formData.phone}
                                                                onChange={handleChange}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        name="save"
                                                        id="save"
                                                        style={{ marginLeft: '7px' }}
                                                        checked={formData.save}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor="save" style={{ padding: '20px' }}> Save this Billing Address </label>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-5 orderSummaryRow">
                                        <div className="row orderSummary m0">
                                            <h5 className="heading">Order summary</h5>
                                            <div className="row m-4 orderSummaryInner table-responsive">
                                                <table className="table table-condensed">
                                                    <thead>
                                                        <tr>
                                                            <th>Products</th>
                                                            <th>Weight</th>
                                                            <th>Qty</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {cart.map((c) => (
                                                            <tr key={c.caId}>
                                                                <td>{c.capName}</td>
                                                                <td>{c.capWgt}</td>
                                                                <td>{c.caQty}</td>
                                                                <td>{c.capWgt * c.caQty}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td>cart subtotal</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>shipping</td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>Free Shipping</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Total Order weight</td>
                                                            <td />
                                                            <td />
                                                            <td>{cartTot}</td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 text-center">
                                        <button
                                            type="submit"

                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>

                                </>

                            ) : (

                                <>

                                    <div className="col-12 text-center">
                                        <img src="images/cart_is_empty.png" />
                                    </div>

                                </>


                            )


                        }


                    </div>
                    <hr />
                </div>
            </form>
        </>

    )
}

export default Checkout