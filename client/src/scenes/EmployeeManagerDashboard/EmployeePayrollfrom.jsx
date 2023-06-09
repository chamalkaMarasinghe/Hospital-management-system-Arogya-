import React, { useState } from 'react'
// import './index.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
import './EmployeePayrollform.css';

function EmployeePayrollform() {
        return(
      <>
      <body>
        <div>
      
        <div> <A_navbar/> <div/>
        <hr style={{height:'100px'}}></hr> 

        <h1 egistration className='topic'>Payroll form</h1>
        <div class="registration-form">
        <form >
            
            <div class="form-group">
                <h4>Employee ID</h4>
                <input type="text"  id="empId" placeholder="Employee ID" required/>
                
            </div>
            <div class="form-group">
                <h4>Employee Name</h4>
                <input type="text"  id="name" placeholder="Employee Name" required/>
            </div>
            <div class="form-group">
                <h4>Service Year</h4>
                <input type="text"  id="sYear" placeholder="Service Year" required/>
            </div>
            
            <div class="form-group">
                <h4>Working Days</h4>
                <input type="text"  id="C_num" placeholder="Working Days" required/>
            </div>
            <div class="form-group">
            <h4>WorkingHours</h4>
                <input type="text"  id="WorkingHours" placeholder="WorkingHours" required/>
            </div>
            <div class="form-group">
            <h4>OT Rate</h4>
                <input type="text"  id="OT" placeholder="OT Rate" required/>
            </div>
            <div class="form-group">
            <h4>Basic Salary</h4>
                <input type="text"  id="Bsal" placeholder="Basic Salary" required/>
            </div>
        
            <div class="form-group">
                <button type="submit" >Create Account</button>
                <button type="submit" >Back</button>
            </div>
        </form>
    </div> 
       
       <hr style={{height:'100px'}}></hr>
        <div><Footer/></div>
           
         </div> 
         </div>
         </body>
        </>
    )
}
export default EmployeePayrollform;