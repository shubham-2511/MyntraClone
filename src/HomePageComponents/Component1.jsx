import React from 'react';
import styles from './component1.module.css';

export const Component1 = () => {
  return (
    <div>
        <img className={styles.image1} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/31200885-2552-4f5a-8a92-be464905ce181646151056720-MFH-Desktop-Banner-.jpg" alt="carausal" />
        <img className={styles.image1} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/5/72136cd8-6c52-4e7e-b8fa-9b42ea659fa01646450618634-DK-flat-4991-logo.jpg" alt="photo1" />
        <img className={styles.image1} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/3/225e6758-5916-45eb-a7b2-5c5053bcf7c71646288232412-Sectional-Header-----3.jpg" alt="photo1" />
    </div>
  )
}
