/* eslint-disable no-empty-pattern */
import Profile from "./components/Profile/Profile.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = ({}) => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<placeholder />} /> */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};
export default App;
