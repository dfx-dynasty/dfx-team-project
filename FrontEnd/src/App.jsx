/* eslint-disable no-empty-pattern */
import Experience from './components/Experience.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = ({ }) => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Experience />} />
        <Route path='/profile' element={<Experience />} />
      </Routes>
    </Router>
  )
}
export default App;