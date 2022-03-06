// import { Alert, Stack } from "@mui/material";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [mobileNo, setMobileNo] = useState("");
  const [address, setAddress] = useState("")
  const [finalAddress, setFinalAddress] = useState("")
  let [createCapche, setCapche] = useState(Math.floor(1000 + Math.random() * 9000))
  const [enterCapche, setEnterCapche] = React.useState("")
  const [authCapche, setAuthCapche] = React.useState(false)
  var createOtp = Math.floor(1000 + Math.random() * 9000)
  //var createOtp = "1234"
  const [auth, setAuth] = useState(false)
  const [passwordAuth, setPasswordAuth] = useState(false)

  // const BasicAlerts = () => (
  //   <Stack sx={{ width: '100%' }} spacing={2}>
  //     <Alert severity="info">This is an info alert — check it out!</Alert>
  //   </Stack>
  // )


  const [checked, setChecked] = useState(false)
  const onHandleChange = (event) => {
    setChecked(event.target.checked)

  }



  const on_login = () => {
    // // <Alert severity="info">`OTP is ${createOtp}`</Alert>
    // BasicAlerts()
    // console.log(BasicAlerts())
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

  const changeCapche = () => {
    createCapche = Math.floor(1000 + Math.random() * 9000)
    setCapche(createCapche)
  }
  const authenticateCapche = (capche) => {
    if (createCapche.toString() === capche) {
      console.log(1)
      setAuthCapche(true)
    }
    else {
      console.log(0)
      alert("Please Enter Valid capche")
      setAuthCapche(false)
    }

  }

  const value = { mobileNo, createOtp, setMobileNo, on_login, authentication, auth, passwordAuthentication, passwordAuth, checked, setChecked, onHandleChange, address, setAddress, finalAddress, setFinalAddress, createCapche, setCapche, changeCapche, enterCapche, setEnterCapche, authCapche, authenticateCapche }
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
