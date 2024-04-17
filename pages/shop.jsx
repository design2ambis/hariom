import React from 'react'
import Gridproduct from '../components/gridproduct';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Shop = () => {
   let navigate = useNavigate();
  const { cat, subcat, page } = useParams();
  return (
    <>
  <section id="breadcrumbRow" className="row">
    <h2>{cat}</h2>
    <div className="row pageTitle m0">
      <div className="container">
        <ul className="breadcrumb fright">
          <li>
            <a href="index.php">SRI HARI OM</a>
          </li>
          <li>{cat}</li>
          <li className="active">{subcat}</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="row contentRowPad greybg">
    <div className="container">
      
        <Gridproduct cat={cat} subcat={subcat} page={page} />
      
    </div>
  </section>
</>

  )
}

export default Shop