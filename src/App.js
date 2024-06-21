import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path='/Services' Component={Services}/> 
          <Route path='/Products' Component={Products}/> 
          <Route path='/sign-up' Component={SignUp}/> 
          {/* Define more routes here */}
        </Routes>
      </Router>
    </>
  );
}

export default App;