import React, { useContext } from 'react'
import Checkbox from '@mui/material/Checkbox';
import styles from "./checked.module.css"
import { AuthContext } from '../Logincomponent/AuthContext';

export const Checked = () => {
    const { checked, onHandleChange } = useContext(AuthContext)


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
    return (
        <div className={styles.main_div}>
            <div>
                <Checkbox {...label} checked={checked} onChange={onHandleChange} />
                <p className={styles.checkbox_para}>0/2 ITEMS SELECTED</p>
            </div>
            <div className={styles.button_div}>
                <button className={styles.button}>REMOVE</button>
                <div className={styles.vertical_line}></div>
                <button className={styles.button}>MOVE TO WISHLIST</button>
            </div>
        </div>
    )
}
