import React from 'react'
import MoneyIcon from '@mui/icons-material/Money';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { TextField } from '@mui/material';
import styles from "./choosepayment.module.css"
import { AuthContext } from '../Logincomponent/AuthContext';
import Final from './Final';

export const ChoosePayment = () => {
    const [select1, setSelect1] = React.useState(false)
    const [select2, setSelect2] = React.useState(false)
    const [select3, setSelect3] = React.useState(false)
    const [select4, setSelect4] = React.useState(false)
    const [select5, setSelect5] = React.useState(false)
    const [select6, setSelect6] = React.useState(false)
    const { createCapche, changeCapche, enterCapche, setEnterCapche } = React.useContext(AuthContext)
    console.log(select1)
    const handle_button1 = (e) => {
        setSelect1(!select1)
        setSelect2(false)
        setSelect3(false)
        setSelect4(false)
        setSelect5(false)
        setSelect6(false)
    }
    const handle_button2 = (e) => {
        setSelect2(!select2)
        setSelect1(false)
        setSelect3(false)
        setSelect4(false)
        setSelect5(false)
        setSelect6(false)
    }
    const handle_button3 = (e) => {
        setSelect3(!select3)
        setSelect1(false)
        setSelect2(false)
        setSelect4(false)
        setSelect5(false)
        setSelect6(false)
    }
    const handle_button4 = (e) => {
        setSelect4(!select4)
        setSelect1(false)
        setSelect2(false)
        setSelect3(false)
        setSelect5(false)
        setSelect6(false)
    }
    const handle_button5 = (e) => {
        setSelect5(!select5)
        setSelect1(false)
        setSelect2(false)
        setSelect3(false)
        setSelect4(false)
        setSelect6(false)
    }
    const handle_button6 = (e) => {
        setSelect6(!select6)
        setSelect1(false)
        setSelect2(false)
        setSelect3(false)
        setSelect4(false)
        setSelect5(false)
    }
    return (
        <div>
            <div className={styles.main_heading_choosing_payment}>Choose Payment Mode</div>
            <div className={styles.choose_payment_div}>
                <div className={styles.payment_mode}>
                    <button id="1" onClick={handle_button1} className={select1 ? styles.payment_mode_select_button : styles.payment_mode_button}><MoneyIcon  /><p className={styles.button_name}>Cash On Delivery</p></button>
                    <button id="2" onClick={handle_button2} className={select2 ? styles.payment_mode_select_button : styles.payment_mode_button}><CreditCardIcon /><p className={styles.button_name}>Credit/Debit card</p></button>
                    <button id="3" onClick={handle_button3} className={select3 ? styles.payment_mode_select_button : styles.payment_mode_button}> <PhoneIphoneOutlinedIcon /><p className={styles.button_name}>PhonePe/Google Pay/BHIM UPI</p></button>
                    <button id="4" onClick={handle_button4} className={select4 ? styles.payment_mode_select_button : styles.payment_mode_button}><AccountBalanceWalletOutlinedIcon /><p className={styles.button_name}> Paytm/Payzapp/Wallets</p></button>
                    <button id="5" onClick={handle_button5} className={select5 ? styles.payment_mode_select_button : styles.payment_mode_button}><AccountBalanceIcon /> <p className={styles.button_name}>Net Banking</p></button>
                    <button id="6" onClick={handle_button6} className={select6 ? styles.payment_mode_select_button : styles.payment_mode_button}><PaymentsOutlinedIcon /><p className={styles.button_name}> EMI/Pay Later</p></button>
                </div>
                <div>
                    <p className={styles.para_cash}>Pay On Delivery(Cash/Card/UPI)</p>
                    <div className={styles.capche_div}>
                        <div>
                            <input type="text" value={createCapche} className={styles.capche_input} ></input>
                        </div>
                        <div>
                            <button className={styles.capche_button} onClick={() => changeCapche()}>Change Image</button>
                        </div>

                    </div>
                    <TextField id="outlined-basic" label="Enter Code shown in above Image*" variant="outlined" className={styles.enter_capche} value={enterCapche} onChange={(e) => setEnterCapche(e.currentTarget.value)} />
                    <p className={styles.placing_para}>You can pay via Cash/Card or UPI enabled app at the time of delivery.Ask your delivery executive for these options</p>
                    <Final />



                </div>
            </div>
        </div>
    )
}
