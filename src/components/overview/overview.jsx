import React from 'react'
import Userinfo from './useinfo/userinfo.jsx'
import addfund from './images/addfund1.jpg'
import Referrer from './referrer/referrer.jsx'
import Vdeo from './vdeo/vdeo.jsx'
import Graph from './graph/graph.jsx'
import Charts from './charts/charts.jsx'

import './overview.css'

function overview() {
  return (
  <><div className="OvWraper">
        <div className="ovHead">
        <div className="ovHeadLeft"><span>Overview</span></div>
        <div className="ovHeadRight"><div className='afspan'>AddFunds</div><img src={addfund} alt="" className="addfundicon" /></div>
    </div>
  </div>
    
    <div className='overviewWrap'>

            <div class="ovLeft">
                <div className="ovLeftTop">
                  <div class="item1" ><Graph/></div>
                  <div class="item2"><Charts/></div>
                </div>
                <div class="item3"><Referrer/></div>  
            </div>
            
            <div className="ovRight">
                <div class="item4"><Userinfo/></div>
                <div class="item5"><Vdeo/></div>
            </div>

    </div>
    </>
  )
}

export default overview