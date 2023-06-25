import React from "react";
import "./usernav.css";
import { SlBell } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";

const Usernav = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img
          src="https://res.cloudinary.com/dafxzu462/image/upload/v1687697811/Frame_8402Logo_-_MoneyWay_an1xnp.svg"
          alt="user profile avatar"
          width={30}
          height={30}
        />
        MoneyWay
      </a>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#" className="notification">
              <SlBell className="bell-icon" />
              <div className="noti-alert"></div>
            </a>
          </li>
          <li>
            <a href="#" className="user-avatar-div">
              <img
                src="https://res.cloudinary.com/dafxzu462/image/upload/v1687701303/Ellipse_21user-avatar_k5vu1n.png"
                alt="user profile avatar"
                width={42}
                height={42}
              />
              Adetutu
            </a>
          </li>
        </ul>
      </div>
      <AiOutlineMenu className="icon-menu" />
    </nav>
  );
};

export default Usernav;
