import React from "react";
import "./userprofile.css";
import Usernav from "../Navbar/Usernav";
import Sidebar from "../Sidebar/Sidebar";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import paymentSvg from "../payment.svg";
import fundwalletSvg from "../fundwallet.svg";
import transferSvg from "../transfer.svg";

const Userprofile = () => {
  return (
    <div className="user-container">
      <div className="u-header">
        <Usernav />
      </div>

      <div className="u-body">
        
        <div className="s-menu">
          <div className="s-nav">
            <a href="" className="a-dash">
              <LuLayoutDashboard className="s-icon" />
              Dashboard
            </a>
            <a href="">
              <img src={paymentSvg} className="s-icon" />
              Payments
            </a>
            <a href="">
              <img src={fundwalletSvg} className="s-icon" />
              Fund Wallet
            </a>
            <a href="">
              <img src={transferSvg} className="s-icon" />
              Transfer
            </a>
          </div>
          <div className="s-line"></div>
          <div className="s-logout">
            <a href="" className="a-logout">
              <MdLogout className="s-icon" />
              Logout
            </a>
          </div>
        </div>

        <div className="u-profile"></div>
      </div>
    </div>
  );
};

export default Userprofile;