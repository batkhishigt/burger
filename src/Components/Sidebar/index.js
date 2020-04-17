import React from "react";
import css from "./Sidebar.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import Shadow from "../General/Shadow";

const Sidebar = props => {
  return (
    <div>
      <Shadow show={props.show} onClick={props.toggleSidebar} />
      <div
        className={[css.Sidebar, props.show ? css.Open : css.Close].join(" ")}
      >
        <div className={css.Logo}>
          <Logo />
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default Sidebar;
