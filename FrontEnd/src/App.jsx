/* eslint-disable no-empty-pattern */
import Profile from "./components/Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";

const App = ({ }) => {
  return (
    <Routes>
      {/* <Route path='/' element={<placeholder />} /> */}
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
export default App;
