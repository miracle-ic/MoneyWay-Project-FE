import { useState } from "react";
import React from "react";

import {
  ButtonP,
  Form,
  FormDiv,
  InputGrid,
  LabelInput,
  PGraphF,
  EyeIcon,
  SlashEyeIcon,
  InputGridDiv,
  IconGrid,
  IconFlex,
  ErrorMsg,
} from "../Styled/Styled";

const Pinform = () => {
  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");

  const [pinMatch, setPinMatch] = useState(newPin === confirmPin);


  const [showPin, setShowPin] = useState(false);
  const [showPin2, setShowPin2] = useState(false);
  const [showPin3, setShowPin3] = useState(false);

  const handleOldPinChange = (event) => {
    setOldPin(event.target.value);
  };

  const handleNewPinChange = (event) => {
    setNewPin(event.target.value);
  };

  const handleConfirmPinChange = (event) => {
    setConfirmPin(event.target.value);
    setPinMatch(event.target.value === newPin);
  };

  const togglePasswordVisibilityOldPass = () => {
    setShowPin(!showPin);
  };
  const togglePasswordVisibilityNewPass = () => {
    setShowPin2(!showPin2);
  };
  const togglePasswordVisibilityConfirmPass = () => {
    setShowPin3(!showPin3);
  };

  const handleInputChange = (event) => {
    event.target.value = event.target.value.replace(/\D/, '');
  };



  return (
    <Form action="/" method="post" target="_blank" autocomplete="off">
      {/* -----------------------------------Password Input - Div */}
      <FormDiv>
        <PGraphF>
            Minimum lenght is 4 characters
        </PGraphF>

        <LabelInput>Old Pin</LabelInput>

        <InputGridDiv>
          <InputGrid
            type={showPin ? "text" : "password"}
            value={oldPin}
            onChange={handleOldPinChange}
            minLength="4"
            maxLength="4"
            onInput={handleInputChange}
          />
          <IconGrid
            className={`show-password-icon ${showPin ? "visible" : ""}`}
            onClick={togglePasswordVisibilityOldPass}
          >
            <IconFlex>{showPin ? <SlashEyeIcon /> : <EyeIcon />}</IconFlex>
          </IconGrid>
        </InputGridDiv>

        <LabelInput>New Pin</LabelInput>

        <InputGridDiv>
          <InputGrid
            type={showPin2 ? "text" : "password"}
            value={newPin}
            onChange={handleNewPinChange}
            minLength="4"
            maxLength="4"
            onInput={handleInputChange}
          />
          <IconGrid
            className={`show-password-icon ${showPin2 ? "visible" : ""}`}
            onClick={togglePasswordVisibilityNewPass}
          >
            <IconFlex>
              {showPin2 ? <SlashEyeIcon /> : <EyeIcon />}
            </IconFlex>
          </IconGrid>
        </InputGridDiv>

        <LabelInput>Confirm Pin</LabelInput>

        <InputGridDiv>
          <InputGrid
            type={showPin3 ? "text" : "password"}
            value={confirmPin}
            onChange={handleConfirmPinChange}
            minLength="4"
            maxLength="4"
            onInput={handleInputChange}
          />
          <IconGrid
            className={`show-password-icon ${showPin3 ? "visible" : ""}`}
            onClick={togglePasswordVisibilityConfirmPass}
          >
            <IconFlex>
              {showPin3 ? <SlashEyeIcon /> : <EyeIcon />}
            </IconFlex>
          </IconGrid>
        </InputGridDiv>
        {pinMatch ? null : <ErrorMsg>PIN does not match.</ErrorMsg>}

        <ButtonP type="submit">Update</ButtonP>
      </FormDiv>
    </Form>
  );
};

export default Pinform;
