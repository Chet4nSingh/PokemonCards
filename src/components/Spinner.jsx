import React from "react";
import classes from "../css/Spinner.module.css";

function Spinner() {
  return (
    <main className="h-screen w-full grid place-items-center">
      <div className={classes.boxes}>
        <div className={classes.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classes.box}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  );
}

export default Spinner;
