"use client";
import React, { useState } from "react";
import CrossButton from "../components/CrossButton";
import RedButton from "../components/RedButton";
import GreyButtons from "../components/GreyButtons";
import Screen from "../components/Screen";
import axios from "axios";

const UserView: React.FC = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const fetchUser = async () => {
    setIsLoading(true);

    if (hasError) {
      setHasError(false);
    }

    try {
      const response = await axios.get("https://randomuser.me/api/");
      setUsers(response.data.results);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Screen isLoading={isLoading} users={users} hasError={hasError} />
      <CrossButton />
      <RedButton onClick={fetchUser} isLoading={isLoading} />
      <GreyButtons />
    </>
  );
};

export default UserView;
