import React from 'react'
import './userprofile.css'
import Usernav from '../Navbar/Usernav'
import Sidebar from '../Sidebar/Sidebar'
import Profileform from './Profileform'
import SecuritySetting from './SecuritySetting'
import { ContainerFBG } from '../Styled/Styled';
import { Outlet } from 'react-router-dom'

const Userprofile = () => {
  return (
    <div className='user-container'>
        <div className="u-header">
            <Usernav />
        </div>

        <div className="u-body">
            <div className="u-side">
                <Sidebar />
            </div>
            
            
                {/* <Profileform /> */}
                {/* <SecuritySetting /> */}
                <Outlet/>
        </div>
    </div>
  )
}

export default Userprofile
