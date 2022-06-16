import './App.css';
import Carasoul from './components/Carasoul';
import Navbar from './components/Navbar';
import Student from './pages/Student';
import {
  BrowserRouter as Router,
  Routes,
  Route} from 'react-router-dom';
import Staff from './pages/Staff';
import Home from './pages/Home';
import Faculty from './pages/Faculty';
import Footer from './components/Footer';
function App() {
  document.body.style.backgroundColor = "#CAFAFE";
  let categoriesList = [
    "Student",
    "Staff",
    "Faculty"
  ];
  return (
    <>  
      <Router>
      <Navbar categoriesList={categoriesList}/>
        <Routes>
          <Route path="Student" element={<Student/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="Staff"   element={<Staff/>}/>
          <Route path="Faculty" element={<Faculty/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
