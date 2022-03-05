import React, { useState } from "react";
import styles from "./navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { Profile } from "./Profile";
import PopupComponent from "./PopupComponent";
import { useNavigate } from 'react-router-dom';


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

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const handelSearch = (e) => {
    setItem("");
  }

  const goToWishlist = (e) => {
    navigate("/wishlist");
  }

  return (
    <>
    <div className={styles.navbar}>
      <img
        className={styles.logo}
        src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"
        alt="logo"
      />
      <div className={styles.link} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>MEN</div>
      <div className={styles.link} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>WOMEN</div>
      <div className={styles.link} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>KIDS</div>
      <div className={styles.link} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>HOME & LIVING</div>
      <div className={styles.link} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>BEAUTY</div>
      <div className={styles.link} onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>STUDIO</div>
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <SearchIcon sx={style} onClick={(e) => handelSearch(e)} />
          <input
            className={styles.input}
            value={item}
            type="text"
            onChange={(e) => setItem(e.currentTarget.value)}
            placeholder="Search for products, brands and more"
          />
        </div>
      </div>
      <div className={styles.iconDiv} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
        <PersonOutlineIcon sx={iconStyle} />
        <div className={styles.text}>
          <div>Profile</div>
        </div>
      </div>
      <div onClick={() => goToWishlist()} className={styles.iconDiv1}>
        <FavoriteBorderIcon sx={iconStyle} />
        <div className={styles.text}>Wishlist</div>
      </div>
      <div className={styles.iconDiv1}>
        <ContentPasteIcon sx={iconStyle} />
        <div className={styles.text}>Bag</div>
      </div>
      
    </div>
    <Profile visible={visible} />
    <PopupComponent isVisible={isVisible} />
    </>
  );
};

export default Navbar;
