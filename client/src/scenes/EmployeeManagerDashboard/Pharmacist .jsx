import React from 'react'
import './Pharmacist.css';
import './index.css';
import './Doctor.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
function Nurse() {
    return (
       <>
        
         <div><A_navbar/></div>
        <hr style={{height:'100px'}}></hr><div><h1 className='topic'>Pharmacist List</h1></div>
        
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Fitst Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Gender</th>
      <th scope="col">DOB</th>
      <th scope="col">NIC</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
      <th scope="col">Qlification</th>
      <th scope="col">Title</th>
      <th scope="col">Password</th>
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
      <td>Otto</td>
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
      <td>Otto</td>
      <td>Otto</td>
      
    </tr>
    <tr>
    <th scope="row">3</th>
    <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td>Otto</td>
      
    </tr>
    <tr>
    <th scope="row">4</th>
    <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td>Otto</td>
      
    </tr>
    <tr>
    <th scope="row">4</th>
    <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td>Otto</td>
      
    </tr>
    <tr>
    <th scope="row">5</th>
    <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>Otto</td>
      <td>Otto</td>
      
    </tr>
  </tbody>
</table>        
         <div><Footer/></div>   
        </>
    )
}

export default Nurse;