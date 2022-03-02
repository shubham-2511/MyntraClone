import React from 'react';
import styles from './component2.module.css';
import { Heading } from './Heading';

export const Component2 = () => {
  return (
    <>
    <Heading title="DEALS OF THE DAY" />
    <div className={styles.container}> 
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/44e72f6f-9d21-440e-9ded-6bb71f220c891646135587782-Clinique--3-.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/49562dfe-924f-48fb-b7ce-aee92c5eee091646135712015-Workwear--3-.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/13c61da6-c540-466f-9256-35571755d65c1646135735423-Kurtas---Sets--5-.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/a0b32b07-6b7f-41a9-8264-2f2c2ffe594e1646135760470-Myntra-Unique-T-Shirts.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/1/f71d74c5-ee2a-433a-ba73-37e9227fc2031646135789237-Footwear--35-.jpg" alt="photo-1" />
    </div>
    </>
  )
}
