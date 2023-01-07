import './App.css';
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Media from './pages/Media'
import Ride from './pages/Ride'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='contact' element={<Contact />}/>
      <Route path='about' element={<About />}/>
      <Route path='media' element={<Media />}/>
      <Route path='ride' element={<Ride />}/>
        </Routes>
    </div>
  );
}

export default App;
