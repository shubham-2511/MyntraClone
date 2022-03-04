import React, { useContext } from 'react'
import { CartNavbar } from './CartNavbar'
import styles from "./Cart.module.css"
import { AddressComponent } from './AddressComponent'
import { Offers } from './Offers'
import { Coupons } from './Coupons'
import { Checked } from './Checked'
import { AuthContext } from '../Logincomponent/AuthContext'
import { PlaceOrder } from './PlaceOrder'

export const Cart = () => {
    const { checked } = useContext(AuthContext)
    return (
        <div>
            <CartNavbar />
            <div className={styles.mainDiv}>
                <div>
                    <AddressComponent />
                    <Offers />
                    <Checked />
                </div>
                <div>
                    {(!checked) ? <Coupons /> : <PlaceOrder />}
                </div>
            </div>
        </div>
    )
}
