"use client";
import React, { useState } from "react";
import DirectionalPad from "../components/DirectionalPad";
import GameButtons from "../components/GameButtons";
import SelectAndStartButtons from "../components/SelectAndStartButtons";
import OnScreen from "../components/OnScreen";
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
      <OnScreen isLoading={isLoading} users={users} hasError={hasError} />
      <DirectionalPad />
      <GameButtons onClick={fetchUser} isLoading={isLoading} />
      <SelectAndStartButtons />
    </>
  );
};

export default UserView;
