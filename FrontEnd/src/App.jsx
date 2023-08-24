/* eslint-disable no-empty-pattern */
import { useEffect, useState } from "react";
import { getData } from "../utils/dataHandlers.js";
import Profile from "./components/Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";

const App = ({ }) => {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await getData();
      setUserData(response);
      setIsLoading(false);
    } catch (error) {
      return error;
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Routes>
      <Route path="/" element={<Profile userData={userData} />} />
      <Route path="/profile" element={<Profile userData={userData} />} />
    </Routes>
  );
};
export default App;
