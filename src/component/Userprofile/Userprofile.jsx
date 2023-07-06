import React from 'react'
import './userprofile.css'
import Usernav from '../Navbar/Usernav'
import Sidebar from '../Sidebar/Sidebar'
import Profileform from './Profileform'
import SecuritySetting from './SecuritySetting'
import { BodyFrame, ContainerFBG, SideFrame, UserCon } from '../Styled/Styled';
import { Outlet } from 'react-router-dom'

const Userprofile = () => {
  return (
    <UserCon>
        <div>
            <Usernav />
        </div>

        <BodyFrame>
            <SideFrame>
                <Sidebar />
            </SideFrame>
            
            
                {/* <Profileform /> */}
                {/* <SecuritySetting /> */}
                <Outlet/>
        </BodyFrame>
    </UserCon>
  )
}

export default Userprofile
