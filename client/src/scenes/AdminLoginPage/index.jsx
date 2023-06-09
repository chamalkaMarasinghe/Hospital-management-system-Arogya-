import React, { useState } from 'react'
import './index.css'
import {useNavigate,Link} from 'react-router-dom'
import ProfilePage from '../ProfilePage';
// import { login } from '../../api/auth';

function Adminloginpage (){
    const navigate = useNavigate()
    // const [EmailAddress, setEmailAddress] = useState("");
    // const [Password, setPassword] = useState("");
    // const history = useNavigate();
  
    // function handleSubmit(e) {
    //   e.preventDefault();
  
    //   console.log(EmailAddress,Password);
    //   fetch("http://localhost:3001/login-user", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       EmailAddress,
    //       Password,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       if (data.status == "ok") {
    //         alert("login successful");
    //         window.location.href('http://localhost:3000/ProfilePage/${EmailAddress}');
  
    //       }
    //     });
    // }

    const [EmailAddress, setEmailAddress] = useState('');
    const [Password, setPassword] = useState('');
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      const req =  await fetch("http://localhost:3001/adminLogin", {
        method : "POST",
        headers : { 'Content-Type' : 'application/json'},
        body : JSON.stringify({EmailAddress, Password})
      })
      const res = req.json()
      return res
    };

    return (
        <> 
            <div className="limiter" id="login">
                <div className="container-login100"
                    style={{ "backgroundImage": "url(assets/img/slide/slide-1.jpg)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-5 col-md-offset-1">
                                <div className="login_topimg"></div>
                                <div className="wrap-login100">
                                    <form className="login100-form validate-form"> <span className="login100-form-title "> Admin - Login </span>
                                        <div className="wrap-input100 validate-input m-b-16"
                                            data-validate="Valid email is required: ex@abc.xyz"> <input className="input100" onChange={(e) => setEmailAddress(e.target.value)}
                                            required  type="text" name="Username"  placeholder="E-mail" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100"> <span className="glyphicon glyphicon-user"></span> </span>
                                        </div>
                                        <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                            <input className="input100"  onChange={(e) => setPassword(e.target.value)} minLength='6' required type="password" name="pass" placeholder="Password" />
                                            <span className="focus-input100"></span>
                                            <span className="symbol-input100"> <span className="glyphicon glyphicon-lock"></span> </span>
                                        </div>
                                        <div className="container-login100-form-btn p-t-25">
                                            <button className="login100-form-btn" onClick={(e) => {handleSubmit(e).then((res) => {
                                                if(res.admin.role === 'inventoryManager'){
                                                    navigate('/inventoryDashboard/physicalAsset')
                                                }
                                                else if(res.admin.role === 'ambulanceManager'){
                                                    navigate('/wardDetails')
                                                }
                                            })}}> Login </button> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Adminloginpage