/* eslint-disable no-empty-pattern */
import { useEffect, useState } from "react";
import { getData } from "../utils/getData.js";
import Profile from "./components/Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";

const App = ({ }) => {

  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchUserData = async () => {
    try {
      await getData({ setUserData });
      setIsLoading(false);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // if (isLoading) {
  //   return <p>Loading...</p>
  // }


  return (
    <Routes>
      {/* <Route path='/' element={<placeholder />} /> */}
      <Route path="/profile" element={<Profile userData={userData} />} />
    </Routes>
  );
};
export default App;
