import React from 'react'
import { CartNavbar } from './CartNavbar'
import { ChoosePayment } from './ChoosePayment'
import { Offers } from './Offers'
import styles from "./payment.module.css"
import { PaymentTotal } from './PaymentTotal'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
export const Payment = () => {
    return (
        <div>
            <CartNavbar />
            <div className={styles.payment_mainDiv}>
                <div>

                    <Offers />
                    <ChoosePayment />
                    <div className={styles.gift_content}>
                        <CardGiftcardOutlinedIcon style={{ marginTop: "20px" }} /> <p className={styles.gift_content_para}>Have a Gift Card?</p>
                        <div className={styles.gift_content_div}>Apply Gift card</div>
                    </div>

                </div>
                <div className={styles.vertical}></div>
                <div>
                    <PaymentTotal />


                </div>
            </div>
            <div className={styles.img_div}>
                <div className={styles.img}>
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ssl.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-dc.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-nb.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-paypal.png" alt="img" />
                    <img height="35px" width="60px" src="https://constant.myntassets.com/checkout/assets/img/footer-bank-bhim.png" alt="img" />

                </div>
                <div className={styles.img_para}> Need Help? Contact Us</div>
            </div>
        </div>
    )
}
