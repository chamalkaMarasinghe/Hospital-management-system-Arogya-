import React from 'react'
// import './index.css';
import './Employee_at.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
function Employee_at() {
    return (
       <>

         <div><A_navbar/></div>
        <hr style={{height:'100px'}}></hr><div><h1 className='topic'>Employee Attendence</h1></div>
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Employee ID</th>
      <th scope="col">Employee Name</th>
      <th scope="col">Position</th>
      <th scope="col">Arrived Time</th>
      <th scope="col">Leaved Time</th>
      <th scope="col">Leaves</th>
     
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
      
      
    </tr>
    <tr>
      <th scope="row">2</th>
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

    </tr>
    <tr>
    <th scope="row">4</th>
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
      
    </tr>
    <tr>
    <th scope="row">5</th>
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

export default Employee_at;