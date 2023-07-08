import styled from "styled-components";
import { RxImage } from "react-icons/rx";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { SlBell } from "react-icons/sl";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";



export const ContainerFBG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 2%;
  padding-right: 2%;
  width: 100%;
  height: 100%;
  background-color: #f2f4f7;
  overflow: scroll;

  @media screen and (max-width: 900px) {
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 85px;
  }
`;

export const ContainerFBGpd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
  padding-left: 2%;
  padding-right: 2%;
  padding-bottom: 20%;
  width: 100%;
  height: 100%;
  background-color: #f2f4f7;
  overflow: scroll;

  @media screen and (max-width: 900px) {
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 85px;
  }
`;

export const LabelHeader = styled.label`
    font-size: 24px;
    font-weight: 700;
    color: #101828;
`;

export const FormCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 687px;
    height: auto;
    margin-top: 3%;
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    border-radius: 8px;
    background-color: #fff;

    @media screen and (max-width: 767px) {
        width: 343px;
        margin-top: 25px;
    }
`;

export const CoverImgEdit = styled.img`
    width: 100%;
    min-height: 84px;
    border-radius: 8px;
`;

export const AvatarDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #F9FAFB;
    margin-top: -50px;

    @media screen and (max-width: 900px) {
        width: 80px;
        height: 80px;
        margin-top: -40px;
    }

    @media screen and (max-width: 767px) {
        width: 70px;
        height: 70px;
        margin-top: -35px;
    }
`;

export const AvatarIcon = styled(RxImage)`
    font-size: 28px;
    color: #667085;

    @media screen and (max-width: 900px) {
        font-size: 26px;
    }

    @media screen and (max-width: 767px) {
        font-size: 24px;
    }
`;

export const Form = styled.form`
    width: 100%;
`;

export const FormDiv = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const PGraphF = styled.p`
    width: 550px;
    color: #98A2B3;
    font-size: 14px;
    font-weight: 200;
    line-height: 1.5;
    margin-bottom: 0;

    @media screen and (max-width: 767px) {
        width: 100%;
    }
`;

export const InputGridDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "overlap";
`;

export const InputGrid = styled.input`
    grid-area: overlap;
    align-self: center;
    justify-self: center;
    font-size: 14px;
    width: 100%;
    height: 44px;
    border: 1px solid #98A2B3;
    border-radius: 6px;
    padding-left: 15px;
    padding-right: 15px;
    color: #101828;
    appearance: none;
    outline: none;

    &::placeholder {
        color: #98A2B3;
    }
`;

export const IconGrid = styled.div`
    grid-area: overlap;
    align-self: center;
    justify-self: end;
    place-items: center;
    height:auto;
    padding-bottom: 0;
    margin-right: 20px;
    align-items: center;
`;

export const IconFlex = styled.div`
    display: flex;
    align-self: center;
    justify-self: end;
    cursor: pointer;
`;

export const EyeIcon = styled(PiEyeLight)`
    color: #98A2B3;
    font-size: 20px;
`;

export const SlashEyeIcon = styled(PiEyeSlashLight)`
    color: #98A2B3;
    font-size: 20px;
`;

export const LabelInput = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #101828;
    margin-top: 25px;
    margin-bottom: 10px;
`;

export const Input = styled.input`
    font-size: 14px;
    width: 100%;
    height: 44px;
    border: 1px solid #98A2B3;
    border-radius: 6px;
    padding-left: 15px;
    padding-right: 15px;
    color: #101828;
    appearance: none;
    outline: none;

    &::placeholder {
        color: #98A2B3;
    }
`;

export const InputDes = styled.textarea`
    font-size: 14px;
    width: 100%;
    height: 165px;
    border: 1px solid #98A2B3;
    border-radius: 6px;
    padding-top: 10px;
    padding-left: 15px;
    padding-right: 15px;
    color: #101828;
    appearance: none;
    outline: none;
    font-family: inter;

    &::placeholder {
        color: #98A2B3;
    }
`;

export const EmailInput = styled.input`
    font-size: 14px;
    width: 100%;
    height: 44px;
    background-color: #EAECF0;
    border: none;
    border-radius: 6px;
    padding-left: 15px;
    padding-right: 15px;
    color: #101828;
    appearance: none;
    outline: none;

    &::placeholder {
        color: #98A2B3;
    }
`;

export const ErrorMsg = styled.div`
    font-size: 12px;
    font-weight: 300;
    color: #f00;
    margin-top: 5px;
`;

export const TabDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 45px;
    border-bottom: 3px solid #DADADA;
`;

export const ButtonTab = styled.button`
    font-size: 14px;
    font-weight: 100;
    color: #101828;
    background-color: #fff;
    border: none;
    width: 50%;
    height: 100%;
    cursor: pointer;

    &.active {
        font-weight: 300;
        color: #3538CD;
        border-bottom: 3px solid #3538CD;
    }

    @media screen and (max-width: 767px) {
        font-size: 12px;
    }
