import React from 'react'
import styles from "./placeorder.module.css"
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export const PlaceOrder = () => {
    return (
        <div className={styles.main_div}>
            <h4 className={styles.heading1}>COUPONS</h4>
            <div className={styles.apply_div}>
                <LocalOfferOutlinedIcon style={{ margin: "14px 4px 0px 6px" }} /> <span className={styles.apply_heading}>Apply Coupons</span>
                <button className={styles.apply_button}>APPLY</button>

            </div>
            <hr className={styles.horizontal} />
            <div>
                <p className={styles.gifting_heading}>GIFTING AND PERSONALIZATION</p>
                <div className={styles.gifting_div}>
                    <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" height="100vh" alt='' />
                    <div className={styles.gifting_childdiv}>
                        <p className={styles.gifting_childdiv_para1}>Buying for a loved ones?</p>
                        <p className={styles.gifting_childdiv_para2}>Gift wrap and personalised message on card, Only for <CurrencyRupeeIcon fontSize='7px' style={{ maxHeight: "12px" }} /> 25 </p>
                        <p className={styles.gifting_childdiv_para3}>ADD GIFT WRAP</p>
                    </div>

                </div>
                <p className={styles.price_para}>PRICE DETAILS (0 Item)</p>
                <div>
                    <div>
                        <span>Total MRP</span>
                        <span><CurrencyRupeeIcon />6,293</span>
                    </div>
                    <div>
                        <span>Discount on MRP</span>
                        <span><CurrencyRupeeIcon />6,293</span>
                    </div>
                    <div>
                        <span>Coupon Discount</span>
                        <span>Apply Coupon</span>
                    </div>
                    <div>
                        <span>Discount on MRP</span>
                        <span><CurrencyRupeeIcon />6,293</span>
                    </div>
                    <div>
                        <span>Discount on MRP</span>
                        <span><CurrencyRupeeIcon />6,293</span>
                    </div>
                </div>
            </div>
        </div >
    )
}
