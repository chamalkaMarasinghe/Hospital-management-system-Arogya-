import React, { useEffect, useState } from 'react'
// import './index.css';
import './Doctor.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
function Doctor() {
  const [specificCategory, setSpecificCategory] = useState([])
  const [showUpdate, setShowUpdate] = useState(false)
  const [updatableObjectId, setUpdatableObjectId] = useState('')
  const [fn, setFn] = useState('')
  const [ln, setLn] = useState('')
  const [gender, setGender] = useState('')
  const [dob, setDob] = useState('')
  const [nic, setNic] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [contactNum, setContactnum] = useState('')
  const [email, setEmail] = useState('')
  const [qulification, setQualification] = useState('')
  const [remark, setRemark] = useState('')
  const [password, setPassword] = useState('')
//Get method
  const loadData = async() => {
    const req = await fetch("http://localhost:3001/Employee/getSpecificCategory/Doctor", {
      method : "GET",
    })
    const res = req.json()
    return res
  }
//update
const submitMethod = async(e) => {
  e.preventDefault()
  const req = await fetch(`http://localhost:3001/Employee/update/${updatableObjectId}`, {
    method : "PUT",
    headers : {'content-type' : 'application/json'},
    body : JSON.stringify({
      newFirstname : fn,
      newlastname : ln,
      newgender : gender,
      newDOB : dob,
      newNIC : nic,
      newAddress : address,
      newContactnumber : contactNum,
      newEmail  : email,
      newQulification : qulification,
      newremark  : remark,
      newpassword : password
    })
  })
  const res = req.json()
  alert("updated")
  
}
//delete
const deleteMethod = async(id) => {
  const req = await fetch(`http://localhost:3001/Employee/delete/${id}`, {
    method : "DELETE"
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
        <hr style={{height:'100px'}}></hr><div><h1 className='topic'>Doctor List</h1></div>
{/* Read table   */}
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
  {/* Put the feilds */}
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

export default Doctor;