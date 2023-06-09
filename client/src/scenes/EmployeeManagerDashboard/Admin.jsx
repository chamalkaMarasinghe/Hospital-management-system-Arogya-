import React from 'react'
// import './index.css';
import './Admin.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
function Admin() {
    return (
       <>
        
         <div><A_navbar/></div><body>
        <hr style={{height:'100px'}}></hr><div><h1 className='topic'>Admin Page</h1></div>
        <div class="container">
  
        <button type="button" class="button1" onClick={()=>window.location.href="/EmployeeRegFor"} ><h5>ADD New Employee</h5></button><br></br>
        <button type="button" class="button1" onClick={()=>window.location.href="/AtForm"}><h5>Employee Attendence Form</h5></button>
        <button type="button" class="button1" onClick={()=>window.location.href="/Employee_at"}><h5>Check Employee Attendance</h5></button>
        <button type="button" class="button1" onClick={()=>window.location.href="/EmployeePayrollform"}><h5>Create Employee Salary</h5></button>
        <button type="button" class="button1" onClick={()=>window.location.href="/EmployeeMain"}><h5>Check Employee Profile</h5></button>
        <button type="button" class="button1" onClick={()=>window.location.href="/EmployeeManagerDashboard"}><h5>Log out</h5></button>



    </div>
    
 
    
 

        

        </body> 
         <div><Footer/></div>  
        </>
    )
}

export default Admin;