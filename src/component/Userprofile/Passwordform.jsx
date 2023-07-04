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

const Passwordform = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordMatch, setPasswordMatch] = useState(newPassword === confirmPassword);

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const handleOldPasswordChange = (event) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === newPassword);
  };

  const togglePasswordVisibilityOldPass = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibilityNewPass = () => {
    setShowPassword2(!showPassword2);
  };
  const togglePasswordVisibilityConfirmPass = () => {
    setShowPassword3(!showPassword3);
  };

  return (
    <Form action="/" method="post" target="_blank" autocomplete="off">
      {/* -----------------------------------Password Input - Div */}
      <FormDiv>
        <PGraphF>
          Password must contain at least 1 letter, 1 number, and 1 symbol.
          Minimum length is 8 characters
        </PGraphF>

        <LabelInput>Old Password</LabelInput>

        <InputGridDiv>
          <InputGrid
            type={showPassword ? "text" : "password"}
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
          <IconGrid
            className={`show-password-icon ${showPassword ? "visible" : ""}`}
            onClick={togglePasswordVisibilityOldPass}
          >
            <IconFlex>
            {showPassword ? <SlashEyeIcon /> : <EyeIcon /> }
            </IconFlex>
          </IconGrid>
        </InputGridDiv>

        <LabelInput>New Password</LabelInput>

        <InputGridDiv>
          <InputGrid
            type={showPassword2 ? "text" : "password"}
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
          <IconGrid
            className={`show-password-icon ${showPassword2 ? "visible" : ""}`}
            onClick={togglePasswordVisibilityNewPass}
            >
            <IconFlex>
            {showPassword2 ? <SlashEyeIcon /> : <EyeIcon /> }
            </IconFlex>
          </IconGrid>
        </InputGridDiv>

        <LabelInput>Confirm Password</LabelInput>

        <InputGridDiv>
          <InputGrid
            type={showPassword3 ? "text" : "password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <IconGrid
            className={`show-password-icon ${showPassword3 ? "visible" : ""}`}
            onClick={togglePasswordVisibilityConfirmPass}
            >
            <IconFlex>
            {showPassword3 ? <SlashEyeIcon /> : <EyeIcon /> }
            </IconFlex>
          </IconGrid>
        </InputGridDiv>
        {passwordMatch ? null : <ErrorMsg>PASSWORD does not match.</ErrorMsg>}

        <ButtonP type="submit">Update</ButtonP>
      </FormDiv>
    </Form>
  );
};

export default Passwordform;
