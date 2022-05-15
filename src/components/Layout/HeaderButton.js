import React from "react";
import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

function HeaderButton(props) {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Sepetim</span>
      <span className={classes.badge}>5</span>
    </button>
  );
}

export default HeaderButton;
