import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#f5f1e8', minHeight: '100vh' }}>
          <Navbar />
          <main className="flex-grow pt-20" style={{ position: 'relative', zIndex: 10 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/despre" element={<About />} />
              <Route path="/educatie" element={<Education />} />
              <Route path="/proiecte" element={<Projects />} />
              <Route path="/hobbyuri" element={<Hobbies />} />
              <Route path="/galerie" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;

