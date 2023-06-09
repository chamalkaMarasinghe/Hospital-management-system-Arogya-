import React from 'react';
import Footer from '../../components/footer';
import axios from 'axios';
import { useState } from 'react';
import image from './image/yasitha.jpg';

import './create_pinfor.css';
function Create_pinfor (){

    const [Wardnumber, setwardnumber] = useState("")
    const [Wardname, setwardname] = useState("")
    const [paitentname, setpaitentname] = useState("")
    const [Doctorname, setdoctorname] = useState("")
  


    const sendData = async(e) =>{
        console.log("infend");
        e.preventDefault();
        const newpaitentinfor ={
            wardNumber : Wardnumber,
            wardName : Wardname,
            paitentName : paitentname,
            headDocName : Doctorname,
           
        }
    
    await axios.post("http://localhost:3001/paitentinfor/insert",newpaitentinfor).then(()=>{alert("ward add successfully")

   }).catch((err)=>{
    alert("error adding")
   })

    }

return(
<>

<body>
 <div class="y3">
    <section class="Form my-4 mx-5">
        <div class="container">
            <div class="row no-gutter">
                <div class="col-lg-5">
                <img src='assets/img/yasitha.jpg' class="img-fluid" alt="" />
        
                </div>
                <div class="col-lg-7 px-5 pt-5 ">
                    <h1 class="font-weight-bold py-3">Welcome to wardmanagment</h1>
                    <h4>Enter Patient Details</h4>
                    <form onSubmit={sendData}>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Enter Ward Number" class="btnt" required
                                onChange={(e)=>{
                                setwardnumber(e.target.value);
                             }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Ward Name" class="btnt" required
                                       onChange={(e)=>{
                                        setwardname(e.target.value);
                                     }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Paitent Name" class="btnt" required
                                       onChange={(e)=>{
                                        setpaitentname(e.target.value);
                                     }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Head Doctor" class="btnt" required
                                   onChange={(e)=>{
                                    setdoctorname(e.target.value);
                                 }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                               {/* <button type="Submit" class="btn2 mt-3 mb-5" onClick={() => {sendData()}}> Submit</button> */}
                               <button type="submit" class="btn2 mt-3 mb-5" > Submit</button>
                            </div>
                        </div>
                        <a href="#">Forgot password</a>
                        <p>Don't have an account?<a href="#">Register here</a></p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
</body>
      <div className='footer'><Footer/></div>
</>

)

}
export default Create_pinfor;