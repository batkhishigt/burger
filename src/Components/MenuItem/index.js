import React from "react";
import css from "./MenuItem.module.css";
import { NavLink } from "react-router-dom";

const MenuItem = props => {
  return (
    <li className={css.MenuItem}>
      <NavLink exact={props.exact} activeClassName={css.Active} to={props.link}>
        {props.children}
      </NavLink>
    </li>
  );
};
export default MenuItem;
