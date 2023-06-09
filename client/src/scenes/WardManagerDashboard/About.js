import React from 'react';
import './About.css';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import image from './image/ward.jpg';


function About() {
 return (
<>
<Navbar></Navbar>
<hr style = {{height:'100px'}}></hr>
<img src={image} class='image1' alt="Responsive image"></img>
 
 <body>
    <section id="about">
        <div class="about-1">
            <h1>ABOUT US</h1>
            <p>A hospital system software, or HMS, both unifies and simplifies the interaction of healthcare professionals and improves the relationship with their patients. It ensures smooth healthcare processes, and, apart from medical workflows, HSM also handles administrative, legal and financial efforts with more efficiency.</p>
        </div>
    <div id="about-2">
        <div class="content-box-lg">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="about-item text-center">
                            <i class="fa fa-book"></i>
                            <h3>Mission</h3>
                            <hr></hr>
                            <p>What is Hospital Management System (HMS): Hospital management system is a computer system that helps manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as, Clinical.</p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="about-item text-center">
                            <i class="fa fa-globe"></i>
                            <h3>VISSION</h3>
                            <hr></hr>
                            <p>What is Hospital Management System (HMS): Hospital management system is a computer system that helps manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as, Clinical.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="about-item text-center">
                            <i class="fa fa-pencil"></i>
                            <h3>ACHIEVEMENTS</h3>
                            <hr></hr>
                            <p>What is Hospital Management System (HMS): Hospital management system is a computer system that helps manage the information related to health care and aids in the job completion of health care providers effectively. They manage the data related to all departments of healthcare such as, Clinical.</p>
                        </div>
                    </div>


                </div>
        </div>
    </div>
</div>
    </section>
 

 </body>
    
 <button  class="btn1" onClick={()=>window.location.href="/ELogin"} >Done</button>


    <div className='footer'><Footer/></div>
</>

 )



}
export default About;
