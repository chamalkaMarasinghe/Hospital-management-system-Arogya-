import React, { useEffect, useState } from 'react'
// import './index.css';
import './Driver.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
function Driver() {
  const [specificCategory, setSpecificCategory] = useState([])

    const loadData = async() => {
      const req = await fetch("http://localhost:3001/Employee/getSpecificCategory/Driver", {
        method : "GET",
      })
      const res = req.json()
      return res
    }

    useEffect(() => {
      loadData().then((res) => {setSpecificCategory(res.result)})
    }, [])
    return (
       <>
        
         <div><A_navbar/></div>
        <hr style={{height:'100px'}}></hr><div><h1 className='topic'>Driver List</h1></div>
        
        <table class="table table-bordered">
        <thead>
    <tr>
      <th scope="col">Index</th>
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
      {
        specificCategory.map((obj, index) => {
          return(
            <tbody key={index}>
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{obj.Firstname}</td>
                <td>{obj.lastname}</td>
                <td>{obj.gender}</td>
                <td>{obj.DOB}</td>
                <td>{obj.NIC}</td>
                <td>{obj.Address}</td>
                <td>{obj.Email}</td>
                <td>{obj.Qulification}</td>
                <td>{obj.remark}</td>
                <td>{obj.password}</td>
              </tr>
            </tbody>
          )
        })
      }
</table>        
         <div><Footer/></div>   
        </>
    )
}

export default Driver;