`;

export const TogDiv = styled.div`
    width: 100%;
    height: auto;
    display: none;

    &.active {
        display: block;
    }
`;

export const ButtonP = styled.button`
    font-size: 14px;
    font-weight: 600;
    width: 100%;
    height: 44px;
    border: none;
    color: #fff;
    border-radius: 6px;
    background-color: #3538CD;
    margin-top: 35px;
`;


//---------------------------------------------User NavBar

export const NavBarCon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 100%;
    height: 96px;
    padding-left: 2%;
    padding-right: 7%;
    background-color: #fff;

    @media screen and (max-width: 900px) {
        height: 56px;
        padding-left: 5%;
    }

    @media screen and (max-width: 767px) {
        height: 56px;
    }
`;

export const NotiDiv = styled.a`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "overlap";
    color: #000;
    margin-right: 30px;
    text-decoration: none;
    cursor: pointer;
`;

export const NavRightDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 100%;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const BellIcon = styled(SlBell)`
    grid-area: overlap;
    align-self: center;
    justify-self: center; 
    font-size: 20px;
`;

export const NotiAlert = styled.div`
    grid-area: overlap;
    align-self: start;
    justify-self: end;
    margin-top: -2px;
    margin-right: 2px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #F61805;
`;

export const UserAvDiv = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    color: #000;
    text-decoration: none;
    cursor: pointer;
`;

export const NavLogoDiv = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #3538cd;
    text-decoration: none;
`;

//---------------------------------------------Userprofile page

export const UserCon = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: fixed;
`;

export const BodyFrame = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;
export const SideFrame = styled.div`
    height: 100%;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;
export const ProfileFrame = styled.div`
    width: 100%;
    height: 100%;
    overflow: scroll;
`;

//-------------------------------------Successful Modals

export const CModal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
`;

export const ModalCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 479px;
    height: 346px;
    padding: 48px;
    border-radius: 24px;
    background-color: #FFFFFF;
    margin: auto auto;
    transition: 850ms ease-in-out;

    @media screen and (max-width: 500px) {
        width: 100%;
        height: 100%;
        padding: 40% 17px 83px 17px;
        border-radius: 0;
        background-color: #F9FAFB;
    }
`;

export const GoodIcon = styled(BsFillCheckCircleFill)`
    color: #34A853;
    width: 48px;
    height: 48px;
    margin-bottom: 32px;
`;

export const LabelModal = styled.label`
    font-size: 24px;
    font-weight: 700;
    color: #101828;
`;

export const ParaModal = styled.p`
    color: #101828;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 32px;

    @media screen and (max-width: 500px) {
        margin-bottom: 50%;
    }
`;

export const CloseBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #101828;
    background-color: #F2F4F7;
    height: 44px;
    width: 100%;
    font-size: 14px;
    font-weight: 400;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    border: none;
`;

// ---------------------------------------------Sidebar style

export const SideCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100%;
    background-color: #fff;
    // border: 1px solid rgb(226, 226, 226);
`;

export const SideNavDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const SideLine = styled.div`
    width: 100%;
    height: 1px;
    margin-top: 20px;
    // margin-bottom: 10px;
    background-color: #DADADA;
`;

export const SideNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #5C6881;
    fill: #5C6881;
    height: 40px;
    width: 100%;
    font-size: 16px;
    text-decoration: none;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
  
    &.active {
        color: #fff;
        background-color: #3538CD;
    }

    &:hover {
        color: #3538CD;
        background-color: #EEF4FF;
    }
`;

export const LogoutBTN = styled.button`
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #3538CD;
    background-color: #EEF4FF;
    height: 40px;
    width: 100%;
    font-size: 16px;
    text-decoration: none;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
    border: none;

    @media screen and (max-width: 900px) {
        justify-content: center;
    }
`;

//-------------------------------------Mobile Menu

export const MenuCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 375px;
    height: 522px;
    background-color: #fff;
    position: absolute;
    top: 56px;
    z-index: 1;
    right: 0;
    right: -100%;
    opacity: 0;
    transition: 850ms ease-in-out;
    // border: 1px solid rgb(226, 226, 226);

    &.active {
        right: 0;
        opacity: 100%;
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const MenuDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 0px;
`;

export const LogDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 18px;
    padding-bottom: 18px;
`;

export const PGraphM = styled.p`
    width: 100%;
    color: #98A2B3;
    font-size: 14px;
    font-weight: 200;
    line-height: 1.5;
    margin-top: 32px;
`;

export const MIconFlex = styled.div`
    display: none;
    position: absolute;
    right: 0;
    width: 40px;
    height: 40px;
    margin-right: 5%;
    font-size: 20px;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;

export const MenuIcon = styled(AiOutlineMenu)`
    width: 30px;
    height: 30px;

    @media screen and (max-width: 767px) {
        width: 20px;
        height: 20px;
    }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
    width: 30px;
    height: 30px;

    @media screen and (max-width: 767px) {
        width: 20px;
        height: 20px;
    }
`;