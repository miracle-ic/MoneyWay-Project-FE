import React from 'react'
import "./passwordform.css";
import { ButtonP, Form, FormDiv, Input, LabelInput } from '../Styled/Styled';

const Passwordform = () => {
  return (
        <Form
          action="/"
          method="post"
          target="_blank"
          autocomplete="off"
        >
          {/* -----------------------------------Password Input - Div */}
          <FormDiv>
            
            <LabelInput>
              Old Password
            </LabelInput>
            <Input type="password" />
            
            <LabelInput>
              New Password
            </LabelInput>
            <Input type="password" />
            
            <LabelInput>
              Confirm Password
            </LabelInput>
            <Input type="password" />
            
            
            <ButtonP type="submit">Update</ButtonP>
          </FormDiv>
          
        </Form>
  )
}

export default Passwordform