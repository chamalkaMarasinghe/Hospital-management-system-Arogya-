import { BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import react, { useState } from 'react'
import Loginpage from './scenes/Loginpage'
import AdminLoginPage from './scenes/AdminLoginPage'
import Homepage from './scenes/Homepage'
import AmbulanceDashboard from './scenes/AmbulanceDashboard'
import EmployeeManagerDashboard from './scenes/EmployeeManagerDashboard'
import PhysicalAsset from './scenes/InventoryDashboard/physicalAsset'
import Medicine from './scenes/InventoryDashboard/medicine'
import LaboratoryEquipment from './scenes/InventoryDashboard/laboratoryEquipment'
import LaboratoryDashboard from './scenes/LaboratoryDashboard'
import PharmacyDashboard from './scenes/PharmacyDashboard'
import ProfilePage from './scenes/ProfilePage'
import WardManagerDashboard from './scenes/WardManagerDashboard'
import ServicesPage from './scenes/ServicesPage'
import VideoRequestForm  from './scenes/VideoRequestForm'
import Registration from './scenes/RegistrationPage/registration'
import VideoUI from './scenes/VideoConference'
import RoomPage from './scenes/VideoRoom'
import ELogin from './scenes/WardManagerDashboard/Login'
import About from './scenes/WardManagerDashboard/About'
import YA from './scenes/WardManagerDashboard/create_a_ward'
import Eview from './scenes/WardManagerDashboard/viewdetails'
import Epaitentinfor from './scenes/WardManagerDashboard/create_pinfor'
import WardDetails from './scenes/WardManagerDashboard/wardDetails'
import Pview from './scenes/WardManagerDashboard/pviewdetails'
//import AmbulanceHome from './scenes/AmbulanceDashboard/AmbulanceHome'
//import Registration from './scenes/RegistrationPage/registration'
// import Labreport from './scenes/LaboratoryDashboard/labReport'
// import ReportGenerate from './scenes/LaboratoryDashboard/reportGenerate'
// import ReportEmail from './scenes/LaboratoryDashboard/emailReport'
// import MyComponent from './scenes/testing/testing'
import DeleteAccount from './scenes/DeleteAccount/deleteProfile'
//import ReportPage from './scenes/ReportGenerate'
/import EmployeeManagerDashboard from './scenes/EmployeeManagerDashboard'
import EmployeeRegFor from './scenes/EmployeeManagerDashboard/EmployeeRegFor'
import EmployeeMain from './scenes/EmployeeManagerDashboard/EmployeeMain'
import Employee_at from './scenes/EmployeeManagerDashboard/Employee_at'
import EmployeePayroll from './scenes/EmployeeManagerDashboard/EmployeePayroll'
import Doctor from './scenes/EmployeeManagerDashboard/Doctor'
import Consultant from './scenes/EmployeeManagerDashboard/Consultant'
import Nurse from './scenes/EmployeeManagerDashboard/Nurse'
import Pharmacist from './scenes/EmployeeManagerDashboard/Pharmacist '
import Driver from './scenes/EmployeeManagerDashboard/Driver'
import Ostaff from './scenes/EmployeeManagerDashboard/Ostaff'
import Admin from './scenes/EmployeeManagerDashboard/Admin'
import EmployeePayrollform from './scenes/EmployeeManagerDashboard/EmployeePayrollfrom'
import AtForm from './scenes/EmployeeManagerDashboard/AtFrom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<Homepage/>} />
                    <Route path='/login' element={ <Loginpage /> } />
                    <Route path='/adminLogin' element={<AdminLoginPage />}/>
                    <Route path='/AmbulanceDashboard' element={<AmbulanceDashboard />} />
                    <Route path='/EmployeeManagerDashboard' element={<EmployeeManagerDashboard />} />
                    <Route path='/inventoryDashboard/physicalAsset' element={<PhysicalAsset />} />
                    <Route path='/inventoryDashboard/medicine' element={<Medicine />} />
                    <Route path='/inventoryDashboard/laboratoryEquipment' element={<LaboratoryEquipment />} />
                    <Route path='/LaboratoryDashboard' element={<LaboratoryDashboard />} />
                    <Route path='/PharmacyDashboard' element={<PharmacyDashboard />} />
                    <Route path='/ProfilePage' element={<ProfilePage />} />
                    <Route path='/WardManagerDashboard' element={<WardManagerDashboard />} />
                    <Route path='/servicespage' element={<ServicesPage />} />
                    {/* <Route path='/patientRegistration' element={<Registration />} /> */}
                    <Route path='/videorequestform' element={<VideoRequestForm />} />
                    <Route path='/videoui' element={<VideoUI/>}/>
                    <Route path='/videoroom' element={<RoomPage/>}/>
                    <Route path='/wardcreate' element={<YA />} />
                    <Route path='/wardDetails' element={<WardDetails />} />
                    <Route path='/ELogin' element={<ELogin />} />
                    <Route path='/view' element={<Eview/>} />
                    <Route path='/pcreate' element={<Epaitentinfor/>} />
                    <Route path='/pview' element={<Pview/>} />
                    {/* <Route path='/ProfilePage/:EmailAddress' element={<ProfilePage />} /> */}
                    <Route path='/RegistrationPage' element={<Registration/>}/>
                    {/* <Route path='/LaboratoryDashboard/labReport' element={<Labreport/>}/>
                    <Route path='/LaboratoryDashboard/reportGenerate' element={<ReportGenerate/>}/>
                    <Route path='/LaboratoryDashboard/reportEmail' element={<ReportEmail/>}/>
                    <Route path='/test' element={<MyComponent/>}/> */}
                    <Route path='/deleteAccount' element={<DeleteAccount/>}/>
                    {/* <Route path='/reportGenerate' element={<ReportPage/>}/> */}
                    <Route path='/EmployeeRegFor' element={<EmployeeRegFor />} />
                    <Route path='/Employee_at' element={<Employee_at/>}/> 
                    <Route path='/EmployeePayroll' element={<EmployeePayroll/>}/>
                    <Route path='/EmployeeMain' element={<EmployeeMain/>}/>
                    <Route path='/Doctor' element={<Doctor/>}/>
                    <Route path='/Consultant' element={<Consultant/>}/>
                    <Route path='/Nurse' element={<Nurse/>}/>
                    <Route path='/Pharmacist' element={<Pharmacist/>}/>
                    <Route path='/Driver' element={<Driver/>}/>
                    <Route path='/Ostaff' element={<Ostaff/>}/>
                    <Route path='/Admin' element={<Admin/>}/>
                    <Route path='/EmployeePayrollform' element={<EmployeePayrollform/>}/>
                    <Route path='/AtForm' element={<AtForm/>}/>
                </Routes>
            </BrowserRouter>            
        </div>
    );
}

export default App;
