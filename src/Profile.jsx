import React from 'react'
import "./Profile.css"
import { useSelector } from 'react-redux';
const Profile = () => {
  const isLoggedIn = useSelector((state) => state); 

  return (
    <div class="conta mt-4 mb-4 p-3 d-flex justify-content-center"> 
    <div class="card1 p-4"> 
    <div class=" image d-flex flex-column justify-content-center align-items-center"> 
    <div> <img class="imgprofile" src="profile.webp" height="140" width="140" alt="profile"/></div>
     <span class="name mt-3">{isLoggedIn.username}</span> <span class="idd">@{isLoggedIn.user}</span> 
     <span class="role">{isLoggedIn.role} </span> 
     {(isLoggedIn.subscribe&&isLoggedIn.role!=="ADMIN")&&<><span>Subscribed</span><span>Ending on</span><span>{isLoggedIn.subDate}</span></>}
        
              <div class=" d-flex mt-2"> 
              <a href="/edituser"><button class="btn btn-outline-dark">Edit Profile</button> </a>
              </div>
              <div class=" d-flex mt-2"> 
              <a href="/changepass"><button class="btn btn-outline-secondary">Change Password</button> </a>
              </div>
               <div class="text mt-3">
                 <span>Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork.<br/>
                 <br/> Artist/ Creative Director by Day #NFT minting@ with FND night. </span> 
                 </div> 
                 <div class="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> 
                 <span><i class="fa fa-twitter"></i></span>
                  <span><i class="fa fa-facebook-f"></i></span> 
                  <span><i class="fa fa-instagram"></i></span> 
                  <span><i class="fa fa-linkedin"></i></span>
                   </div> 
                   <div class=" px-2 rounded mt-4 date ">
                     <span class="join">Joined {isLoggedIn.joinDate}</span> 
                     </div> 
                     </div> 
                     </div>
</div>
  )
}

export default Profile
