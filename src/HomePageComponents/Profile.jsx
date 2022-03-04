import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './profile.module.css'

export const Profile = ({visible}) => {

  const navigate = useNavigate();

  const handelLogin = () => {
    console.log("Login");
    navigate('/login');
  }

  const [mouseOver, setMouseOver] = useState(false)
  return (
    <div className={visible || mouseOver ? styles.container: styles.displayNonde} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} >
        <div className={styles.heading}>Welcome</div>
        <div className={styles.head}>To access account and manage orders</div>
        <div className={styles.buttonContainer}>

        <button className={styles.button} onClick={() => handelLogin()}>LOGIN / SIGNUP</button>
        </div>
        <ul>
            <li className={styles.listItem}>Orders</li>
            <li className={styles.listItem}>Wishlist</li>
            <li className={styles.listItem}>Gift Cards</li>
            <li className={styles.listItem}>Contact Us</li>
            <li className={styles.special}>Myntra Insider</li>
            <li className={styles.listItem}>Myntra Credit</li>
            <li className={styles.listItem}>Coupons</li>
            <li className={styles.listItem}>Saved Cards</li>
            <li className={styles.listItem}>Saved Addresses</li>
        </ul>
    </div>
  )
}
