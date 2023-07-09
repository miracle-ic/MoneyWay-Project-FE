import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userprofile from "./component/Userprofile/Userprofile";
import Profileform from "./component/Userprofile/Profileform";
import SecuritySetting from "./component/Userprofile/SecuritySetting";
import Fundwallet from "./component/Fundwallet/Fundwallet";
import Pinmodal from "./component/Userprofile/Pinmodal";
import Passwordmodal from "./component/Userprofile/Passwordmodal";
import Profilemodal from "./component/Navbar/Profilemodal";
import Notificationmodal from "./component/Navbar/Notificationmodal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Landing Page</h1>} />
          <Route path="/home" element={<Userprofile />} >
            <Route index element={<Notificationmodal />} />
            <Route path="profile" element={<Profileform/>} />
            <Route path="security" element={<SecuritySetting/>} />
            <Route path="payment" element={<h1>Payment</h1>} />
            <Route path="fundwallet" element={<Fundwallet />} />
            <Route path="transfer" element={<h1>Transfer</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
