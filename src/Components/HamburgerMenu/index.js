import React from "react";
import css from "./HambugerMenu.module.css";

const HambugerMenu = props => {
  return (
    <div onClick={props.toggleSidebar} className={css.HambugerMenu}>
      <div className={css.HambugerMenuItem}></div>
      <div className={css.HambugerMenuItem}></div>
      <div className={css.HambugerMenuItem}></div>
    </div>
  );
};
export default HambugerMenu;
