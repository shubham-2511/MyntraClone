import React, { useContext } from "react";
import styles from "./Login.module.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import LoginNavbar from "./LoginNavbar";

//import { border, style } from '@mui/system';

export const Login = () => {
  const navigate = useNavigate();
  // const history = useHistory()

  const { mobileNo, setMobileNo } = useContext(AuthContext);
  console.log(mobileNo);
  const handleChange = () => {
    // console.log(mobileNo)
    // if (mobileNo.length < 10) {
    //     console.log("incorrect No")
    //     document.querySelector("#para").innerHTML = "Please add a valid mobile number (10 digits)"
    //     setMobileNo("")

    // }
    // else {
    //history.push("/Otp", { mobileNo })
    console.log("infunction");
    navigate("/Otp");

    // }
  };
  return (
    <div className={styles.login_body}>
      <LoginNavbar />
      <div className={styles.login_parentDiv}>
        <img
          width="100%"
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/12/29/e0f67808-f8b9-42b0-80ae-805fdf745cad1640802248099-Banner_Login-Landing-page--1-.jpg"
          alt="loginimg"
        />
        <div className={styles.login_content_div}>
          <div className={styles.login_signup_div}>
            Login <span className={styles.login_or}>or</span> Signup
          </div>
          <div>
            <TextField
              className={styles.MuiTextField}
              id="outlined-start-adornment"
              type="text"
              placeholder="Mobile No *"
              onChange={(e) => setMobileNo(e.currentTarget.value)}
              value={mobileNo}
              InputProps={{
                style: {
                  height: "2.4em",
                  borderRadius: "0px",
                },
                startAdornment: (
                  <InputAdornment position="start">+91 |</InputAdornment>
                ),
              }}
            />
            <p id="para" className={styles.login_valid_no}></p>
          </div>
          <p className={styles.login_para_div}>
            By continuing, I agree to the{" "}
            <b className={styles.login_bold}>Term of Use</b> &{" "}
            <b className={styles.login_bold}>Privacy Policy</b>
          </p>
          <button className={styles.login_button} onClick={handleChange}>
            CONTINUE
          </button>
          <p className={styles.login_para_div}>
            Having Trouble in logging in?{" "}
            <b className={styles.login_bold}>Get help</b>
          </p>
        </div>
      </div>
    </div>
  );
};
