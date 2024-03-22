import React from "react";
import styles from "./styles/onScreen.module.css";
import ScreenContent from "./ScreenContent";
import { User } from "../Types/User";

interface OnScreenProps {
  isLoading: boolean;
  users: User[];
  hasError: boolean;
}

const OnScreen: React.FC<OnScreenProps> = ({ isLoading, users, hasError }) => {
  const screenClassName = `${styles.screen} ${users.length !== 0 ? styles.scrollbar : ""}`;

  return (
    <div className={styles.outerFrame}>
      <div className={screenClassName}>
        <ScreenContent
          isLoading={isLoading}
          hasError={hasError}
          users={users}
        />
      </div>
    </div>
  );
};

export default OnScreen;
