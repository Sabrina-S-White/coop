//Modules and css
import './App.css'
import { Routes, Route } from 'react-router-dom'

//Pages
import Header from './components/Header'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import MediaPage from './pages/MediaPage'
import RidePage from './pages/RidePage'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="media" element={<MediaPage />} />
        <Route path="ride" element={<RidePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
