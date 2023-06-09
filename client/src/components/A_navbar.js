import { Navigate } from "react-router-dom";

function A_navbar() {
     return(
      <>
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
            <div className="align-items-center d-none d-md-flex">
              <i className="bi bi-clock"></i> 24 hours open
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-phone"></i> Call us now  047 2237 313
            </div>
          </div>
        </div>
      
     
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center" style={{ textAlign:'center'}}>
      
            {/* <a href="index.html" className="logo me-auto"></a> */}
           
            <h1 className="logo me-auto" ><a href="index.html">AROGYA HOSPITAL</a></h1>
            <button type="button" class="btn btn-primary" onClick={()=>window.location.href="/EmployeeManagerDashboard"}>Logout</button>
      
            {/* <nav id="navbar" className="navbar order-last order-lg-0"></nav> */}
          </div>
        </header>
        </>
     );


}

export default A_navbar;