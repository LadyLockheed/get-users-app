import React from "react";
import styles from "./styles/screen.module.css";
import ScreenContent from "./ScreenContent";
import { User } from "../Types/User";

interface ScreenProps {
  isLoading: boolean;
  users: User[];
  hasError: boolean;
}

const Screen: React.FC<ScreenProps> = ({ isLoading, users, hasError }) => {
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

export default Screen;
