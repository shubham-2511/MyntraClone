import React, { useContext } from 'react'
import Navbar from '../HomePageComponents/Navbar'
import styles from "./Password.module.css"
import { TextField } from '@mui/material'
import { AuthContext } from './AuthContext'
import { Navigate } from 'react-router-dom'

export const Password = () => {
    const { mobileNo, setMobileNo, passwordAuthentication, passwordAuth } = useContext(AuthContext)
    const [password, setPassword] = React.useState("")
    const login_home = () => {
        passwordAuthentication(password, mobileNo)

    }
    return (!passwordAuth) ? (
        <div>
            <Navbar />
            <div className={styles.password_parentDiv} >
                <div>
                    <h2 className={styles.password_heading} >Login to Your Account</h2>
                    <div>
                        <TextField
                            className={styles.MuiTextFieldpassword}
                            required
                            id="outlined-required"
                            label="Mobile Number"
                            onChange={(e) => setMobileNo(e.currentTarget.value)}
                            value={mobileNo}

                            InputProps={{
                                style: {
                                    height: "2.4em",
                                    borderRadius: "0px",

                                }
                            }}
                        />
                        <TextField
                            className={styles.MuiTextFieldpassword}
                            required
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            value={password}
                            InputProps={{
                                style: {
                                    height: "2.4em",
                                    borderRadius: "0px",
                                    padding: "auto"

                                }
                            }}
                        />
                    </div>
                    <div>
                        <button className={styles.password_button} onClick={login_home}>Login</button>
                        <p className={styles.password_para}>Forgot your Password <b className={styles.password_bold}>RESET HERE</b></p>
                        <p className={styles.password_para}>Having Trouble in logging in?<b className={styles.password_bold}>Get Help</b></p>
                    </div>

                </div>
            </div>
        </div>
    ) : <Navigate to="/"></Navigate>
}
