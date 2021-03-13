import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";
import HanburgerMenu from "../HamburgerMenu";
const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <HanburgerMenu toggleSidebar={props.toggleSidebar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      {" "}
      <Menu />
    </nav>
  </header>
);
export default Toolbar;
