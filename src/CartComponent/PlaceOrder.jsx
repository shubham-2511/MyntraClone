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
                        <p className={styles.gifting_childdiv_para2}>Gift wrap and personalised message on card, Only for <CurrencyRupeeIcon fontSize='7' style={{ marginTop: "6px", marginRight: "0px" }} />25</p>
                        <p className={styles.gifting_childdiv_para3}>ADD GIFT WRAP</p>
                    </div>

                </div>
                <p className={styles.price_para}>PRICE DETAILS (0 Item)</p>
                <div className={styles.price_para_div}>
                    <div className={styles.price_detail}>
                        <p>Total MRP</p>
                        <p style={{ textAlign: "right" }}><CurrencyRupeeIcon style={{ width: "12", height: "13", marginTop: "1px" }} />6,293</p>
                    </div>
                    <div className={styles.price_detail}>
                        <p>Discount on MRP</p>
                        <p style={{ textAlign: "right", color: "#03a685" }}>-<CurrencyRupeeIcon style={{ width: "12", height: "13", marginTop: "1px" }} />6,293</p>
                    </div>
                    <div className={styles.price_detail}>
                        <p>Coupon Discount</p>
                        <p style={{ textAlign: "right", color: "#ff3f6c" }}>Apply Coupon</p>
                    </div>
                    <div className={styles.price_detail}>
                        <p>Convinience Fee</p>
                        <p style={{ textAlign: "right" }}><CurrencyRupeeIcon style={{ width: "12", height: "13", marginTop: "1px" }} />99 <span style={{ textDecoration: "none", color: "#03a685" }}>FREE</span></p>
                    </div>
                    <hr className={styles.horizontal}></hr>
                    <div className={styles.total_price_detail}>
                        <p>TOTAL AMOUNT</p>
                        <p style={{ textAlign: "right" }}><CurrencyRupeeIcon style={{ width: "12", height: "13", marginTop: "1px" }} />6,293</p>
                    </div>
                </div>
                <button className={styles.final_place_order}>PLACE ORDER</button>
            </div>
        </div >
    )
}
