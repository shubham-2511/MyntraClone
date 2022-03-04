import React, { useState } from "react";
import styles from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [item, setItem] = useState("");
  const style = {
    color: "rgb(151, 148, 148)",
    padding: "6px 14px",
    cursor: "pointer",
  };

  const iconStyle = {
    color: "rgb(122, 122, 122)",
  };

  return (
    <div className={styles.navbar}>
      <img
        className={styles.logo}
        src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"
        alt="logo"
      />
      <div className={styles.link}>MEN</div>
      <div className={styles.link}>WOMEN</div>
      <div className={styles.link}>KIDS</div>
      <div className={styles.link}>HOME & LIVING</div>
      <div className={styles.link}>BEAUTY</div>
      <div className={styles.link}>STUDIO</div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <SearchIcon sx={style} />
          <input
            className={styles.input}
            value={item}
            type="text"
            onChange={(e) => setItem(e.currentTarget.value)}
            placeholder="Search for products, brands and more"
          />
        </div>
      </div>
      <div className={styles.iconDiv}>
        <PersonOutlineIcon sx={iconStyle} />
        <div className={styles.text}>
          <Link to="/login">Profile</Link>
        </div>
      </div>
      <div className={styles.iconDiv}>
        <FavoriteBorderIcon sx={iconStyle} />
        <div className={styles.text}>Wishlist</div>
      </div>
      <div className={styles.iconDiv}>
        <ContentPasteIcon sx={iconStyle} />
        <div className={styles.text}>Bag</div>
      </div>
      
    </div>
  );
};

export default Navbar;
