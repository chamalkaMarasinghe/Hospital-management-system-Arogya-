import React, { useEffect, useState } from 'react'
// import './index.css';
import './Nurse.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
function Nurse() {
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
      const req = await fetch("http://localhost:3001/Employee/getSpecificCategory/Nurse", {
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
//read

    useEffect(() => {
      loadData().then((res) => {setSpecificCategory(res.result)})
    }, [])

    return (
      <><div></div>
        {
          !showUpdate &&
          <>
            <div><A_navbar/></div>
            <hr style={{height:'100px'}}></hr><div><h1 className='topic'>Nurse List</h1></div>

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
            <th>Update</th>
            <th>Delete</th>
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
            <td><button onClick={() => {setUpdatableObjectId(obj._id); setFn(obj.Firstname); setLn(obj.lastname); setGender(obj.gender); setDob(obj.DOB); setNic(obj.NIC); setAddress(obj.Address); setEmail(obj.Email); setQualification(obj.Qulification); setRemark(obj.remark); setPassword(obj.password); setShowUpdate(true)}} color='2E9732'>Update</button></td>
            <td><button onClick={() => {deleteMethod(obj._id)}} >Delete</button></td>
            </tr>
            </tbody>
            )
            })
            }
            </table>        
            <div><Footer/></div> 
          </>
          
        }
        {
          showUpdate &&
          <>
            <body>
            <div>

            <div> <A_navbar/> <div/>
            <hr style={{height:'100px'}}></hr> 

            <h1 egistration className='topic'>Employee Update</h1>
            <div class="registration-form">
            <form onSubmit={submitMethod}>

            <div class="form-group">
            <h4>First Name</h4>
            <input type="text" onChange={(e) => {setFn(e.target.value);}} id="f_name" placeholder="First Name" value={fn}/>

            </div>
            <div class="form-group">
            <h4>Last Name</h4>
            <input type="text" onChange={(e) => {setLn(e.target.value)}} id="L_name" placeholder="Last Name" value={ln}/>
            </div>
            <div>
            <h4>Gender</h4><div class="form-check form-check-inline">
            <input  onChange={(e) => {setGender(e.target.value)}} class="form-check-input" type="radio" name='maleRBtn' id="inlineCheckbox1" value="Male"/>
            <label class="form-check-label" for="inlineCheckbox1">Male</label>
            </div>

            <div class="form-check form-check-inline">
            <input  onChange={(e) => {setGender(e.target.value)}} class="form-check-input" type="radio" name='maleRBtn' id="inlineCheckbox2" value="Female"/>
            <label class="form-check-label" for="inlineCheckbox2">Female</label>
            </div>
            </div>

            <div class="form-group">
            <h4>Date Of Birth</h4>
            <input type="date" onChange={(e) => {setDob(e.target.value)}} id="birth-date" placeholder="Date Of Birth" value={dob}/>
            </div>
            <div class="form-group">
            <h4>NIC</h4>
            <input type="text" onChange={(e) => {setNic(e.target.value)}} id="NIC" placeholder="NIC" value={nic}/>
            </div>
            <div class="form-group">
            <h4>Address</h4>  
            <input type="text" onChange={(e) => {setAddress(e.target.value)}} id="Address" placeholder="Address" value={address}/>
            <input type="text" onChange={(e) => {setCity(e.target.value)}} id="City" placeholder="City" value={city}/>
            <input type="text" onChange={(e) => {setProvince(e.target.value)}} id="Province" placeholder="Province" value={province}/>
            <input type="text" onChange={(e) => {setZipcode(e.target.value)}} id="Zip code" placeholder="Zip code" province={zipcode}/>

            </div>
            <div class="form-group">
            <h4>Contact Number</h4>
            <input type="text" onChange={(e) => {setContactnum(e.target.value)}} id="C_num" placeholder="Contact Number" value={contactNum}/>
            </div>
            <div class="form-group">
            <h4>Email</h4>
            <input type="text" onChange={(e) => {setEmail(e.target.value)}} id="email" placeholder="Email" value={email}/>
            </div>
            <div class="form-group">
            <h4>Qulification</h4>
            <input type="text" onChange={(e) => {setQualification(e.target.value)}} id="Quli" placeholder="Qlification" value={qulification}/>
            </div>
            <div class="form-group">
            <h4>Remark</h4>
            <input type="text" onChange={(e) => {setRemark(e.target.value)}} id="Rem" placeholder="Remark" value={remark}/>
            </div>
            <div class="form-group">
            <h4>Password</h4>
            <input type="password" onChange={(e) => {setPassword(e.target.value)}} id="password" placeholder="Password" value={password}/>
            </div>

            <div class="form-group">
            <button type="submit" >Update</button>
            <button onClick={() => {setShowUpdate(false)}}>Back</button>
            </div>
            </form>
            </div> 

            <hr style={{height:'100px'}}></hr>
            <div><Footer/></div>

            </div> 
            </div>
            </body>
          </>
        }
        
      </>
    )
}

export default Nurse;