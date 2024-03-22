import React from "react";
import styles from "./styles/gameButtons.module.css";

interface GameButtonsProps {
  onClick: () => void;
  isLoading: boolean;
}

const GameButtons: React.FC<GameButtonsProps> = ({ onClick, isLoading }) => {
  return (
    <div className={styles.gameButtonsContainer}>
      <button
        className={styles.gameButtons}
        onClick={() => onClick()}
        disabled={isLoading}
      ></button>
      <h5 className={styles.getUserText}>GET USER</h5>
    </div>
  );
};

export default GameButtons;
