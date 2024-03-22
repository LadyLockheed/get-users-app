import React from "react";
import styles from "./styles/redButton.module.css";

interface RedButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const RedButton: React.FC<RedButtonProps> = ({ onClick, isLoading }) => {
  return (
    <div className={styles.redButtonContainer}>
      <button
        className={styles.redButton}
        onClick={() => onClick()}
        disabled={isLoading}
      ></button>
      <h5 className={styles.getUserText}>GET USER</h5>
    </div>
  );
};

export default RedButton;
