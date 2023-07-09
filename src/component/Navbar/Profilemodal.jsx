import React from "react";
import { LuLayoutDashboard, LuShieldAlert } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {
  CModal,
  LPdiv,
  LabelPM,
  LogoutBTNpm,
  PMCard,
  ParaPM,
  PmHdiv,
  PmNavDiv,
  PmNavLink,
  SideLine,
  SideNavLink,
} from "../Styled/Styled";

const Profilemodal = () => {
  return (
      <>
        <PmHdiv to={"/home/profile"}>
          <img
            src="https://res.cloudinary.com/dafxzu462/image/upload/v1687701303/Ellipse_21user-avatar_k5vu1n.png"
            alt="user profile avatar"
            width={48}
            height={48}
            style={{ clipPath: "circle(50% at 50% 50%)", marginRight: "4px" }}
          />
          <LPdiv>
            <LabelPM>Adetutu Oluwasegun</LabelPM>
            <ParaPM>adetutuoluwasegun@gmail.com</ParaPM>
          </LPdiv>
        </PmHdiv>

        <SideLine />

        <PmNavDiv>

        <PmNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/profile"}
        >
          <FaRegUser style={{ marginRight: "8px", fontSize: "20px" }} />
          Account
        </PmNavLink>

        <PmNavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to={"/home/security"}
        >
          <LuShieldAlert style={{ marginRight: "8px", fontSize: "22px" }} />
          Security
        </PmNavLink>
        <LogoutBTNpm>
          <MdLogout style={{ marginRight: "8px", fontSize: "22px" }} />
          Logout
        </LogoutBTNpm>
        </PmNavDiv>
      </>
  );
};

export default Profilemodal;
