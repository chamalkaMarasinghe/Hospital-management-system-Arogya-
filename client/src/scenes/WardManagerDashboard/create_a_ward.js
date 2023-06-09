import React from 'react';
import './create_a_ward.css';
import image from './image/YSANDUN.jpg';
import image1 from './image/yasitha.jpg';
import axios from 'axios';
import {useState} from 'react'


function Create_a_ward (){

    const [Wardname, setwardname] = useState("")
    const [Wardnumber, setwardnumber] = useState("")
    const [Wardcapacity, setwardcapacity] = useState("")
    const [Doctorname, setdoctorname] = useState("")
    const [Numberofemployee, setnumberofemployee] = useState("")


    const sendData = async(e) =>{
        e.preventDefault();
        const newward ={
            wardName : Wardname,
            wardNumber : Wardnumber,
            wardCapacity : Wardcapacity,
            headDocName : Doctorname,
            numberOfEmp : Numberofemployee,
        }
    
    await axios.post("http://localhost:3001/ward/insert",newward).then(()=>{alert("ward add successfully")

   }).catch((err)=>{
    alert("error adding")
   })

    }

return(

<body>
<div class="y2">
    <section class="Form my-4 mx-5" >
        <div class="container">
            <div class="row no-gutter">
                <div class="col-lg-5">
                <img src='assets/img/yasitha.jpg' class="img-fluid" alt="" />
        
                </div>
                <div class="col-lg-7 px-5 pt-5 ">
                    <h1 class="font-weight-bold py-3">Create a Ward Section</h1>
                    <h4>Sign into your account</h4>
                    <form onSubmit={sendData}>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Enter the Ward Name" class="btnt" required 
                                onChange={(e)=>{
                                    setwardname(e.target.value);
                                }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Ward Number" class="btnt" required
                                 onChange={(e)=>{
                                    setwardnumber(e.target.value);
                                }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Ward Capacity" class="btnt" required
                                 onChange={(e)=>{
                                    setwardcapacity(e.target.value);
                                }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Head Doctor's Name" class="btnt" required
                                 onChange={(e)=>{
                                    setdoctorname(e.target.value);
                                }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Number of Employees" class="btnt" required
                                onChange={(e)=>{
                                    setnumberofemployee(e.target.value);
                                }}></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                               <button type="submit" class="btn2 mt-3 mb-5"> Submit</button>
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

)
}
export default Create_a_ward;


