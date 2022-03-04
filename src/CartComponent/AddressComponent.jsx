import React from 'react'
import styles from "./address.module.css"
import ModalUnstyledDemo from './Pincode'

export const AddressComponent = () => {
    return (
        <div className={styles.address}>
            <h2 className={styles.heading}>Deliver to :250601</h2>
            <ModalUnstyledDemo />
        </div>
    )
}
