import React, { useState } from 'react'
// import './index.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
import './AtForm.css';


function AtForm() {
        return(
      <>
      <body>
        <div>
      
        <div> <A_navbar/> <div/>
        <hr style={{height:'100px'}}></hr> 

        <h1 egistration className='topic'>Attendence Form</h1>
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
                <h4>Positionr</h4>
                <input type="text"  id="position" placeholder="Position" required/>
            </div>
            
            <div class="form-group">
                <h4>Arrived Time</h4>
                <input type="time"  id="Arivedtime" placeholder="Arrived Time" required/>
            </div>
            <div class="form-group">
            <h4>Leaved Time</h4>
                <input type="Time"  id="leavesTime" placeholder="Leaved Time" required/>
            </div>
            <div class="form-group">
            <h4>Leaves</h4>
                <input type="text"  id="leaves" placeholder="Leaves" required/>
            </div>
            
        
            <div class="form-group">
                <button type="submit" color='green'>Create Account</button>
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
export default AtForm;