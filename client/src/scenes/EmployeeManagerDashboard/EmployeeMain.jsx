import React from 'react'
// import './index.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
import './EmployeeMain.css';

function EmployeeMain() {
    return(
        <>
        <div>
          <div> <A_navbar/> </div> 
          <hr style={{height:'100px'}}></hr>
          <div className='dashboard '> 
          <div id='hd' style={{textAlign:'center',fontSize:'25px'}}><h1 className='topic'>Employee Dashboard</h1></div>
          </div>
          <div id='hd' style={{textAlign:'center',fontSize:'25px'}}><h1>Service Dashboard</h1></div>
             <div>
                <div><button style={{marginLeft:'30%'}}  className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Consultant"} ><img src="assets/img/empd/doctor.png" alt="Consultant Image" height={"80px"} width={"120px"} border-radius={"50"}/><h5>Consultant</h5></button>     <button className='btn' type="button" class="btn btn-primary btn-lg"onClick={()=>window.location.href="/Doctor"}><img src="assets/img/empd/doctor.png" alt="Doctor Image" height={"80px"} width={"120px"} /><h5>Doctor</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Nurse"}><img src="assets/img/empd/nurse.png" alt="Nurse Image" height={"80px"} width={"120px"} /><h5>Nurse</h5></button>     <button className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Pharmacist"}><img src="assets/img/empd/Pharmacist.png" alt="Pharmacist.png Image" height={"80px"} width={"120px"} /><h5>Pharmacict</h5></button> </div>
                <div></div>
                <div></div>
                <div><button style={{marginLeft:'40%'}} className='btn1' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/ostaff"}><img src="assets/img/empd/Eye Technician.png" alt="Staff Image" height={"80px"} width={"120px"} border-radius={"50"} /><h6>Other Staff</h6></button>     <button className='btn' type="button" class="btn btn-primary btn-lg" onClick={()=>window.location.href="/Driver"}><img src="assets/img/empd/driver.png" alt="Driver Image" height={"80px"} width={"120px"} /><h5>Driver</h5></button> </div>
            </div> 

     
         
         <hr style={{height:'100px'}}></hr>
             <div><Footer/> </div> 
         </div>
         </>
    )
}
export default EmployeeMain;