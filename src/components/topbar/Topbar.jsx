import React,{useState} from 'react'
import "./Topbar.css"
import nick from './images/nick.jpg'
import hambug from './images/hambug.jpg'
import searchicon from './images/searchicon.jpg'
import notification from './images/notification.jpg'
import dropdown from './images/dropdown.jpg'
import {useNavigate} from "react-router-dom"
import david from './images/david.jpg'
import maria from './images/maria.jpg'
import alexa from './images/alexa.jpg'
import profile from './images/profile.png'
import billing from './images/billing.png'
import logout from './images/logout.png'


function Topbar() {
  let navigate=useNavigate()
  



 
  const [click,setclick]=useState(true)
  const [Notification,setnotification]=useState(false)
  const [user,clickuser]=useState(false)
  
  function rendersidebar(){

    if(click===true)
    {
          setclick(false)
          navigate("/sidebar")
    }
    
    if(click===false){
      setclick(true)
        navigate("/")
    }
    
console.log(click)

  }

  function clickednotifiction(){
                clickuser(false)
              setnotification(!Notification)
              console.log(Notification)
}

function clickedUesr(){
  setnotification(false)
  clickuser(!user)
  
}
  

  
      
  return (
    <div className="topbar">
      <div className={click?"topbarwrapperNormal":"topbarwrapper"}>
        <div className='topleft'>
        <div className="TopbarMenuIconContainer"onClick={()=>{rendersidebar()}}><img src={hambug} alt="" className='menuButton' /></div>
        <div className="TopbarSearchIconContainer"><img src={searchicon} alt="" /></div>
        <input type="search" className="input" placeholder='search transaction, invoices or help'/>
          </div>
        <div className='topright'>
          <div className="TopbarIconContainer" onClick={clickednotifiction}><img src={notification} alt="" /></div>
          <span className='TopIconBadge'></span>
          <div className=""><span>John Doe</span></div>
          <div className="TopbarIconContainer"><img src={dropdown} alt="" /></div>
          <img src={nick} alt="" className="Topavatar" onClick={clickedUesr}/>
        </div>
      </div>




                        <div className={Notification? click? "notificationEnable":"notificationEnableSideEnable"  : "notification"}>
                          <div className="otherUserInfo">
                                <div className="otherUserWraper">
                                <div className="userimage"><img src={david} alt="" className='userimage'/></div>
                                    <div className="userNameCityWraper">
                                <div className='usernameWraper'>
                                    <span className='otherusername'>Bavid </span>
                                    <div className='otherusercity'>2 min ago </div>
                                  </div>
                                <div className="cityMobilNoWraper">
                                    <div><span className='message'>Assigned you on the call with sara</span> </div>
                                </div>
                            </div>
                          </div>
                                                    

                          <div className="otherUserWraper">
                                <div className="userimage"><img src={alexa} alt="" className='userimage'/></div>
                                    <div className="userNameCityWraper">
                                <div className='usernameWraper'>
                                    <span className='otherusername'>Alexa Marry</span>
                                    <div className='otherusercity'>5 min ago </div>
                                  </div>
                                <div className="cityMobilNoWraper">
                                    <div><span className='message'>Marked the task New UI as done</span> </div>
                                </div>
                            </div>
                          </div>



                          <div className="otherUserWraper">
                                <div className="userimage"><img src={maria} alt="" className='userimage'/></div>
                                    <div className="userNameCityWraper">
                                <div className='usernameWraper'>
                                    <span className='otherusername'>Eva Maria</span>
                                    <div className='otherusercity'>10 min ago </div>
                                  </div>
                                <div className="cityMobilNoWraper">
                                    <div><span className='message'>Added a new comment on sales task</span> </div>
                                </div>
                            </div>
                          </div>


                          <div className='showmore'>showmore</div>
                          </div>
                </div>


                          <div className={user?click?"profileSettingEnableSidebar":"profileSettingEnable":"profileSetting"}>
                            <div className="iconStringWraper">
                            <div className="Licon"><img src={profile} alt="" className="Licon"/></div>
                            <div className="Lstring">My profile</div>
                            </div>

                            <div className="iconStringWraper">
                            <div className="Licon"><img src={billing} alt="" className="Licon"/></div>
                            <div className="Lstring">Billing</div>
                            </div>

                             <div className="iconStringWraper">
                            <div className="Licon"><img src={logout} alt="" className="Licon" /></div>
                            <div className="Lstring">Logout</div>
                            </div>
                          </div>

                        



        

















      </div>
  )
}

export default Topbar