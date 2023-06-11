import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import View from './components/View';
import { useState } from 'react';

function App() {
  const [singleproduct, getSingleProduct] = useState(0);
  const [cartItems, additem] = useState(0)
 
  return (
    <>
    <Routes>
      <Route path='/landingPage' element={<LandingPage />}/>
      <Route path='/' element={<Home cartItems={cartItems} additem={additem} getSingleProduct={getSingleProduct}/>}/>
      <Route path='/details' element={<View cartItems={cartItems} additem={additem} singleproduct={singleproduct} />}/>
    </Routes>
  </>
  );
}

export default App;
