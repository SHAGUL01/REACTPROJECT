
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Laptop from './components/Laptop/Laptop';
import Mobile from "./components/Mobile/Mobile";
import Tab from './components/Tab/Tab';
import Watchs from './components/Watchs/Watchs';
import Home from './components/Home/Home';
import Sign_In from './components/Sign/Sign_in';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Mobile" element={<Mobile/>}/>
        <Route path="/Laptop" element={<Laptop/>}/>
        <Route path="/Tab" element={<Tab/>}/>
        <Route path="/Watchs" element={<Watchs/>}/>
        <Route path="/Sign_In" element={<Sign_In/>}/>
      </Routes>
     
      </BrowserRouter>
          <Footer/>
    </div>
      
    
  );
}

export default App;
