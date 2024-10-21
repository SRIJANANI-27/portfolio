import React from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Me from "./components/Me";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technology from "./components/Technology";
import Achievements from './components/Acheivements';

function App() {
  return (
    <div className="overflow-x-hidden text-black antialiased selection:bg-cyan-100 selection:text-pink-900">
      {/* Soft Pastel Background Gradient */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,228,196,0.5),rgba(255,255,255,1))]">
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        {/* Navbar with shadow for a floating effect */}
        
          {/* <Navbar /> */}
       
        
      
          <Me />
          <About />
          <Technology />
          {/* <Experience /> */}
         
          <Achievements />
          <Project />
          <Contact />
          
        </div>
      
     
    
    </div>
  );
}

export default App;
