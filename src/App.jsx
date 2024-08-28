import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
      <>
      <div>
          
      <Navbar/>
      <Home/>
      <About/> 
      <Projects/>
      <Experience/>
      <Resume/>
      <Contacts/>
      <Footer/>

      </div>
      <Toaster/>
      
      </>
  );
}

export default App;
