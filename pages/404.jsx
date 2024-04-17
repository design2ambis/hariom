import React from "react";

export const Error404 = () => {
  return (
    <>
        <section id="breadcrumbRow" className="row">
         <h2>404</h2>
         <div className="row pageTitle m0">
            <div className="container">
               <h4 className="fleft">404</h4>
               <ul className="breadcrumb fright">
                  <li><a href="index.php">home</a></li>
                  <li className="active">404</li>
               </ul>
            </div>
         </div>
</section>
      <section id="page404" className="row contentRowPad">
         <div className="container">
            <img src="images/404.png" alt="" />
            <h1>Error 404</h1>
            <h2>Oops! page not found</h2>
         </div>
      </section>
    </>
  )
}

export default Error404