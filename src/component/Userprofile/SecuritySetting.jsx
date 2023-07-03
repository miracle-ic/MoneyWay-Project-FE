import React from 'react'
import "./securitysetting.css";
import Passwordform from './Passwordform';
import { ContainerFBG, LabelHeader, FormCard, CoverImgEdit } from '../Styled/Styled';

const SecuritySetting = () => {
  return (
    <ContainerFBG>
      <LabelHeader>
        Security Setting
      </LabelHeader>
      

      <FormCard>
      {/* <CoverImgEdit 
        src="https://res.cloudinary.com/dafxzu462/image/upload/v1687740198/Rectangle_315profilecoverbg_pllpwe.png"
        alt="cover-image"
      /> */}
        <Passwordform />
      </FormCard>

    </ContainerFBG>
  )
}

export default SecuritySetting