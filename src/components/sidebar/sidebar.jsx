import React from 'react'
import './sidebar.css'
import homeicon from './images/homeicon.png'
import dashboard from './images/dashboard.png'
import inbox from './images/inbox.png'
import products from './images/products1.png'
import admin from './images/admin1.png'

function sidebar() {
  return (
    <div>
        <div className='sideBarWraper'>
           <div className='sideBarHead'><span className="sidehead">ACME</span></div>
               <div className="HomeWraper">
                    <div className="homeIcon"><img src={homeicon} alt="" /></div>
                    <span className="HomeStr">Home</span>
            </div>
            <div className="HomeWraper">
                    <div className="homeIcon"><img src={dashboard} alt="" className='iconimg'/></div>
                    <span className="HomeStr">Dashboard</span>
            </div>
            <div className="HomeWraper">
                    <div className="homeIcon"><img src={inbox} alt="" /></div>
                    <span className="HomeStr">Inbox</span>
            </div>
            <div className="HomeWraper">
                    <div className="homeIcon"><img src={products} alt="" /></div>
                    <span className="HomeStr">products</span>
            </div>
            <div className="HomeWraper">
                    <div className="homeIcon"><img src={admin} alt="" /></div>
                    <span className="HomeStr">Admin</span>
            </div>
        </div>
        
    </div>
  )
}

export default sidebar