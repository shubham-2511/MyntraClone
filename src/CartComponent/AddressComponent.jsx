import React, { useContext } from 'react'
import { AuthContext } from '../Logincomponent/AuthContext'
import styles from "./address.module.css"
import ModalUnstyledDemo from './Pincode'

export const AddressComponent = () => {
    const { address } = useContext(AuthContext)
    return (
        <div className={styles.address}>
            <h2 className={styles.address_heading}>Deliver to : {address}</h2>
            <ModalUnstyledDemo />
        </div>
    )
}
