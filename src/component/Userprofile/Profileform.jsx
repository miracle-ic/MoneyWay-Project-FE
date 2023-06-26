import React from "react";
import "./profileform.css";
import { RxImage } from "react-icons/rx";

const Profileform = () => {
  return (
    <div className="pf-container">
      <label htmlFor="#" className="p-label">
        Profile
      </label>

      <div className="form-container">
        <img
          src="https://res.cloudinary.com/dafxzu462/image/upload/v1687740198/Rectangle_315profilecoverbg_pllpwe.png"
          alt="cover-image"
          className="cover-img"
        />

        <div className="avatar-div">
          <RxImage className="img-icon" />
        </div>

        <form
          action="/"
          method="post"
          target="_blank"
          autocomplete="off"
          className="form-profile"
        >
          {/* -----------------------------------Login Email Input - Div */}
          <div className="form-div">
            
            <label for="login-input" class="profile-label">
              First Name
            </label>
            <input type="text" id="profile-input" placeholder="Adetutu" />
            
            <label for="login-input" class="profile-label">
              Last Name
            </label>
            <input type="text" id="profile-input" placeholder="Oluwasegun" />
            
            <label for="login-input" class="profile-label">
              Address
            </label>
            <input type="text" id="profile-input" placeholder="15, Mosobolaji street, Ilupeju, Lagos" />
            
            <label for="login-input" class="profile-label">
              Phone Number
            </label>
            <input type="number" id="profile-input" placeholder="07098765432" />
            
            <label for="login-input" class="profile-label">
              Email
            </label>
            <input type="email" id="email-input" placeholder="adetutuoluwasegun@gmail.com" />

            <button type="submit" class="btn-update">Update</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Profileform;
