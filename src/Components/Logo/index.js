import React from "react";
import css from "./Logo.module.css";
import logoImage from "../../assets/images/burger-logo.png";
const Logo = () => {
  return (
    <div className={css.Logo}>
      <img src={logoImage} alt="" />
    </div>
  );
};
export default Logo;
