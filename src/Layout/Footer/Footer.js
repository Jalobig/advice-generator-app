import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <p className={classes.attribution}>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noreferrer"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/Jalobig" rel="noreferrer" target="_blank">
          Jason Alexis
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
