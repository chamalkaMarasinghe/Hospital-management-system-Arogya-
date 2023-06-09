import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import SideBar from '../../components/sideBar'

function Medicine() {

    const navigate = useNavigate()
    const [mediName, setmediName] = useState('')
    const [company, setcompany] = useState('')
    const [description, setdescription] = useState('')
    const [dosage, setdosage] = useState('')
    const [quantity, setquantity] = useState('')
    const [mdate, setmdate] = useState('')
    const [edate, setedate] = useState('')
    const [updatebleMedicineId, setUpdatebleMedicineId] = useState('')
    const [notification, setNotification] = useState({})
    const [medicineList, setMedicineList] = useState([]) 
    const [expiredMedicineList, setExpiredMedicineList] = useState([])
    const [showApplicationForInsert, setShowApplicationForInsert] = useState(false)
    const [showApplicationForUpdate, setShowApplicationForUpdate] = useState(false)

    const getAllMedicine = async() => {
        const requestedInfo = await fetch('http://localhost:3001/medicine/getAllMedicine', {
            method : "GET"
        })
        const resultSet = requestedInfo.json()
        return resultSet
    }

    const getAllExpiredMedicine = async() => {
        const requestedInfo = await fetch('http://localhost:3001/medicine/getAllExpiredMedicine', {
            method : "GET"
        })
        const resultSet = requestedInfo.json()
        return resultSet
    }

    const getOneMedicine = async(medicineId) => {
        const request = await fetch(`http://localhost:3001/medicine/getOneMedicine/${medicineId}`, {
            method : "GET"
        })
        const result = request.json()
        return result
    }

    const deleteMedicine = async(medicineId) => {
        const deleteRequest = await fetch(`http://localhost:3001/medicine/deleteMedicine/${medicineId}`, {
            method : "DELETE"
        })
        const result = deleteRequest.json()
        return result
    }

    const deleteExpiredMedicine = async(medicineId) => {
        const deleteRequest = await fetch(`http://localhost:3001/medicine/deleteExpiredMedicine/${medicineId}`, {
            method : "DELETE"
        })
        const result = deleteRequest.json()
        return result
    }

    const submitForm = async() => {
        if(mediName != '' && company != '' && description != '' && dosage != '' && quantity != '' && mdate != '' && edate != ''){

            const request = await fetch('http://localhost:3001/medicine/insertMedicine', {
                method : "POST",
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify({ mediName : mediName, company : company, description : description, dosage : dosage, quantity : quantity, manufactureDate : mdate, expireDate : edate, picPath : "fg"})
            })
            const response = request.json()

            document.getElementById("mn").value = ''
            document.getElementById("co").value = ''
            document.getElementById("de").value = ''
            document.getElementById("do").value = ''
            document.getElementById("aq").value = ''
            document.getElementById("md").value = ''
            document.getElementById("ed").value = ''
            setmediName('')
            setcompany('')
            setdescription('')
            setdosage('')
            setquantity('')
            setmdate('')
            setedate('')

            return response
        }
        else{
            alert('Fill out the all fields please')
        }
    }

    const saveChanges = async() => {
        if(mediName != '' && company != '' && description != '' && dosage != '' && quantity != '' && mdate != '' && edate != ''){

            const request = await fetch(`http://localhost:3001/medicine/updateMedicine/${updatebleMedicineId}`, {
                method : "PUT",
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify({ newmediName : mediName, newcompany : company, newdescription : description, newdosage : dosage, newquantity : quantity, newmanufactureDate : mdate, newexpireDate : edate, newpicPath : "nm" })
            })
            const response = request.json()

            document.getElementById("mn").value = ''
            document.getElementById("co").value = ''
            document.getElementById("de").value = ''
            document.getElementById("do").value = ''
            document.getElementById("aq").value = ''
            document.getElementById("md").value = ''
            document.getElementById("ed").value = ''
            setmediName('')
            setcompany('')
            setdescription('')
            setdosage('')
            setquantity('')
            setmdate('')
            setedate('')

            return response
        }
        else{
            alert('Fill out the all fields please')
        }
    } 

    const insertExiredMedicine = async(medicineId) => {
        const request = await fetch(`http://localhost:3001/medicine/insertExpiredMedicine/${medicineId}`, {
            method : "POST"
        })
        const result = request.json()
        return result
    }

    const medicineLiveSearch = async(searchString) => {
        const request = await fetch(`http://localhost:3001/medicine/medicineLiveSearch/${searchString}`, {
            method : "GET"
        })
        const result = request.json()
        return result 
    }

    const medicineLiveSearchMethod = (e) => {
        if(!e.target.value){
            var query = '!!!'
        }
        else{
            var query = e.target.value
        }
        medicineLiveSearch(query).then((res) => {setMedicineList(res)})
    }

    const expiredMedicineLiveSearch = async(searchString) => {
        const request = await fetch(`http://localhost:3001/medicine/expiredMedicineLiveSearch/${searchString}`, {
            method : "GET"
        })
        const result = request.json()
        return result 
    }

    const expiredMedicineLiveSearchMethod = (e) => {
        if(!e.target.value){
            var query = '!!!'
        }
        else{
            var query = e.target.value
        }
        expiredMedicineLiveSearch(query).then((res) => {setExpiredMedicineList(res)})
    }

    const downloadMedicineReport = () => {
        fetch('http://localhost:3001/sample.html').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'medicine.html';
                alink.click();
            })
        })
    }

    const generateMedicineReport = async() => {
        const request = await fetch(`http://localhost:3001/medicine/generateMedicineReport`, {
            method : "GET"
        })
        const response = request.json()
        return response
    }

    const generateExpiredMedicineReport = async() => {
        const request = await fetch(`http://localhost:3001/medicine/generateExpiredMedicineReport`, {
            method : "GET"
        })
        const response = request.json()
        return response
    }

    useEffect(() => {
        getAllMedicine().then((res) => {setMedicineList(res.result)})
        getAllExpiredMedicine().then((res) => {setExpiredMedicineList(res.result)})
    }, [notification])

    return (
        <>
            <div id='colourRibbon'></div>
            <div id='secondaryHeader'>
                <div id='col1'>
                    <p>Logo</p>
                </div>
                <div id='col2'>
                    <p>Arogya Hospital</p>
                </div>
                <div id='col3'>
                    <button onClick={() => {navigate('/adminLogin')}} >Log Out</button>
                </div>
            </div>
            <div id="physicalAsset-flex-container">
                <div id='col1'>
                    {/* <button id='expandBtn'>expand me</button> */}
                    <SideBar />
                </div>
                <div id='col2'>
                    {
                        showApplicationForInsert &&  !showApplicationForUpdate &&
                        <div id="formWrapper">
                            <p>Insert Medicine To The Inventory</p>
                            <div className="form-row">
                                <input id='mn' onChange={(e) => {setmediName(e.target.value)}} type="text" placeholder='Medicine Name' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='co' onChange={(e) => {setcompany(e.target.value)}} type="text" placeholder='Company' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='de' onChange={(e) => {setdescription(e.target.value)}} type="text" placeholder='Description' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='do' onChange={(e) => {setdosage(e.target.value)}} type="text" placeholder='Dosage(Mg)' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='aq' onChange={(e) => {setquantity(e.target.value)}} type="text" placeholder='Available Quantity' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='md' onChange={(e) => {setmdate(e.target.value)}} type="date" placeholder='Manufacture Date' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='ed' onChange={(e) => {setedate(e.target.value)}} type="date" placeholder='Expire Date' style={{width:'600px'}} required/>	
                            </div>
                            <div id='buttonPallete-2'>
                                <button onClick={() => {setShowApplicationForInsert(false)}}>Back</button>
                                <button onClick={() => {submitForm().then((res) => {setNotification(res)})}} >Submit</button>
                            </div>
                        </div>
                    }
                    {
                        !showApplicationForInsert &&  showApplicationForUpdate &&
                        <div id="formWrapper">
                            <p>Update Medicine Information</p>
                            <div className="form-row">
                                <input id='mn' onChange={(e) => {setmediName(e.target.value)}} type="text" placeholder='Medicine Name' value={mediName} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='co' onChange={(e) => {setcompany(e.target.value)}} type="text" placeholder='Company' value={company} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='de' onChange={(e) => {setdescription(e.target.value)}} type="text" placeholder='Description' value={description} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='do' onChange={(e) => {setdosage(e.target.value)}} type="number" placeholder='Dosage(Mg)' value={dosage} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='aq' onChange={(e) => {setquantity(e.target.value)}} type="number" placeholder='Available Quantity' value={quantity} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='md' onChange={(e) => {setmdate(e.target.value)}} type="date" placeholder='Manufacture Date' value={mdate} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='ed' onChange={(e) => {setedate(e.target.value)}} type="date" placeholder='Expire Date' value={edate} style={{width:'600px'}} required/>	
                            </div>
                            <div id='buttonPallete-2'>
                                <button onClick={() => {setShowApplicationForUpdate(false)}}>Back</button>
                                <button onClick={() => {saveChanges().then((res) => {setNotification(res)})}} >Save Changes</button>
                            </div>
                        </div>
                    }
                    {
                        !showApplicationForInsert && !showApplicationForUpdate &&
                        <>
                            <div className="container">
                                <p>Medicine</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className='physicalAssetTablesSearchBar' onChange={medicineLiveSearchMethod} type="text" name="searchBar" placeholder='Search...'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Index</th>
                                            <th>Name</th>
                                            <th>Dosage</th>
                                            <th>Quantity</th>
                                            <th>M.date</th>
                                            <th>E.date</th>
                                            <th>Out date</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            medicineList.map((obj, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td data-th="index">{index}</td>
                                                        <td data-th="name">{obj.mediName}</td>
                                                        <td data-th="company">{obj.dosage}</td>
                                                        <td data-th="quantity">{obj.quantity}</td>
                                                        <td data-th="mDate">{obj.manufactureDate}</td>
                                                        <td data-th="eDate">{obj.expireDate}</td>
                                                        <td data-th="outDate">
                                                            <i onClick={() => {insertExiredMedicine(obj._id).then((res) => {setNotification(res)})}} className="fa-solid fa-screwdriver-wrench"></i>
                                                        </td>
                                                        <td data-th="update">
                                                            <i  onClick={() => {getOneMedicine(obj._id).then((res) => { setUpdatebleMedicineId(res._id); setmediName(res.mediName);setcompany(res.company); setdescription(res.description); setdosage(res.dosage); setquantity(res.quantity); setmdate(res.manufactureDate); setedate(res.expireDate)}); setShowApplicationForUpdate(true)}} className="fa-regular fa-pen-to-square"></i>
                                                        </td>
                                                        <td data-th="delete">
                                                            <i onClick={()=>{deleteMedicine(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-trash-can"></i>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div id='buttonPallete-1'>
                                <center>
                                    <button onClick={() => {setShowApplicationForInsert(true)}}>Insert Into Inventory</button>
                                    <button onClick={() => {generateMedicineReport().then((res) => {downloadMedicineReport()})}} >Generate Report</button>
                                </center>
                            </div>

                            <div className="container">
                                <p>Expired Medicine</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className='physicalAssetTablesSearchBar' onChange={expiredMedicineLiveSearchMethod} type="text" name="searchBar" placeholder='Search...'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Index</th>
                                            <th>Name</th>
                                            <th>Company</th>
                                            <th>Dosage</th>
                                            <th>Quantity</th>
                                            <th>M.date</th>
                                            <th>E.date</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            expiredMedicineList.map((obj, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td data-th="index">{index}</td>
                                                        <td data-th="category">{obj.mediName}</td>
                                                        <td data-th="itemNumber">{obj.company}</td>
                                                        <td data-th="wardNumber">{obj.dosage}</td>
                                                        <td data-th="quantity">{obj.quantity}</td>
                                                        <td data-th="mDate">{obj.manufactureDate}</td>
                                                        <td data-th="eDate">{obj.expireDate}</td>
                                                        <td data-th="delete">
                                                            <i onClick={()=>{deleteExpiredMedicine(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-trash-can"></i>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>

                            <div id='buttonPallete-2'>
                                <center>
                                    <button onClick={() => {generateExpiredMedicineReport().then((res) => {downloadMedicineReport()})}} >Generate Report</button>
                                </center>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default Medicine