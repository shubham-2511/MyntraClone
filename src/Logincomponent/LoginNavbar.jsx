import React, { useState } from "react";
import styles from "./loginnavbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  const [item, setItem] = useState("");
  const style = {
    color: "rgb(151, 148, 148)",
    padding: "6px 14px",
    cursor: "pointer",
  };

  const iconStyle = {
    color: "rgb(122, 122, 122)",
  };

  const handelSearch = (e) => {
    setItem("");
  }

  return (
    <div className={styles.login_navbar}>
      <Link to="/"><img
        className={styles.login_navbar_logo}
        src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg?im=FitAndFill,width=1200,height=900"
        alt="logo"
      /></Link>
      <Link className={styles.login_navbar_link} to="/">MEN</Link>
      <Link className={styles.login_navbar_link} to="/">WOMEN</Link>
      <Link className={styles.login_navbar_link} to="/">KIDS</Link>
      <Link className={styles.login_navbar_link} to="/">HOME LIVING</Link>
      <Link className={styles.login_navbar_link} to="/">STUDIO</Link>
      <div className={styles.login_nabbar_searchContainer}>
        <div className={styles.login_navbar_search}>
          <SearchIcon sx={style} onClick={(e) => handelSearch(e)} />
          <input
            className={styles.login_navbar_input}
            value={item}
            type="text"
            onChange={(e) => setItem(e.currentTarget.value)}
            placeholder="Search for products, brands and more"
          />
        </div>
      </div>
      <div className={styles.login_navbar_icondiv}>
        <div>
          <FavoriteBorderIcon sx={iconStyle} fontSize="15" />
          <Link className={styles.login_navbar_text} to="/emptywishlist">Wishlist</Link>
        </div>
        <div>
          <ContentPasteIcon sx={iconStyle} fontSize="15" />
          <Link className={styles.login_navbar_text} to="/emptycart">Bag</Link>
        </div>


      </div>
    </div>
  );
};

export default LoginNavbar;
