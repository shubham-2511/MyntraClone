import React from 'react'
import styles from "./coupons.module.css"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const Coupons = () => {
    return (
        <div className={styles.main_div}>
            <h4 className={styles.heading1}>COUPONS</h4>
            <div className={styles.apply_div}>
                <LocalOfferOutlinedIcon style={{ margin: "14px 4px 0px 6px" }} /> <span className={styles.apply_heading}>Apply Coupons</span>
                <button className={styles.apply_button}>APPLY</button>

            </div>
            <hr className={styles.horizontal} />
            <p className={styles.price_para}>PRICE DETAILS (0 Item)</p>
            <div className={styles.total}>
                <p className={styles.total_para}>Total MRP</p>
                <div className={styles.currency}><CurrencyRupeeIcon fontSize="5px" /> <span className={styles.price0}>0</span></div>

            </div>
            <hr className={styles.horizontal} />
            <div className={styles.total_price}>
                <h3>TOTAL AMOUNT</h3>
                <div className={styles.currency_total}><CurrencyRupeeIcon fontSize='20px' /> <h3>0</h3></div>
            </div>
            <button className={styles.place_order}>PLACE ORDER</button>
        </div>
    )
}
