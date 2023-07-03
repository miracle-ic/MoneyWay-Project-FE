import styled from "styled-components";
import { RxImage } from "react-icons/rx";

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
    max-width: 687px;
    height: auto;
    margin-top: 3%;
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 25px;
    border-radius: 8px;
    background-color: #fff;
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

export const LabelInput = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #101828;
    margin-top: 25px;
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
    margin-top: 10px;

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
    margin-top: 10px;

    &::placeholder {
        color: #98A2B3;
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
