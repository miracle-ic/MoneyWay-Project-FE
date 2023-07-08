import React from "react";
import { LuLayoutDashboard, LuShieldAlert } from "react-icons/lu";
import { MdLogout, MdPhoneIphone } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { SlBell } from "react-icons/sl";
import { PiArrowCircleUpRight, PiMoney } from "react-icons/pi";

import {
  SideCard,
  SideNavLink,
  SideLine,
  SideNavDiv,
  LogoutBTN,
  CModal,
  MenuCard,
  MenuDiv,
  LogDiv,
  PGraphM,
} from "../Styled/Styled";

const Mobilemenu = () => {
  return (
    <>
      <MenuDiv>
        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/"}
        >
          <LuLayoutDashboard style={{ marginRight: "8px", fontSize: "22px" }} />
          Dashboard
        </SideNavLink>

        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/payment"}
        >
          <PiMoney style={{ marginRight: "8px", fontSize: "22px" }} />
          Payments
        </SideNavLink>

        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/fundwallet"}
        >
          <BiWallet style={{ marginRight: "8px", fontSize: "22px" }} />
          Fund Wallet
        </SideNavLink>

        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/transfer"}
        >
          <PiArrowCircleUpRight
            style={{ marginRight: "8px", fontSize: "22px" }}
          />
          Transfer
        </SideNavLink>

        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/buyairtime"}
        >
          <MdPhoneIphone style={{ marginRight: "8px", fontSize: "22px" }} />
          Buy Airtime
        </SideNavLink>

        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/notification"}
        >
          <SlBell style={{ marginRight: "8px", fontSize: "20px" }} />
          Notification
        </SideNavLink>

        <PGraphM>OTHERS</PGraphM>

        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/profile"}
        >
          <FaRegUser style={{ marginRight: "8px", fontSize: "20px" }} />
          Account
        </SideNavLink>

        <SideNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/security"}
        >
          <LuShieldAlert style={{ marginRight: "8px", fontSize: "22px" }} />
          Security
        </SideNavLink>
      </MenuDiv>

      <SideLine />

      <LogDiv>
        <LogoutBTN>
          <MdLogout style={{ marginRight: "8px", fontSize: "22px" }} />
          Logout
        </LogoutBTN>
      </LogDiv>
    </>
  );
};

export default Mobilemenu;
