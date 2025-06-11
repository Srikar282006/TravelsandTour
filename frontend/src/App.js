import './App.css';
import {BrowserRouter  as Router,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Aboutus from './pages/Aboutus';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
         <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/cars" element={<Cars/>}/>
           <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
