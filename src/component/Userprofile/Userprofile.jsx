import React from 'react'
import './userprofile.css'
import Usernav from '../Navbar/Usernav'
import Sidebar from '../Sidebar/Sidebar'
import Profileform from './Profileform'
import SecuritySetting from './SecuritySetting'

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
            
            <div className="u-profile">
                <SecuritySetting />
            </div>
        </div>
    </div>
  )
}

export default Userprofile