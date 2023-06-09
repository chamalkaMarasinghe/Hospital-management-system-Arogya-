import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import SideBar from '../../components/sideBar'

function LaboratoryEquipment() {

    const navigate = useNavigate()
    //const [category, setCategory] = useState('')
    const [itemNumber, setItemNumber] = useState('')
    const [venue, setVenue] = useState('')
    const [updatebleEquipmentId, setUpdatebleEquipmentId] = useState('')
    const [notification, setNotification] = useState({})
    const [laboratoryEquipmentList, setLaboratoryEquipmentList] = useState([]);
    const [damagedLaboratoryEquipmentList, setDamagedLaboratoryEquipmentList] = useState([]);
    const [showApplicationForInsert, setShowApplicationForInsert] = useState(false)
    const [showApplicationForUpdate, setShowApplicationForUpdate] = useState(false)

    const getEquipments = async() => {
        const requestedInfo = await fetch('http://localhost:3001/laboratoryEquipments/getAllLaboratoryEquipments', {
            method : "GET"
        })
        const resultSet = requestedInfo.json()
        return resultSet
    }

    const getDamagedEquipments = async() => {
        const requestedInfo = await fetch('http://localhost:3001/laboratoryEquipments/getAllDamagedLaboratoryEquipments', {
            method : "GET"
        })
        const resultSet = requestedInfo.json()
        return resultSet
    }

    const getOneEquipmnet = async(equipmentId) => {
        const request = await fetch(`http://localhost:3001/laboratoryEquipments/getOneEquipmnet/${equipmentId}`, {
            method : "GET"
        })
        const result = request.json()
        return result
    }

    const deleteEquipmnet = async(equipmentId) => {
        const deleteRequest = await fetch(`http://localhost:3001/laboratoryEquipments/deleteLaboratoryEquipment/${equipmentId}`, {
            method : "DELETE"
        })
        const result = deleteRequest.json()
        return result
    }

    const deleteDamagedEquipmnet = async(equipmentId) => {
        const deleteRequest = await fetch(`http://localhost:3001/laboratoryEquipments/deleteDamagedLaboratoryEquipment/${equipmentId}`, {
            method : "DELETE"
        })
        const result = deleteRequest.json()
        return result
    }

    const submitForm = async() => {
        if(itemNumber != '' && venue != ''){

            if(!itemValidate()){
                return
            }

            const request = await fetch('http://localhost:3001/laboratoryEquipments/insertLaboratoryEquipments', {
                method : "POST",
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify({ category : document.getElementById("category").value, itemNumber : itemNumber, venue : venue})
            })
            const response = request.json()

            document.getElementById("in").value = ''
            document.getElementById("vn").value = ''
            setItemNumber('')
            setVenue('')

            return response
        }
        else{
            alert('Fill out the all fields please')
        }
    }

    const saveChanges = async() => {
        if(itemNumber != '' && venue != ''){

            const request = await fetch(`http://localhost:3001/laboratoryEquipments/updateLaboratoryEquipments/${updatebleEquipmentId}`, {
                method : "PUT",
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify({ newCategory : document.getElementById("category").value, newItemNumber : itemNumber, newVenue : venue})
            })
            const response = request.json()

            document.getElementById("in").value = ''
            document.getElementById("vn").value = ''
            setItemNumber('')
            setVenue('')

            return response
        }
        else{
            alert('Fill out the all fields please')
        }
    } 

    const insertDamagedEquipmnet = async(equipmentId) => {
        const request = await fetch(`http://localhost:3001/laboratoryEquipments/insertDamagedLaboratoryEquipments/${equipmentId}`, {
            method : "POST"
        })
        const result = request.json()
        return result
    }

    const restoreDamagedEquipmnet = async(equipmentId) => {
        const request = await fetch(`http://localhost:3001/laboratoryEquipments/restoreDamagedLaboratoryEquipments/${equipmentId}`, {
            method : "POST"
        })
        const result = request.json()
        return result
    }

    const equipmnetLiveSearch = async(searchString) => {
        const request = await fetch(`http://localhost:3001/laboratoryEquipments/equipmentsLiveSearch/${searchString}`, {
            method : "GET"
        })
        const result = request.json()
        return result 
    }

    const equipmnetLiveSearchMethod = (e) => {
        if(!e.target.value){
            var query = '!!!'
        }
        else{
            var query = e.target.value
        }
        equipmnetLiveSearch(query).then((res) => {setLaboratoryEquipmentList(res)})
    }

    const damagedEquipmnetLiveSearch = async(searchString) => {
        const request = await fetch(`http://localhost:3001/laboratoryEquipments/damagedEquipmentsLiveSearch/${searchString}`, {
            method : "GET"
        })
        const result = request.json()
        return result 
    }

    const damagedEquipmnetLiveSearchMethod = (e) => {
        if(!e.target.value){
            var query = '!!!'
        }
        else{
            var query = e.target.value
        }
        damagedEquipmnetLiveSearch(query).then((res) => {setDamagedLaboratoryEquipmentList(res)})
    }

    const downloadEquipmnetReport = () => {
        fetch('http://localhost:3001/sample.html').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'equipments.html';
                alink.click();
            })
        })
    }

    const generateEquipmnetReport = async() => {
        const request = await fetch(`http://localhost:3001/laboratoryEquipments/generateEquipmnetReport`, {
            method : "GET"
        })
        const response = request.json()
        return response
    }

    const generateDamagedEquipmnetReport = async() => {
        const request = await fetch(`http://localhost:3001/laboratoryEquipments/generateDamagedEquipmnetReport`, {
            method : "GET"
        })
        const response = request.json()
        return response
    }

    function itemValidate(){
        const val = itemNumber
        const initialSegment = "it"
        if(!val.startsWith(initialSegment)){
            alert("Item number should be starts with 'IT' and length of it must be equal to 6")
            return false
        }
        if(val.length !== 6){
            alert("Item number should be starts with 'IT' and length of it must be equal to 6")
            return false
        }
    }

    useEffect(() => {
        getEquipments().then((res) => {setLaboratoryEquipmentList(res.result)})
        getDamagedEquipments().then((res) => {setDamagedLaboratoryEquipmentList(res.result)})
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
                            <p>Insert a Laboratory Equipment to the inventory</p>
                            <div className="form-row">
                                <select className='form-select' id="category" style={{width:'600px'}}>
                                    <option value="equipment cat 1">equipment cat 1</option>
                                    <option value="equipment cat 2">equipment cat 2</option>
                                    <option value="equipment cat 3">equipment cat 3</option>
                                    <option value="equipment cat 4">equipment cat 4</option>
                                </select>
                            </div>
                            <div className="form-row" >
                                <input id='in' onChange={(e) => {setItemNumber(e.target.value)}} type="text" placeholder='Item Number' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row" >
                                <input id='vn' onChange={(e) => {setVenue(e.target.value)}} type="text" placeholder='Venue' style={{width:'600px'}} required/>	
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
                            <p>Update an Equipment in the inventory</p>
                            <div className="form-row">
                                <select className='form-select' id="category" style={{width:'600px'}}>
                                    <option value="equipment cat 1">equipment cat 1</option>
                                    <option value="equipment cat 2">equipment cat 2</option>
                                    <option value="equipment cat 3">equipment cat 3</option>
                                    <option value="equipment cat 4">equipment cat 4</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <input id='in' onChange={(e) => {setItemNumber(e.target.value)}} type="text" placeholder='Item Number' value={itemNumber} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='vn' onChange={(e) => {setVenue(e.target.value)}} type="text" placeholder='Venue' value={venue} style={{width:'600px'}} required/>	
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
                                <p>Laboratory Equipments</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className='physicalAssetTablesSearchBar' onChange={equipmnetLiveSearchMethod} type="text" name="searchBar" placeholder='Search...'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Index</th>
                                            <th>Category</th>
                                            <th>Item Number</th>
                                            <th>Venue</th>
                                            <th>Damaged</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            laboratoryEquipmentList.map((obj, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td data-th="index">{index}</td>
                                                        <td data-th="category">{obj.category}</td>
                                                        <td data-th="itemNumber">{obj.itemNumber}</td>
                                                        <td data-th="wardNumber">{obj.venue}</td>
                                                        <td data-th="damaged">
                                                            <i onClick={() => {insertDamagedEquipmnet(obj._id).then((res) => {setNotification(res)})}} className="fa-solid fa-screwdriver-wrench"></i>
                                                        </td>
                                                        <td data-th="update">
                                                            <i  onClick={() => {getOneEquipmnet(obj._id).then((res) => { setUpdatebleEquipmentId(res._id) ;document.getElementById("category").value = res.category ;setItemNumber(res.itemNumber); setVenue(res.venue)}); setShowApplicationForUpdate(true)}} className="fa-regular fa-pen-to-square"></i>
                                                        </td>
                                                        <td data-th="delete">
                                                            <i onClick={()=>{deleteEquipmnet(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-trash-can"></i>
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
                                    <button onClick={() => {generateEquipmnetReport().then((res) => {downloadEquipmnetReport()})}} >Generate Report</button>
                                </center>
                            </div>

                            <div className="container">
                                <p>Damaged Laboratory Equipments</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className='physicalAssetTablesSearchBar' onChange={damagedEquipmnetLiveSearchMethod} type="text" name="searchBar" placeholder='Search...'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Index</th>
                                            <th>Category</th>
                                            <th>Item Number</th>
                                            <th>Venue</th>
                                            <th>Restore</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            damagedLaboratoryEquipmentList.map((obj, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td data-th="index">{index}</td>
                                                        <td data-th="category">{obj.category}</td>
                                                        <td data-th="itemNumber">{obj.itemNumber}</td>
                                                        <td data-th="Venue">{obj.venue}</td>
                                                        <td data-th="restore">
                                                            <i onClick={() => {restoreDamagedEquipmnet(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-circle-check"></i>
                                                        </td>
                                                        <td data-th="delete">
                                                            <i onClick={()=>{deleteDamagedEquipmnet(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-trash-can"></i>
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
                                    <button onClick={() => {generateDamagedEquipmnetReport().then((res) => {downloadEquipmnetReport()})}} >Generate Report</button>
                                </center>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default LaboratoryEquipment