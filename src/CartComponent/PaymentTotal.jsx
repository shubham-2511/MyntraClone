import React from 'react'
import styles from "./placeorder.module.css"
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useSelector } from 'react-redux';

export const PaymentTotal = () => {

    const { cart } = useSelector((state) => ({
        cart: state.cart.cart,
        mrp: state.cart.mrp,
        discount: state.cart.discount,
    }));
    //MRP
    let priceMRP = cart.map((item) => item.price.mrp);
    let add = priceMRP.reduce((prev, second) => prev + second, 0);
    //SP
    let priceDisc = cart.map((item) => item.price.mrp - item.price.sp);
    let final = priceDisc.reduce((prev, second) => prev + second, 0);
    return (
        <div>
            <p className={styles.price_para}>PRICE DETAILS ({cart.length} Item)</p>
            <div className={styles.price_para_div}>
                <div className={styles.price_detail}>
                    <p>Total MRP</p>
                    <p style={{ textAlign: "right" }}>
                        <CurrencyRupeeIcon
                            style={{ width: "12", height: "13", marginTop: "1px" }}
                        />
                        {add}
                    </p>
                </div>
                <div className={styles.price_detail}>
                    <p>Discount on MRP</p>
                    <p style={{ textAlign: "right", color: "#03a685" }}>
                        -
                        <CurrencyRupeeIcon
                            style={{ width: "12", height: "13", marginTop: "1px" }}
                        />
                        {final}
                    </p>
                </div>
                <div className={styles.price_detail}>
                    <p>Coupon Discount</p>
                    <p style={{ textAlign: "right", color: "#ff3f6c" }}>Apply Coupon</p>
                </div>
                <div className={styles.price_detail}>
                    <p>Convinience Fee</p>
                    <p style={{ textAlign: "right" }}>
                        <CurrencyRupeeIcon
                            style={{ width: "12", height: "13", marginTop: "1px" }}
                        />
                        <span
                            style={{
                                textDecoration: "line-through 2px ",
                                marginRight: "3px",
                            }}
                        >
                            99
                        </span>
                        <span style={{ textDecoration: "none", color: "#03a685" }}>
                            FREE
                        </span>
                    </p>
                </div>

                <hr className={styles.horizontal}></hr>
                <div className={styles.total_price_detail}>
                    <p>TOTAL AMOUNT</p>
                    <p style={{ textAlign: "right" }}>
                        <CurrencyRupeeIcon
                            style={{ width: "12", height: "13", marginTop: "1px" }}
                        />
                        {add - final}
                    </p>
                </div>
            </div >
        </div>
    )
}
