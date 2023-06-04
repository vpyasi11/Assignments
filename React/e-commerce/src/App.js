import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import View from './components/View';

function App() {
  return (
    <>
    <Routes>
      <Route path='/landingPage' element={<LandingPage/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<View/>}/>
    </Routes>
  </>
  );
}

export default App;
