import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';


function WardDetails(){
    const [wardDetails, setWardDetails] = useState([])
    const [showUpdate, setShowUpdate] = useState(false)
    const [Wardname, setwardname] = useState("")
    const [Wardnumber, setwardnumber] = useState("")
    const [Wardcapacity, setwardcapacity] = useState("")
    const [Doctorname, setdoctorname] = useState("")
    const [Numberofemployee, setnumberofemployee] = useState("")
    const [updatableObj, setUpdatableObj] = useState({})

    const loadData = async() => {
        const req = await fetch("http://localhost:3001/ward/getAll", {
            method : "GET"
        })
        const res = req.json()
        return res
    }

    useEffect(() => {
        loadData().then((res) => {setWardDetails(res.result)})
    }, [])

    //delete

    const deleteWard = async (_id) => {
        if (window.confirm('Are you sure you want to delete this data?')) {
          try {
            const res = await axios.delete(`http://localhost:3001/ward/delete/${_id}`)
                
            console.log(res.data); // log the response data for debugging purposes
          } catch (error) {
            console.error(error);
            alert(error.message);
          }
        } else {
          // handle cancel button clicked
        }
    };

    const submitFunction = async(e) => {
        e.preventDefault()
        const req = await fetch(`http://localhost:3001/ward/update/${updatableObj._id}`, {
            method : "PUT",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({newwardName : Wardname, newwardNumber : Wardnumber, newwardCapacity : Wardcapacity, newheadDocName : Doctorname, newnumberOfEmp : Numberofemployee})
        })
        const res = req.json()
        alert("Ward Updated!!!")
    }

    //searchbar







    return(
        <>
        {
            showUpdate &&
            <div class="y2">
            <section class="Form my-4 mx-5" >
                <div class="container">
                    <div class="row no-gutter">
                        <div class="col-lg-5">
                        <img src='assets/img/yasitha.jpg' class="img-fluid" alt="" />
                
                        </div>
                        <div class="col-lg-7 px-5 pt-5 ">
                            <h1 class="font-weight-bold py-3">Update a Ward Section</h1>
                            <form onSubmit={submitFunction}>
                                <div class="form-row">
                                    <div class="col-lg-7">
                                        <input type="text"  placeholder="Enter the Ward Name" class="btnt" required 
                                        onChange={(e)=>{
                                            setwardname(e.target.value);
                                        }} value={Wardname}></input>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-lg-7">
                                        <input type="text"  placeholder="Ward Number" class="btnt" required
                                        onChange={(e)=>{
                                            setwardnumber(e.target.value);
                                        }} value={Wardnumber} ></input>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-lg-7">
                                        <input type="text"  placeholder="Ward Capacity" class="btnt" required
                                        onChange={(e)=>{
                                            setwardcapacity(e.target.value);
                                        }} value={Wardcapacity} ></input>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-lg-7">
                                        <input type="text"  placeholder="Head Doctor's Name" class="btnt" required
                                        onChange={(e)=>{
                                            setdoctorname(e.target.value);
                                        }} value={Doctorname} ></input>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-lg-7">
                                        <input type="text"  placeholder="Number of Employees" class="btnt" required
                                        onChange={(e)=>{
                                            setnumberofemployee(e.target.value);
                                        }} value={Numberofemployee} ></input>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-lg-7">
                                    <button type="submit" class="btn2 mt-3 mb-5"> Submit</button>
                                    <button class="btn2 mt-3 mb-5" onClick={() => {setShowUpdate(false)}} > Back</button>
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

        }

        {
            !showUpdate &&

            <div style={{backgroundColor:'white' ,height:'100%'}}>
            <h1 style={{textAlign:'center'}}>Ward Details List</h1>
            <br></br><br></br>
            


            <table className="table table-bordered" style={{width:'90%', alignItems:'center', margin:'auto' }}>
                <thead>
                <tr>
                    <th scope="col">Ward Name</th>
                    <th scope="col">Ward Number</th>
                    <th scope="col">Ward Capacity</th>
                    <th scope="col">Head Doctor Name</th>
                    <th scope="col">Number Of Employee</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>

                    </tr>
                </thead>
                <tbody>
                        {
                            wardDetails.map((obj) => {
                                return(
                                    <tr key={obj._id}>
                                        <td>{obj.wardName}</td>
                                        <td>{obj.wardNumber}</td>
                                        <td>{obj.wardCapacity}</td>
                                        <td>{obj.headDocName}</td>
                                        <td>{obj.numberOfEmp}</td>
                                        <td>
                                            <a class="fa fa-trash" aria-hidden="true" onClick={()=>deleteWard(obj._id)}></a>
                                        </td>
                                        <td>
                                            <a class="fa fa-trash" aria-hidden="true" onClick={() => {setwardname(obj.wardName); setwardnumber(obj.wardNumber); setwardcapacity(obj.wardCapacity); setnumberofemployee(obj.numberOfEmp); setdoctorname(obj.headDocName); setUpdatableObj(obj);setShowUpdate(true)}}></a>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                </tbody>
            </table>
            </div>

        }
        </>
    )
}

export default WardDetails


