import React from "react";
import css from "./toolbar.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HambugerMenu from "../HamburgerMenu";

const Toolbar = props => (
  <header className={css.Toolbar}>
    <HambugerMenu toggleSidebar={props.toggleSidebar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);
export default Toolbar;
