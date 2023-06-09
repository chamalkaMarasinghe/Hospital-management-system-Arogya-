// import React from 'react'
// import './index.css';
// import A_navbar from '../../components/A_navbar';
// import Footer from '../../components/footer';
// // import img01 from '../../../src/scenes/EmployeeManagerDashboard/image/bc1.jpg';
// function EmployeeManagerDashboard() {
//     return (
//        <>
//         <div><A_navbar/></div>
//         <hr style={{height:'100px'}}></hr>
//         <div className='dashboard '>
//             <div id='mm'>
        
//             <div id='hd' style={{textAlign:'center',fontSize:'25px'}}><h1>Service Dashboard</h1></div>
//              <div>
//                 <div><button style={{marginLeft:'30%'}}  className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Admin"} ><img src="assets/img/empd/admin.png" alt="Admin Image" height={"80px"} width={"120px"} border-radius={"50"}/><h5>Admin</h5></button>     <button className='btn' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/ambulance.png" alt="ambulance Image" height={"80px"} width={"120px"} /><h5>Ambulence</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/Echanel.png" alt="Echanel Image" height={"80px"} width={"120px"} /><h5>E Chanel</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/Inventory.png" alt="Inventory.png Image" height={"80px"} width={"120px"} /><h5>Inventory</h5></button> </div>
//                 <div></div>
//                 <div></div>
//                 <div><button style={{marginLeft:'33%'}} className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/ward.png" alt="ward Image" height={"80px"} width={"120px"} border-radius={"50"} /><h6>Ward</h6></button>     <button className='btn' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/pharmacy.png" alt="pharmacy Image" height={"80px"} width={"120px"} /><h5>Pharmacy</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/Laboratory.png" alt="Laboratory Image" height={"80px"} width={"120px"} /><h5>Laboratary</h5></button></div>
//             </div> 
//             {/* id="row1BtnID" */}
//            </div>

//         </div>   
//         {/* <hr style={{height:'100px'}}></hr> */}

//         {/* <img src={img01} class="img-fluid" alt="Responsive image"/> */}

//         <div><Footer/></div>
            
//         </>
//     )
// }


import React from 'react'
// import './index.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
import './EmployeeMain.css';

function EmployeeManagerDashboard() {
    return(
        <>
        <div>
          <div> <A_navbar/> </div> 
          <hr style={{height:'100px'}}></hr>
          <div className='dashboard '> 
          {/* <div id='hd' style={{textAlign:'center',fontSize:'25px'}}><h1 className='topic'>Employee Dashboard</h1></div> */}
          </div>
          <div id='hd' style={{textAlign:'center',fontSize:'25px'}}><h1>Service Dashboard</h1></div>
             {/* <div>
                <div><button style={{marginLeft:'30%'}}  className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Consultant"} ><img src="assets/img/empd/doctor.png" alt="Consultant Image" height={"80px"} width={"120px"} border-radius={"50"}/><h5>Consultant</h5></button>     <button className='btn' type="button" class="btn btn-primary btn-lg"onClick={()=>window.location.href="/Doctor"}><img src="assets/img/empd/doctor.png" alt="Doctor Image" height={"80px"} width={"120px"} /><h5>Doctor</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Nurse"}><img src="assets/img/empd/nurse.png" alt="Nurse Image" height={"80px"} width={"120px"} /><h5>Nurse</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Pharmacist"}><img src="assets/img/empd/Pharmacist.png" alt="Pharmacist.png Image" height={"80px"} width={"120px"} /><h5>Pharmacict</h5></button> </div>
                <div></div>
                <div></div>
                <div><button style={{marginLeft:'40%'}} className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/ostaff"}><img src="assets/img/empd/Eye Technician.png" alt="Staff Image" height={"80px"} width={"120px"} border-radius={"50"} /><h6>Other Staff</h6></button>     <button className='btn' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Driver"}><img src="assets/img/empd/driver.png" alt="Driver Image" height={"80px"} width={"120px"} /><h5>Driver</h5></button> </div>
            </div>  */}
             <div>
                <div><button style={{marginLeft:'30%'}}  className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Admin"} ><img src="assets/img/empd/admin.png" alt="Admin Image" height={"80px"} width={"120px"} border-radius={"50"}/><h5>Admin</h5></button>     <button className='btn' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/ambulance.png" alt="ambulance Image" height={"80px"} width={"120px"} /><h5>Ambulence</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/Echanel.png" alt="Echanel Image" height={"80px"} width={"120px"} /><h5>E Chanel</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/Inventory.png" alt="Inventory.png Image" height={"80px"} width={"120px"} /><h5>Inventory</h5></button> </div>
                <div></div>
                <div></div>
                <div><button style={{marginLeft:'37%'}} className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/ward.png" alt="ward Image" height={"80px"} width={"120px"} border-radius={"50"} /><h6>Ward</h6></button>     <button className='btn' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/pharmacy.png" alt="pharmacy Image" height={"80px"} width={"120px"} /><h5>Pharmacy</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg"><img src="assets/img/empd/Laboratory.png" alt="Laboratory Image" height={"80px"} width={"120px"} /><h5>Laboratary</h5></button></div>
            </div> 
     
         
         <hr style={{height:'100px'}}></hr>
             <div><Footer/> </div> 
         </div>
         </>
    )
}
export default EmployeeManagerDashboard;