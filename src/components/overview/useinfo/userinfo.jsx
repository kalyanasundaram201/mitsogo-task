import React from 'react'
import twitter from './images/twitter.jpg'
import facebook from './images/facebook.jpg'
import linkedin from './images/linkedin.jpg'
import whatsapp from './images/whatsapp.jpg'
import nick from './images/nick.jpg'
import editIcon from './images/editIcon.jpg'
import drew from './images/drew.jpg'
import optionIcon from './images/optionIcon.jpg'
import david from './images/david.jpg'
import lavid from './images/lavid.jpg'
import './userinfo.css'

function userinfo() {
  return (
    <div className='userinfoWraper'>
        <div className="currentUserInfo">
            <div className="currentUserimg"><img src={nick} alt="" className='currentUserimg'/></div>
            <div className="imgIcon"><img src={editIcon} alt="" /></div>
            <div className="username"><span className='usernamespan'>Nick Herasimneka</span></div>
            <div className="usercity"><span className='usercityspan'>United states</span></div>
            <div className="SmediaWraper">
                <img src={twitter} alt="" className='Smedia'/>
                <img src={facebook} alt="" className='Smedia'/>
                <img src={linkedin} alt="" className='Smedia'/>
                <img src={ whatsapp} alt="" className='Smedia'/>
            </div>
        </div>


        <div className="ourusers">
            <div><span className='ourusersspan'>Our users</span></div>
            <div className="ouruserIcon"><img src={optionIcon} alt="" className='ouruserIcon' /></div>
        </div>
        
        
        
        <div className="otherUserInfo">
              <div className="otherUserWraper">
                <div className="userimage"><img src={drew} alt="" className='userimage'/></div>
                <div className="userNameCityWraper">
                    <div><span className='otherusername'>Drew James</span></div>
                    <div className="cityMobilNoWraper">
                        <div className='otherusercity'>United states</div>
                        <div className='otheruserphnumber'>8715674877</div>
                    </div>
                </div>
              </div>
        </div>


        <div className="otherUserInfo">
              <div className="otherUserWraper">
                <div className="userimage"><img src={david} alt="" className='userimage'/></div>
                <div className="userNameCityWraper">
                    <div><span className='otherusername'>Bavid kames</span></div>
                    <div className="cityMobilNoWraper">
                        <div className='otherusercity'>United states</div>
                        <div className='otheruserphnumber'>8715674877</div>
                    </div>
                </div>
              </div>
        </div>
    

        <div className="otherUserInfo">
              <div className="otherUserWraper">
                <div className="userimage"><img src={lavid} alt="" className='userimage'/></div>
                <div className="userNameCityWraper">
                    <div><span className='otherusername'>Lavid Emes</span></div>
                    <div className="cityMobilNoWraper">
                        <div className='otherusercity'>United states</div>
                        <div className='otheruserphnumber'>8715674877</div>
                    </div>
                </div>
              </div>
        </div>
    
    
    
    </div>
  )
}

export default userinfo