import { Experience } from './components';
import { getData } from "./utils/getData";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = ({ }) => {

  const [experience, setExperience] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      await getData({ setExperience });
      setIsLoading(false);
    };
    fetchArticles();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <Router>
      <Routes>
        <Route path='/profile' element={<Experience experience={experience} />} />
      </Routes>
    </Router>
  )
}
export default App;