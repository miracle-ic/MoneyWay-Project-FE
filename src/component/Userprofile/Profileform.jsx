import React from "react";

import {
  ContainerFBGpd,
  LabelHeader,
  FormCard,
  CoverImgEdit,
  AvatarDiv,
  AvatarIcon,
  Form,
  FormDiv,
  LabelInput,
  Input,
  EmailInput,
  ButtonP,
} from "../Styled/Styled";

const Profileform = () => {
  return (
    <ContainerFBGpd>
      <LabelHeader>Profile</LabelHeader>

      <FormCard>
        <CoverImgEdit
          src="https://res.cloudinary.com/dafxzu462/image/upload/v1687740198/Rectangle_315profilecoverbg_pllpwe.png"
          alt="cover-image"
        />

        <AvatarDiv>
          <AvatarIcon />
        </AvatarDiv>

        <Form action="/" method="post" target="_blank" autocomplete="off">
          {/* -----------------------------------Login Email Input - Div */}
          <FormDiv>
            <LabelInput for="login-input">First Name</LabelInput>
            <Input type="text" id="profile-input" placeholder="Adetutu" />

            <LabelInput for="login-input">Last Name</LabelInput>
            <Input type="text" id="profile-input" placeholder="Oluwasegun" />

            <LabelInput for="login-input">Address</LabelInput>
            <Input
              type="text"
              id="profile-input"
              placeholder="15, Mosobolaji street, Ilupeju, Lagos"
            />

            <LabelInput for="login-input">Phone Number</LabelInput>
            <Input type="number" id="profile-input" placeholder="07098765432" />

            <LabelInput for="login-input">Email</LabelInput>
            <EmailInput
              type="email"
              id="email-input"
              placeholder="adetutuoluwasegun@gmail.com"
            />

            <ButtonP type="submit">Update</ButtonP>
          </FormDiv>
        </Form>
      </FormCard>
    </ContainerFBGpd>
  );
};

export default Profileform;
