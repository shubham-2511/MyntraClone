import React from 'react';
import styles from './component6.module.css';
import { Heading } from './Heading';

export const Component6 = () => {
  return (
    <>
    <Heading title="MYNTRA LUXE" />
    <div className={styles.container}> 
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/9b74665b-4512-44aa-a0b2-f7758e5eeb661637055308450-WP-PhaseEight.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/9a1595d0-5d98-435d-be8c-b86597f068bf1637055308456-WP-Swarovski.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/77820f04-69d6-476a-b12b-c53385c4c1dc1637055409214-MP-Farah.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/dab46379-24d2-4825-a1d8-ab35da877cf81637055409223-MP-HUGOBoss.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/90da2fc5-16d3-4efd-baaa-f7019311c6351637054602799-HP-Tissot.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/11/16/da3e7c00-2415-4696-a79d-8606628b82ca1637054602783-HP-POLORalphLauren.jpg" alt="photo-1" />
    </div>
    </>
  )
}
