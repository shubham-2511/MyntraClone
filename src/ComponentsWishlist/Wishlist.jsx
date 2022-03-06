import React, {useState, useEffect} from 'react'
import Navbar from '../HomePageComponents/Navbar'
import { WishListComponent } from './WishlistComponent';
import styles from './wishlist.module.css';
import { useSelector } from 'react-redux';


export const Wishlist = () => {

    const kurti = useSelector(state => state.wishlist);

    


      const style = {
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        margin: "40px 80px",
        justifyContent: "space-between"
      }


  return (
    <div>
        <Navbar />
        <p className={styles.para}><span className={styles.paraFirst}>My Wishlist</span> {kurti.length} items</p>
        <div style={style}>
        {kurti.map((item) => (
          <div key={item.id}>
            <WishListComponent {...item} />
          </div>
        ))}
      </div>
    </div>
  )
}
