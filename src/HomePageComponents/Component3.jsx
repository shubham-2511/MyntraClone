import React from "react";
import { Heading } from "./Heading";
import styles from "./component3.module.css";

const Component3 = () => {
  return (
    <>
      <Heading title="BIGGEST DEALS ON TOP BRANDS" />
      <div className={styles.container}>
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/6e0a9fa0-9e8d-4c29-9250-995c9f1ba9331605363273176-Home---U.S.-Polo-Assn..jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/e72c82f2-cfd5-4f9a-b1b0-ba9e2b3e51251598892519506-W.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/64ecc170-58af-473f-8144-b1639895a8291598892519457-Veromodo.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/af31285e-f6a3-426e-bbea-0aedef9da17c1598892377537-Tommy-Hilfiger.jpg" alt="photo-1" />
      </div>
      <div className={styles.container2}>
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/9/4/e6c7a718-acc0-4aa6-b04c-470ab139d66c1599230080722-F21--4-.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/14/5544cd64-d95b-461d-802a-8025fdfeb3331605363272844-Home---Nike.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/8d5afb84-a464-40af-9971-2e9f0827e9b71598892377591-UCB.jpg" alt="photo-1" />
        <img className={styles.image} src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/31/581e2bf6-6d47-4a4b-a11f-43200dc9c6791598892519362-Puma.jpg" alt="photo-1" />
      </div>
    </>
  );
};

export default Component3;
