import React, { useCallback, useState } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { Navbar } from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import ContactModal from './components/contactModal/ContactModal';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="main-container">
            <Navbar setIsVisible={setIsVisible}/>
            <div className="header">
            <Hero setIsVisible={setIsVisible}/>
            </div>
            <div className="main-content">
            <About />
            <Gallery />
            <Contact />
            <Footer />
            </div>

        { isVisible && <ContactModal setIsVisible={setIsVisible}/>}
            <Particles className='particles' options={particlesOptions} init={particlesInit}/>
        </div>
    );
}

export default App;
