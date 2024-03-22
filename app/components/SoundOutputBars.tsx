import React from "react";
import styles from "./styles/soundOutputBars.module.css";

const VolumeBars: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default VolumeBars;
