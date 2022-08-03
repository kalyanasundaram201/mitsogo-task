import React from 'react';
import ReactPlayer from 'react-player';
  import videoThumbnail from './images/videoThumbnail.png'
 import optionIcon from './images/optionIcon.jpg'
 import './vdeo.css'



const VideoJs=()=>{
   const videosrc="https://youtu.be/bC6_FMqX_Y8"
   const poster={videoThumbnail}

return(
    
       
  <div className='vdeoWraper'>
           <div className='vdeoheading'>
                <div><span className='ourusersspan'>Our users</span></div>
                <div className="ouruserIcon"><img src={optionIcon} alt="" className='ouruserIcon' /></div>
            </div>

        <div className="vdeoplayer">
             <ReactPlayer controls url={videosrc} width='440px' height='248px' poster={poster}/>

        </div>
    

    </div>

    
)

}

export default VideoJs
  

