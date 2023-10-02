import React from "react";
import classes from "./Subtitle.module.css";

export default function Subtitle(props) {
  return <h2 className={classes.Container}>{props.children}</h2>;
}
