import React from "react";
import { useState } from "react";

import {
  BellIcon,
  CloseIcon,
  IconFlex,
  MIconFlex,
  MenuCard,
  MenuIcon,
  NavBarCon,
  NavLogoDiv,
  NavRightDiv,
  NotiAlert,
  NotiDiv,
  UserAvDiv,
} from "../Styled/Styled";
import Mobilemenu from "../Sidebar/Mobilemenu";

const Usernav = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuVisibility = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavBarCon>
      <NavLogoDiv>
        <img
          src="https://res.cloudinary.com/dafxzu462/image/upload/v1687697811/Frame_8402Logo_-_MoneyWay_an1xnp.svg"
          alt="user profile avatar"
          width={30}
          height={30}
          style={{ marginRight: "10px" }}
        />
        MoneyWay
      </NavLogoDiv>
      <NavRightDiv>
        <NotiDiv>
          <BellIcon />
          <NotiAlert></NotiAlert>
        </NotiDiv>

        <UserAvDiv>
          <img
            src="https://res.cloudinary.com/dafxzu462/image/upload/v1687701303/Ellipse_21user-avatar_k5vu1n.png"
            alt="user profile avatar"
            width={42}
            height={42}
            style={{ clipPath: "circle(50% at 50% 50%)", marginRight: "10px" }}
          />
          Adetutu
        </UserAvDiv>
      </NavRightDiv>

      <MIconFlex
        className={`show-menu-icon ${showMenu ? "visible" : ""}`}
        onClick={toggleMenuVisibility}
      >
            <IconFlex>
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </IconFlex>
      </MIconFlex>

      <MenuCard
        className={showMenu ? "active" : ""}
        onClick={toggleMenuVisibility}
      >
      <Mobilemenu />
      </MenuCard>
    </NavBarCon>
  );
};

export default Usernav;
