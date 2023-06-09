import React from 'react'
import './Pharmacist.css';
// import './index.css';
import './EmployeePayroll.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
// import { useState } from 'react';
// import axios from 'axios';
// EmpID,Name,service_period,WorkingDays,WorkingHours,OT,Basic_Sal
 function EmployeePayroll() {
//     const [empID, setempID] = useState("")
//     const [name, setname] = useState("")
//     const [service_Period, setservice_Period] = useState("")
//     const [workingDays, setworkingDays] = useState("")
//     const [workingHours, setworkingHourss] = useState("")
//     const [ot, setot] = useState("")
//     const [basic_Sal, setbasic_Sal] = useState("")


    
//     const sendData = async(e) => {
//       e.preventDefault();
//       const newEchannel = {
//         EmpID : empID,
//         Name : name,
//         service_period : service_Period,
//         WorkingDays :  workingDays,
//         WorkingHours : workingHours,
//         OT:ot,
//         Basic_Sal:basic_Sal,

//       }

//       console.log(newEchannel);

//       await axios.post("http://localhost:3001/Echannel/insert", newEchannel).then(()=>{
//         alert("Channel added successfully")

//       }).catch((err)=>{
//         alert("error adding")
//       })
//     }
    return (
       <>
        
         <div><A_navbar/></div>
        <hr style={{height:'100px'}}></hr><div><h1 className='topic'>Empolyee Payment Details</h1></div>
        
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Service Period</th>
      <th scope="col">Working Days</th>
      <th scope="col">Working Hourse</th>
      <th scope="col">OT Rate</th>
      <th scope="col">Basic Salary</th>
      <th scope="col">Total Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
    <tr>
    <th scope="row">5</th>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
    </tr>
  </tbody>
</table>


        
         <div><Footer/></div>   
        </>
    )
}

export default EmployeePayroll;