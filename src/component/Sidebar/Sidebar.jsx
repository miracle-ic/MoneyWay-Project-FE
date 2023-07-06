import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { BiWallet } from "react-icons/bi";
import { CiMoneyBill } from "react-icons/ci";
import { PiArrowCircleUpRight, PiMoney } from "react-icons/pi";
import { SideCard, SideNavLink, SideLine, SideNavDiv, LogoutBTN } from "../Styled/Styled";



const Sidebar = () => {

  return (
    <SideCard>
      <SideNavDiv>
          <SideNavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/home/"}
          >
            <LuLayoutDashboard style={{ marginRight: '5px', fontSize: '22px' }} />
            Dashboard
          </SideNavLink>

          <SideNavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/home/payment"}
          >
            <PiMoney style={{ marginRight: '5px', fontSize: '22px' }} />
            Payments
          </SideNavLink>

          <SideNavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/home/fundwallet"}
          >
            <BiWallet style={{ marginRight: '5px', fontSize: '22px' }} />
            Fund Wallet
          </SideNavLink>

          <SideNavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to={"/home/transfer"}
          >
            <PiArrowCircleUpRight style={{ marginRight: '5px', fontSize: '22px' }} />
            Transfer
          </SideNavLink>
      </SideNavDiv>

      <SideLine />

      <SideNavDiv>
      <LogoutBTN>
      <MdLogout style={{ marginRight: '5px', fontSize: '22px' }} />
        Logout
    </LogoutBTN>
      </SideNavDiv>
    </SideCard>
  );
};

export default Sidebar;
