import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../Store/AuthReducer/actions';
import styles from './profile.module.css'

export const Profile = ({visible}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelLogin = () => {
    navigate('/login');
  }

  const handelLogout = () => {
    dispatch(logoutUser());
  }

  const isLoggedIn = useSelector(state => state.auth.status);

  const [mouseOver, setMouseOver] = useState(false)
  return (
    <div className={visible || mouseOver ? styles.container: styles.displayNonde} onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)} >

      {
        isLoggedIn ?
        <>
        <div className={styles.heading}>Hello Shubham</div>
        <div className={styles.head}>8527184201</div>
        </> :
        <>
        <div className={styles.heading}>Welcome</div>
        <div className={styles.head}>To access account and manage orders</div>
        <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => handelLogin()}>LOGIN / SIGNUP</button>
        </div>
        </>
      }

        <ul>
            <li className={styles.listItem}>Orders</li>
            <li className={styles.listItem}>Wishlist</li>
            <li className={styles.listItem}>Gift Cards</li>
            <li className={styles.listItem}>Contact Us</li>
            <li className={styles.special}>Myntra Insider <i className={styles.new}>New</i></li>
            <li className={styles.listItem}>Myntra Credit</li>
            <li className={styles.listItem}>Coupons</li>
            <li className={styles.listItem}>Saved Cards</li>
            <li className={styles.listItem}>Saved Addresses</li>
            <li className={styles.listItem}></li>

            {
              isLoggedIn && <li className={styles.listItem} onClick={handelLogout}>Logout</li>
            }
            
        </ul>
    </div>
  )
}
