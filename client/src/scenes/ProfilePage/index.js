import React,{useState,useEffect} from 'react'
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import './index.css'
import NotificationBar from '../../components/notificationbar';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
// import { saveAs } from 'file-saver';




const ProfilePage = ({profile})=> {	

	const [isEditable, setIsEditable] = useState(false);
	const [selectedDiv, setSelectedDiv] = useState(1);
	const [userData, setUserData] = useState(profile);
	const[EmailAddress,setEmailAddress] = useState(profile);
	


	function handleFirstNameChange(event) {
		setUserData({ ...userData, FirstName: event.target.value });
	  }
	  
	  function handleLastNameChange(event) {
		setUserData({ ...userData, LastName: event.target.value });
	  }
	  
	  function handleNicChange(event) {
		setUserData({ ...userData, Nic: event.target.value });
	  }
	  
	  function handleEmailChange(event) {
		setUserData({ ...userData, EmailAddress: event.target.value });
	  }
	  
	  function handleAddressChange(event) {
		setUserData({ ...userData, Address: event.target.value });
	  }
	  
	  function handleGenderChange(event) {
		setUserData({ ...userData, Gender: event.target.value });
	  }
	  
	  function handleCityChange(event) {
		setUserData({ ...userData, City: event.target.value });
	  }
	  
	  function handleDobChange(event) {
		setUserData({ ...userData, Dob: event.target.value });
	  }
	  
	  function handleGuardianNameChange(event) {
		setUserData({ ...userData, GuardianName: event.target.value });
	  }
	  
	//   function handlePasswordChange(event) {
	// 	setUserData({ ...userData, Password: event.target.value });
	// //   }

	//   function handleEditClick() {
	// 	setIsEditable(true);
	//   }
	  
	  async function handleSaveClick() {
		try {
		  const response = await fetch(`http://localhost:3001/auth/updateProfile/${EmailAddress}`, {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		  });
	  
		  const data = await response.json();
	  
		  if (response.ok) {
			setIsEditable(false);
			alert('update successful !')
		  } else {
			console.error(data.message);
		  }
		} catch (error) {
		  console.error(error);
		}
	  }



	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }
	  
  function handleCancelClick() {
    setIsEditable(false);
  }
  

  function handleEditClick() {
    setIsEditable(true);
  }

  function handleBacklick() {
    setIsEditable(false);
  }

  //delete function-----
  function handledeleteClick() {
	const confirmLogout = window.confirm("Are you sure you want to delete your account?");
	if (confirmLogout) {
	  window.location.href='http://localhost:3000/deleteAccount'
	}
  }

//report generate
// const handleDownloadReport = async () => {
//     try {
//       // Send GET request to API endpoint to retrieve report file
//       const response = await axios.get('/api/profiles/report', { responseType: 'blob' });

//       // Save report file to local file system
//       const contentDisposition = response.headers['content-disposition'];
//       const fileName = contentDisposition.split('filename=')[1].split(';')[0].trim();
//       saveAs(response.data, fileName);

