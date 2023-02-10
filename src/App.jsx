
//Sections
import './App.css';
import About from './Sections/About/About';
import Experience from './Sections/Experience/Experience';
import Home from './Sections/Home/Home';
import Work from './Sections/Work/Work';
import Contact from './Sections/Contact/Contact';

//Components 
import Navbar from './Components/Navbar/Navbar'
import ContactBar from './Components/ContactBar/ContactBar'
import Footer from './Components/Footer/Footer'


import Fade from 'react-reveal/Fade';

function App() {
  return (
    <main className="main">
    <Navbar />

    <div className='app_section_container'>

    <Fade left>
      <Home />
    </Fade> 
    <Fade top>
    <About />
    </Fade>
    <Fade top>
    <Experience />
    </Fade>
    <Fade top>
    <Work />
    </Fade>
    <Fade top>
    <Contact />
    </Fade>
    
      

    </div>
    <ContactBar />
    <Footer />

      
    </main>
  );
}

export default App;
