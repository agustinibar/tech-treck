import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {


  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
