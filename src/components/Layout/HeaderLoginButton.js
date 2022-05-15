import React from "react";
import classes from "./HeaderLoginButton.module.css";

function HeaderLoginButton() {
  return (
    <button className={classes.button}>
      <span>Giriş Yap</span>
    </button>
  );
}

export default HeaderLoginButton;
