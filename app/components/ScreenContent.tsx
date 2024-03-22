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
  const userData = users.map((u, i) => {
    return (
      <>
        <p key={u.name.title + i}>
          <span className={styles.bold}>Title: </span>
          {u.name.title}
        </p>
        <p key={u.name.first + i}>
          <span className={styles.bold}>Firstname: </span>
          {u.name.first}
        </p>
        <p key={u.name.last + i}>
          <span className={styles.bold}>Lastname: </span>
          {u.name.last}
        </p>
        <p key={u.gender + i}>
          <span className={styles.bold}>Gender: </span>
          {u.gender}
        </p>
        <p key={u.location.street.name + i}>
          <span className={styles.bold}>Street: </span>
          {u.location.street.name}
        </p>
        <p key={u.location.city + i}>
          <span className={styles.bold}>City: </span>
          {u.location.city}
        </p>
        <p key={u.location.country + i}>
          <span className={styles.bold}>Country: </span>
          {u.location.country}
        </p>
        <p key={u.phone + i}>
          <span className={styles.bold}>Phone: </span>
          {u.phone}
        </p>
        <p key={u.email + i}>
          <span className={styles.bold}>Email: </span>
          {u.email}
        </p>
        <p key={u.cell + i}>
          <span className={styles.bold}>Cell: </span>
          {u.cell}
        </p>
        <p key={u.nat + i}>
          <span className={styles.bold}>Nationality: </span>
          {u.nat}
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
