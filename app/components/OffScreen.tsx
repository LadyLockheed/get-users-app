import React from "react";
import styles from "./styles/offScreen.module.css";

const OffScreen: React.FC = () => {
  return (
    <div className={styles.outerFrame}>
      <div className={styles.screen}></div>
    </div>
  );
};

export default OffScreen;
