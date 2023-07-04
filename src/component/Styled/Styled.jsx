import styled from "styled-components";
import { RxImage } from "react-icons/rx";
import { PiEyeLight, PiEyeSlashLight } from "react-icons/pi";

export const ContainerFBG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
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


