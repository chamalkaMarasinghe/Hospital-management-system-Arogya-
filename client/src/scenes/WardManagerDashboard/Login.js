import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import image from './image/yasitha.jpg';

import './Login.css';
function Login (){

return(
<>
 <Navbar></Navbar>
 <hr style = {{height:'100px'}}></hr>

<body>
 <div class="y2">
    <section class="Form my-4 mx-5">
        <div class="container">
            <div class="row no-gutter">
                <div class="col-lg-5">
                <img src='assets/img/yasitha.jpg' class="img-fluid" alt="" />
        
                </div>
                <div class="col-lg-7 px-5 pt-5 ">
                    <h1 class="font-weight-bold py-3">Welcome to wardmanagment</h1>
                    <h4>Sign into your account</h4>
                    <form>
                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="text"  placeholder="Enter User ID" class="btnt" required></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                                <input type="password"  placeholder="Phone Number" class="btnt" required></input>
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="col-lg-7">
                               <button type="submit" class="btn2 mt-3 mb-5"> Login</button>
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
      <div className='footer'><Footer/></div>
</>

)

}
export default Login;