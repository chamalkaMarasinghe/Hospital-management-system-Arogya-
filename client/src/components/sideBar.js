import React from 'react'
import './sideBar.css'
import Avatar from '../images/avatar.png'
import { useNavigate } from 'react-router-dom'

function SideBar() {
    const navigate = useNavigate()
    return (
        <div id='sideBarWrapper'>
            <div id='row1'>
                <center><img src={Avatar} alt="avatar image"/></center>
            </div>
            <div id='row2'>
                <center><p>First name</p></center>
                <center><p>Last name</p></center>
                <center><p>Inventory Manager</p></center>
            </div>
            <div id='row3'>
                <center><button onClick={() => {navigate('/inventoryDashboard/physicalAsset')}} >Physical Inventory</button></center>
                <center><button onClick={() => {navigate('/inventoryDashboard/medicine')}} >Medicine Stock</button></center>
                <center><button onClick={() => {navigate('/inventoryDashboard/laboratoryEquipment')}} >Laboratory Equipments</button></center>
                <center><button>My Profile</button></center>
            </div>
        </div>
    )
}

export default SideBar