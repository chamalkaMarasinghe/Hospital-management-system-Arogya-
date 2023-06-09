import React from 'react';
import './notificationbar.css';
import './notification.js';

function NotificationBar(){
    function handleLogout() {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            window.location.href = 'http://localhost:3000/home';

        }

      }
      
     return(
        <>
        <navBar>
    <div className="logo"> WELCOME TO THE PROFILE </div>
    <div className="icon" id="bell"> <img src="assets/img/notification.png" alt="" style={{"marginLeft":"100px"}}/> </div>
    <div className='logout'><button onClick={handleLogout} style={{"marginRight":"50px" ,"height":"40px","paddingBottom":"20px", "backgroundColor":"black" ,"color":"white"}}>Log out</button></div>
    <div className="notifications" id="box">
        <h2>Notifications - <span>2</span></h2>
        <div className="notifications-item"> <img src="https://i.imgur.com/uIgDDDd.jpg" alt="img"/>
            <div className="text">
                <h4>Samso aliao</h4>
                <p>Samso Nagaro Like your home work</p>
            </div>
        </div>
        <div className="notifications-item"> <img src="https://img.icons8.com/flat_round/64/000000/vote-badge.png" alt="img"/>
            <div className="text">
                <h4>John Silvester</h4>
                <p>+20 vista badge earned</p>
            </div>
        </div>
    </div>
</navBar>


        
        
        </>
     )


}
export default NotificationBar;