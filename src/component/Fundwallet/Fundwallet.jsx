import React from "react";
import { useState } from "react";

import {
  ContainerFBGpd,
  LabelHeader,
  FormCard,
  TogDiv,
  LabelInput,
  Form,
  FormDiv,
  InputGridDiv,
  InputGrid,
  IconGrid,
  ButtonP,
  IconFlex,
  SlashEyeIcon,
  EyeIcon,
  Input,
  InputDes,
} from "../Styled/Styled";

const Fundwallet = () => {

    const [Pin, setPin] = useState("");
    
    const [showPin, setShowPin] = useState(false);

    const handlePinChange = (event) => {
        setPin(event.target.value);
      };

      const togglePasswordVisibilityPin = () => {
        setShowPin(!showPin);
      };

      const handleInputChange = (event) => {
        event.target.value = event.target.value.replace(/\D/, '');
      };


  return (
    <ContainerFBGpd>
      <LabelHeader>Fund Wallet</LabelHeader>

      <FormCard>
        <Form action="/" method="post" target="_blank" autocomplete="off">
          {/* -----------------------------------Password Input - Div */}
          <FormDiv>
            <LabelInput for="login-input">Amount</LabelInput>
            <Input type="number" id="profile-input" placeholder="Enter an amount" />

            <LabelInput for="login-input">Bank</LabelInput>
            <Input type="text" id="profile-input" placeholder="Select" />

            <LabelInput>Pin</LabelInput>

            <InputGridDiv>
              <InputGrid
                type={showPin ? "text" : "password"}
                value={Pin}
                onChange={handlePinChange}
                minLength="4"
                maxLength="4"
                onInput={handleInputChange}
                placeholder="Enter pin"
              />
              <IconGrid
                className={`show-password-icon ${showPin ? "visible" : ""}`}
                onClick={togglePasswordVisibilityPin}
              >
                <IconFlex>{showPin ? <SlashEyeIcon /> : <EyeIcon />}</IconFlex>
              </IconGrid>
            </InputGridDiv>

            <LabelInput for="login-input">Description</LabelInput>
            <InputDes 
            name="description"
            id="profile-input" 
            placeholder="Write a short description"></InputDes>

            <ButtonP type="submit">Continue</ButtonP>
          </FormDiv>
        </Form>
      </FormCard>
    </ContainerFBGpd>
  );
};

export default Fundwallet;
