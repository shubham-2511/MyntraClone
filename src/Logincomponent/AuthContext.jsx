import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [mobileNo, setMobileNo] = useState("");
  var createOtp = Math.floor(1000 + Math.random() * 9000)
  //var createOtp = "1234"
  const [auth, setAuth] = useState(false)
  const [passwordAuth, setPasswordAuth] = useState(false)

  const [checked, setChecked] = useState(false)
  const onHandleChange = (event) => {
    setChecked(event.target.checked)

  }


  const on_login = () => {

    alert(`OTP is ${createOtp}`)

  }
  const authentication = (otp) => {
    console.log(typeof createOtp, typeof otp)
    if (createOtp.toString() === otp) {
      console.log(1)
      setAuth(true)
    }
    else {

      alert("Invalid Otp")
    }

  }

  const passwordAuthentication = (password, mobileNumber) => {
    if (password.length >= 8 && mobileNumber === mobileNo) {
      console.log(password, mobileNumber)
      setPasswordAuth(true)
      console.log(passwordAuth)

    }
    else {
      console.log(password.length, mobileNumber.length)
      alert("Invalid Credential")
    }
  }
  const value = { mobileNo, createOtp, setMobileNo, on_login, authentication, auth, passwordAuthentication, passwordAuth, checked, setChecked, onHandleChange }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
