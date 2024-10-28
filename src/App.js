import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import AIComponent from './components/AIComponent';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Header />
            <Home />
            <Projects />
            <About />
            <AIComponent />
            <Footer />
        </div>
    );
}

export default App;
