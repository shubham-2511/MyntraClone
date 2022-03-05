import React from 'react'
import { CartNavbar } from './CartNavbar'
import styles from "./payment.module.css"

export const Payment = () => {
    return (
        <div className={styles.cart_mainDiv}>
            <CartNavbar />
        </div>
    )
}
