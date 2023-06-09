import React,{useState} from "react";



function DeleteAccount() {
    // const [EmailAddress, setEmailAddress] = useState('');
    // const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  
    // async function handleEmailConfirmation() {
    //   try {
    //     const response = await fetch(`http://localhost:3001/authRedirect/checkEmail/${EmailAddress}`);
    //     const data = await response.json();
        
    //     if (response.ok) {
    //       setIsEmailConfirmed(true);
    //       alert('Email confirmed!');
    //     } else {
    //       console.error(data.message);
    //       alert('Email is invalid !')
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    const [EmailAddress, setEmailAddress] = useState('');
    
  
    const handleDeleteAccount = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch(`http://localhost:3001/authRedirect/deleteAccount/${EmailAddress}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          });
      
          if (response.ok) {
            // Account was successfully deleted
            alert("Account has been deleted");
            window.location.href='http://localhost:3000/home';
          } else {
            // Account deletion failed
            alert("Unable to delete account");
          }
        } catch (error) {
          console.error(error);
        }
      };
        return(
          <>

          
{/* <div class="d-flex justify-content-center" style={{height:'450px'}}>
                        <div class="align-self-center border rounded p-5" style={{borderRadius:'50px',marginTop:'100px', backgroundImage: "linear-gradient(to bottom right, #0072ff, #00c6ff)", height: "100vh"}} >

                         <div class="container mt-5" >
                                <h1 class="text-center">Delete Account</h1>
                                <p class="text-center">Are you sure you want to delete your account?</p>
                                <form onSubmit={handleDeleteAccount}>
                                    <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="password"  required/>
                                    </div>
                                    <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-danger" style={{width:'200px',marginLeft:'60px'}}>Delete Account</button>
                                    </div>
                                </form>
                        </div>
                          
                        </div>
                        </div> */}
                       

    <div className="limiter" id="login">
                <div className="container-login100"
                    style={{ "backgroundImage": "url(assets/img/slide/slide-1.jpg)" }}>
                    <div className="container">
                    <div class="d-flex ">
                        <div class="align-self-center border rounded p-5" style={{borderRadius:'50px',marginTop:'50px', backgroundImage: "linear-gradient(to bottom right, #0072ff, #00c6ff)", height: "550px",marginLeft:'600px'}} >

                         <div class="container mt-5" >
                                <h1 class="text-center">Delete Account</h1>
                                <p class="text-center">Are you sure you want to delete your account?</p>
                            
                                <form onSubmit={handleDeleteAccount} >
                                    <div class="mb-3">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="email" onChange={(e) => setEmailAddress(e.target.value)} aria-describedby="emailHelp"  required/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-danger" style={{width:'200px',marginLeft:'60px'}}>Confirm Delete</button>
                                    </div>

                               
                                    </form>
                              
                                {/* {isEmailConfirmed  &&(
                                    <div class="d-grid gap-2">
                                    <button type="submit" class="btn btn-danger" onClick={handleDeleteAccount} style={{width:'200px',marginLeft:'60px'}}>Delete Account</button>
                                    </div>
                                )} */}
                        </div>
                          
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>

    
          
          </>



        )


}

export default DeleteAccount;