//     } catch (err) {
//       console.error(err);
//     }
//   };

    return (
		<>
        <div>
            <Navbar/>
        </div>
        <hr className='hr2' style={{"height":"100px"}}></hr>
		<hr style={{backgroundColor:'transparent'}}></hr>
        <div className='notification bar'>
          <NotificationBar/>
        </div>
		
		
        <hr></hr>
		{isEditable ? (
		<form>
        <div className='profileBody'>
        <div className="container">
<div className="row gutters">
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="account-settings">
					
					<div className="user-profile">
						<div className="user-avatar">
							<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
						</div>
						<h5 className="user-name">{userData.FirstName} {userData.LastName}</h5>
						<h6 className="user-email">{userData.EmailAddress}</h6>
					</div>
					<div className="about">
						<h5 className="mb-2 text-primary">About</h5>
						<p>I'm {userData.FirstName} from {userData.City}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">

					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Personal Details</h6>
					</div>
					
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="fullName">First Name</label>
							<input type="text" className="form-control" id="fullName" value={userData.FirstName} style={{backgroundColor:'black'}}  placeholder="Enter full name" onChange={handleFirstNameChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="eMail">Last Name</label>
							<input type="email" className="form-control" value={userData.LastName} id="eMail" style={{backgroundColor:'black'}} placeholder="Enter email ID"  onChange={handleLastNameChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="phone">Email Address</label>
							<input type="email" className="form-control" value={userData.EmailAddress} id="phone" placeholder="Enter phone number" style={{backgroundColor:'black'}}  onChange={handleEmailChange} />
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="website">National Identity</label>
							<input type="text" className="form-control" value={userData.Nic} id="website" style={{backgroundColor:'black'}} placeholder="Website url"  onChange={handleNicChange}/>
						</div>
					</div>
				</div>
				<div className="row gutters">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="ciTy">Address</label>
							<input type="name" className="form-control" value={userData.Address} id="ciTy" style={{backgroundColor:'black'}} placeholder="Enter City"  onChange={handleAddressChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="sTate">city</label>
							<input type="text" className="form-control" value={userData.City} id="sTate" style={{backgroundColor:'black'}} placeholder="Enter State"  onChange={handleCityChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Gender</label>
							<input type="text" className="form-control" value={userData.Gender} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleGenderChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Date of birth</label>
							<input type="text" className="form-control" value={userData.Dob} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleDobChange}/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Guardian Name</label>
							<input type="text" className="form-control" value={userData.GuardianName} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onchange={handleGuardianNameChange}/>
						</div>
					</div>
				</div>
				
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">
					
							{/* <button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
							<button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleEditClick}>Update</button> */}
							<button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleSaveClick}>save</button>
							  <button type="button" id="submit" name="submit" className="btn btn-secondary"  onClick={handledeleteClick}>Delete Account </button>
							<button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleBacklick}>Back</button>
						</div>
					</div>
				</div>
		
				
			</div>
		</div>
	</div>
						
</div>
</div>

        </div>
		</form>	
		):(
            

			<form>
        <div className='profileBody'>
        <div className="container">
<div className="row gutters">
	<div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="account-settings">
					
					<div className="user-profile">
						<div className="user-avatar">
							<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
						</div>
						<h5 className="user-name">{userData.FirstName} {userData.LastName}</h5>
						<h6 className="user-email">{userData.EmailAddress}</h6>
					</div>
					<div className="about">
						<h5 className="mb-2 text-primary">About</h5>
						<p>I'm {userData.FirstName} from {userData.City}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div className="card h-100">
			<div className="card-body">
				<div className="row gutters">

					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 className="mb-3 text-primary">Personal Details</h6>
					</div>
					
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="fullName">First Name</label>
							<input type="text" className="form-control" id="fullName" value={userData.FirstName} style={{backgroundColor:'black'}}  placeholder="Enter full name" onChange={handleFirstNameChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="eMail">Last Name</label>
							<input type="email" className="form-control" value={userData.LastName} id="eMail" style={{backgroundColor:'black'}} placeholder="Enter email ID"  onChange={handleLastNameChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="phone">Email Address</label>
							<input type="email" className="form-control" name='EmailAddress' value={userData.EmailAddress} id="phone" placeholder="Enter phone number" style={{backgroundColor:'black'}}  onChange={handleEmailChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="website">National Identity</label>
							<input type="text" className="form-control" value={userData.Nic} id="website" style={{backgroundColor:'black'}} placeholder="Website url"  onChange={handleNicChange} readOnly/>
						</div>
					</div>
				</div>
				<div className="row gutters">
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="ciTy">Address</label>
							<input type="name" className="form-control" value={userData.Address} id="ciTy" style={{backgroundColor:'black'}} placeholder="Enter City"  onChange={handleAddressChange}readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="sTate">city</label>
							<input type="text" className="form-control" value={userData.City} id="sTate" style={{backgroundColor:'black'}} placeholder="Enter State"  onChange={handleCityChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Gender</label>
							<input type="text" className="form-control" value={userData.Gender} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleGenderChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Date of birth</label>
							<input type="text" className="form-control" value={userData.Dob} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onChange={handleDobChange} readOnly/>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div className="form-group">
							<label htmlFor="zIp">Guardian Name</label>
							<input type="text" className="form-control" value={userData.GuardianName} id="zIp" style={{backgroundColor:'black'}} placeholder="Zip Code"  onchange={handleGuardianNameChange} readOnly/>
						</div>
					</div>
				</div>
				
				<div className="row gutters">
					<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div className="text-right">

						    <button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleEditClick}>Update</button>
							 <button type="button" id="submit" name="submit" className="btn btn-secondary" onClick={handledeleteClick}>Delete Account </button>
							<Link to={'/reportGenerate'}> <button type="button" id="submit" name="submit" className="btn btn-secondary" >Generate report </button></Link>
							
							{/* <button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleEditClick}>Update</button> */}
							{/* <button type="button" id="submit" name="submit" className="btn btn-primary" style={{"marginLeft":"50px"}} onClick={handleSaveClick}>Delete Account</button> */}
						</div>
					</div>
				</div>
		
				
			</div>
		</div>
	</div>
						
</div>
</div>

        </div>
		</form>	


		)}	
        <hr></hr>
        <div>
            <Footer/>
        </div>
		
     </>

            
    );
}

export default ProfilePage;