import React from "react";
import { User } from "../Types/User";
import styles from "./styles/screenContent.module.css";

interface ScreenContentProps {
  isLoading: boolean;
  hasError: boolean;
  users: User[];
}

const ScreenContent: React.FC<ScreenContentProps> = ({
  isLoading,
  hasError,
  users,
}) => {
  const hasUser = users.length > 0;

  const userData = users.map((u) => {
    return (
      <>
        <p key={u.name.title}>
          <span className={styles.bold}>Title: </span>
          {u.name.title}
        </p>
        <p key={u.name.first}>
          <span className={styles.bold}>Firstname: </span>
          {u.name.first}
        </p>
        <p key={u.name.last}>
          <span className={styles.bold}>Lastname: </span>
          {u.name.last}
        </p>
        <p key={u.gender}>
          <span className={styles.bold}>Gender: </span>
          {u.gender}
        </p>
        <p key={u.location.city}>
          <span className={styles.bold}>Location: </span>
          {u.location.city}
        </p>
        <p key={u.phone}>
          <span className={styles.bold}>Phone: </span>
          {u.phone}
        </p>
        <p key={u.email}>
          <span className={styles.bold}>Email: </span>
          {u.email}
        </p>
        <p key={u.cell}>
          <span className={styles.bold}>Cell: </span>
          {u.cell}
        </p>
        <p key={u.id.name}>
          <span className={styles.bold}>Name: </span>
          {u.id.name}
        </p>
      </>
    );
  });

  const content = () => {
    if (isLoading) {
      return <h3>isLoading...</h3>;
    }
    if (hasError) {
      return <h3>Something went wrong, please try again.</h3>;
    }
    if (hasUser) {
      return (
        <div key={"key"} className={styles.userTextContainer}>
          <h3>Random user:</h3>
          {userData}
        </div>
      );
    }
    return (
      <>
        <h1 className={styles.header}>Welcome person</h1>
        <h3 className={styles.header}>Lets find you a random user</h3>
      </>
    );
  };

  return <>{content()}</>;
};

export default ScreenContent;
