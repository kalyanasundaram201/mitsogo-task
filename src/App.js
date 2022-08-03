import React from 'react'
import Sidebar from './components/sidebar/sidebar'
import Topbar from './components/topbar/Topbar'
import Overview from './components/overview/overview'
import './App.css'
//  import Charts from './components/charts/charts'
import { BrowserRouter, Routes,Route} from 'react-router-dom'




function App() {
  return (
    <div className='appWraper'> 
  <BrowserRouter>
   <Routes>
    <Route exact path='/sidebar' element={< Sidebar />}></Route>

   </Routes> 
     <div>
         <Topbar/>
         <Overview/>
     </div>        
</BrowserRouter>
     </div>
  )
}

export default App