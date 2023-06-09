import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'
import SideBar from '../../components/sideBar'

function PhysicalAsset() {

    const navigate = useNavigate()
    const [physicalAssetList, setPhysicalAssetList] = useState([]);
    // const [category, setCategory] = useState('')
    const [itemNumber, setItemNumber] = useState('')
    const [wardNumber, setWardNumber] = useState('')
    const [updatebleAssetId, setUpdatebleAssetId] = useState('')
    const [notification, setNotification] = useState({})
    const [damagedPhysicalAssetList, setDamagedPhysicalAssetList] = useState([])
    const [showApplicationForInsert, setShowApplicationForInsert] = useState(false)
    const [showApplicationForUpdate, setShowApplicationForUpdate] = useState(false)

    const getPhysicalAsset = async() => {
        const requestedInfo = await fetch('http://localhost:3001/physicalAsset/allPhysicalAssets', {
            method : "GET"
        })
        const resultSet = requestedInfo.json()
        return resultSet
    }

    const getDamagedPhysicalAsset = async() => {
        const requestedInfo = await fetch('http://localhost:3001/physicalAsset/allDamagedPhysicalAssets', {
            method : "GET"
        })
        const resultSet = requestedInfo.json()
        return resultSet
    }

    const getOneAsset = async(assetId) => {
        const request = await fetch(`http://localhost:3001/physicalAsset/getOne/${assetId}`, {
            method : "GET"
        })
        const result = request.json()
        return result
    }

    const deletePhysicalAsset = async(itemId) => {
        const deleteRequest = await fetch(`http://localhost:3001/physicalAsset/deletePhysicalAsset/${itemId}`, {
            method : "DELETE"
        })
        const result = deleteRequest.json()
        return result
    }

    const deleteDamagedPhysicalAsset = async(itemId) => {
        const deleteRequest = await fetch(`http://localhost:3001/physicalAsset/deleteDamagedPhysicalAsset/${itemId}`, {
            method : "DELETE"
        })
        const result = deleteRequest.json()
        return result
    }

    const submitForm = async(e) => {
        if(itemNumber != '' && wardNumber != ''){
            
            // if(!itemValidate()){
            //     return;
            // }

            console.log("oki");
            const request = await fetch('http://localhost:3001/physicalAsset/insertPhysicalAsset', {
                method : "POST",
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify({ category : document.getElementById("category").value, itemNumber : itemNumber, wardNumber : wardNumber})
            })
            const response = request.json()

            document.getElementById("in").value = ''
            document.getElementById("wn").value = ''
            setItemNumber('')
            setWardNumber('')

            return response

        }
        else{
            alert('Fill out the all fields please')
        }
    }

    const saveChanges = async() => {
        if(itemNumber != '' && wardNumber != ''){

            const request = await fetch(`http://localhost:3001/physicalAsset/updatePhysicalAsset/${updatebleAssetId}`, {
                method : "PUT",
                headers : { 'Content-Type' : 'application/json'},
                body : JSON.stringify({ newCategory : document.getElementById("category").value, newItemNumber : itemNumber, newWardNumber : wardNumber})
            })
            const response = request.json()

            document.getElementById("in").value = ''
            document.getElementById("wn").value = ''
            setItemNumber('')
            setWardNumber('')

            return response
        }
        else{
            alert('Fill out the all fields please')
        }
    } 

    const insertDamagedPhysicalAsset = async(assetId) => {
        const request = await fetch(`http://localhost:3001/physicalAsset/insertDamagedPhysicalAssets/${assetId}`, {
            method : "POST"
        })
        const result = request.json()
        return result
    }

    const restoreDamagedPhysicalAsset = async(assetId) => {
        const request = await fetch(`http://localhost:3001/physicalAsset/restoreDamagedPhysicalAsset/${assetId}`, {
            method : "POST"
        })
        const result = request.json()
        return result
    }

    const physicalAssetLiveSearch = async(searchString) => {
        const request = await fetch(`http://localhost:3001/physicalAsset/physicalAssetLiveSearch/${searchString}`, {
            method : "GET"
        })
        const result = request.json()
        return result 
    }

    const physicalAssetLiveSearchMethod = (e) => {
        if(!e.target.value){
            var query = '!!!'
        }
        else{
            var query = e.target.value
        }
        physicalAssetLiveSearch(query).then((res) => {setPhysicalAssetList(res)})
    }

    const damagedPhysicalAssetLiveSearch = async(searchString) => {
        const request = await fetch(`http://localhost:3001/physicalAsset/damagedPhysicalAssetLiveSearch/${searchString}`, {
            method : "GET"
        })
        const result = request.json()
        return result 
    }

    const damagedPhysicalAssetLiveSearchMethod = (e) => {
        if(!e.target.value){
            var query = '!!!'
        }
        else{
            var query = e.target.value
        }
        damagedPhysicalAssetLiveSearch(query).then((res) => {setDamagedPhysicalAssetList(res)})
    }

    const downloadPhysicalAssetReport = () => {
        fetch('http://localhost:3001/sample.html').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'sample.html';
                alink.click();
            })
        })
    }

    const generatePhysicalAssetReport = async() => {
        const request = await fetch(`http://localhost:3001/physicalAsset/generatePhysicalAssetReport`, {
            method : "GET"
        })
        const response = request.json()
        return response
    }

    const generateDamagedPhysicalAssetReport = async() => {
        const request = await fetch(`http://localhost:3001/physicalAsset/generateDamagedReport`, {
            method : "GET"
        })
        const response = request.json()
        return response
    }

    function itemValidate(){
        const val = itemNumber
        const initialSegment = "/^IT[0-9]{4}/"
        console.log("outside");
        if(!val.startsWith(initialSegment)){
            alert("Item number should be starts with 'IT' and length of it must be equal to 6")
            return false
        }

        // if(!val[1].isNumber){
        //     return fasle
        // }

        if(val.length !== 6){
            alert("Item number should be starts with 'IT' and length of it must be equal to 6")
            return false
        }
    }

    function wardValidate(){
        const val = wardNumber
        const initialSegment = "wd"
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
        getPhysicalAsset().then((res) => {setPhysicalAssetList(res.result)})
        getDamagedPhysicalAsset().then((res) => {setDamagedPhysicalAssetList(res.result)})
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
                            <p>Insert an item to the inventory</p>
                            <div className="form-row">
                                <select className='form-select' id="category" style={{width:'600px'}}>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="vw">VW</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <input id='in' onChange={(e) => {setItemNumber(e.target.value)}} type="text" placeholder='Item Number' style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='wn' onChange={(e) => {setWardNumber(e.target.value)}} type="text" placeholder='Ward Number' style={{width:'600px'}} required/>	
                            </div>
                            <div id='buttonPallete-2'>
                                <button onClick={() => {setShowApplicationForInsert(false)}}>Back</button>
                                <button onClick={(e) => {submitForm(e).then((res) => {setNotification(res)})}} >Submit</button>
                            </div>
                        </div>
                    }
                    {
                        !showApplicationForInsert &&  showApplicationForUpdate &&
                        <div id="formWrapper">
                            <p>Update an item in the inventory</p>
                            <div className="form-row">
                                <select className='form-select' id="category" style={{width:'600px'}}>
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="vw">VW</option>
                                    <option value="audi">Audi</option>
                                </select>
                            </div>
                            <div className="form-row">
                                <input id='in' onChange={(e) => {setItemNumber(e.target.value)}} type="text" placeholder='Item Number' value={itemNumber} style={{width:'600px'}} required/>	
                            </div>
                            <div className="form-row">
                                <input id='wn' onChange={(e) => {setWardNumber(e.target.value)}} type="text" placeholder='Ward Number' value={wardNumber} style={{width:'600px'}} required/>	
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
                                <p>Inventory</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className='physicalAssetTablesSearchBar' onChange={physicalAssetLiveSearchMethod} type="text" name="searchBar" placeholder='Search...'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Index</th>
                                            <th>Category</th>
                                            <th>Item Number</th>
                                            <th>Ward Number</th>
                                            <th>Damaged</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            physicalAssetList.map((obj, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td data-th="index">{index}</td>
                                                        <td data-th="category">{obj.category}</td>
                                                        <td data-th="itemNumber">{obj.itemNumber}</td>
                                                        <td data-th="wardNumber">{obj.wardNumber}</td>
                                                        <td data-th="damaged">
                                                            <i onClick={() => {insertDamagedPhysicalAsset(obj._id).then((res) => {setNotification(res)})}} className="fa-solid fa-screwdriver-wrench"></i>
                                                        </td>
                                                        <td data-th="update">
                                                            <i  onClick={() => {getOneAsset(obj._id).then((res) => { setUpdatebleAssetId(res._id) ;document.getElementById("category").value = res.category ;setItemNumber(res.itemNumber); setWardNumber(res.wardNumber)}); setShowApplicationForUpdate(true)}} className="fa-regular fa-pen-to-square"></i>
                                                        </td>
                                                        <td data-th="delete">
                                                            <i onClick={()=>{deletePhysicalAsset(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-trash-can"></i>
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
                                    <button onClick={() => {generatePhysicalAssetReport().then((res) => {downloadPhysicalAssetReport()})}} >Generate Report</button>
                                </center>
                            </div>

                            <div className="container">
                                <p>Damaged Inventory</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <input className='physicalAssetTablesSearchBar' onChange={damagedPhysicalAssetLiveSearchMethod} type="text" name="searchBar" placeholder='Search...'/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Index</th>
                                            <th>Category</th>
                                            <th>Item Number</th>
                                            <th>Ward Number</th>
                                            <th>Restore</th>
                                            <th>Delete</th>
                                        </tr>
                                        {
                                            damagedPhysicalAssetList.map((obj, index) => {
                                                return(
                                                    <tr key={index}>
                                                        <td data-th="index">{index}</td>
                                                        <td data-th="category">{obj.category}</td>
                                                        <td data-th="itemNumber">{obj.itemNumber}</td>
                                                        <td data-th="wardNumber">{obj.wardNumber}</td>
                                                        <td data-th="restore">
                                                            <i onClick={() => {restoreDamagedPhysicalAsset(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-circle-check"></i>
                                                        </td>
                                                        <td data-th="delete">
                                                            <i onClick={()=>{deleteDamagedPhysicalAsset(obj._id).then((res) => {setNotification(res)})}} className="fa-regular fa-trash-can"></i>
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
                                    <button onClick={() => {generateDamagedPhysicalAssetReport().then((res) => {downloadPhysicalAssetReport()})}} >Generate Report</button>
                                </center>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default PhysicalAsset