import React, { useState } from 'react'
// import './index.css';
import A_navbar from '../../components/A_navbar';
import Footer from '../../components/footer';
import './EmployeeRegFor.css';

function EmployeeRegFor() {
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

const submitFunction = async(e) => {
e.preventDefault()
// console.log(fn);
// console.log(city);
// console.log(email);

const req = await fetch('http://localhost:3001/Employee/insert', {
method : "POST",
headers : { "content-type" : "application/json" },
body : JSON.stringify({
    Firstname : fn,
    lastname : ln,
    gender : gender,
    DOB : dob,
    NIC : nic,
    Address : `${address}, ${province}, ${zipcode}`,
    Contactnumber : contactNum,
    Email : email,
    Qulification : qulification,
    remark : remark,
    password : password,
})
})
const res = req.json()
alert(res.msg)
}

return(
<>
<body>
<div>

<div> <A_navbar/> <div/>
<hr style={{height:'100px'}}></hr> 

<h1 egistration className='topic'>Employee Registration</h1>
<div class="registration-form">
<form onSubmit={submitFunction}>

<div class="form-group">
    <h4>First Name</h4>
    <input type="text" onChange={(e) => {setFn(e.target.value);}} id="f_name" placeholder="First Name" required/>
    
</div>
<div class="form-group">
    <h4>Last Name</h4>
    <input type="text" onChange={(e) => {setLn(e.target.value)}} id="L_name" placeholder="Last Name" required/>
</div>
<div>
    <h4>Gender</h4><div class="form-check form-check-inline">
                <input  onChange={(e) => {setGender(e.target.value)}} class="form-check-input" type="radio" name='maleRBtn' id="inlineCheckbox1" value="male" />
                <label class="form-check-label" for="inlineCheckbox1">Male</label>
            </div>
            
            <div class="form-check form-check-inline">
                <input  onChange={(e) => {setGender(e.target.value)}} class="form-check-input" type="radio" name='maleRBtn' id="inlineCheckbox2" value="female" />
                <label class="form-check-label" for="inlineCheckbox2">Female</label>
            </div>
</div>

<div class="form-group">
    <h4>Date Of Birth</h4>
    <input type="date" onChange={(e) => {setDob(e.target.value)}} id="birth-date" placeholder="Date Of Birth" required/>
</div>
<div class="form-group">
    <h4>NIC</h4>
    <input type="text" onChange={(e) => {setNic(e.target.value)}} id="NIC" placeholder="NIC" required/>
</div>
<div class="form-group">
    <h4>Address</h4>  
    <input type="text" onChange={(e) => {setAddress(e.target.value)}} id="Address" placeholder="Address" required/>
    <input type="text" onChange={(e) => {setCity(e.target.value)}} id="City" placeholder="City" required/>
    <input type="text" onChange={(e) => {setProvince(e.target.value)}} id="Province" placeholder="Province" required/>
    <input type="text" onChange={(e) => {setZipcode(e.target.value)}} id="Zip code" placeholder="Zip code" required/>
    
</div>
<div class="form-group">
    <h4>Contact Number</h4>
    <input type="Number" onChange={(e) => {setContactnum(e.target.value)}} id="C_num" placeholder="Contact Number" required/>
</div>
<div class="form-group">
<h4>Email</h4>
    <input type="text" onChange={(e) => {setEmail(e.target.value)}} id="email" placeholder="Email" required/>
</div>
<div class="form-group">
<h4>Qulification</h4>
    <input type="text" onChange={(e) => {setQualification(e.target.value)}} id="Quli" placeholder="Qlification" required/>
</div>
<div class="form-group">
<h4>Remark</h4>
    <input type="text" onChange={(e) => {setRemark(e.target.value)}} id="Rem" placeholder="Remark" required/>
</div>
<div class="form-group">
    <h4>Password</h4>
    <input type="password" onChange={(e) => {setPassword(e.target.value)}} id="password" placeholder="Password" required/>
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
export default EmployeeRegFor;