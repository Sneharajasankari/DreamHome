import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Home from './Home';
import Houses from './Houses';
import Slide from './Slide';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Book from './Book';
import Shome from './Shome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Houses' element={<Houses />} />
        <Route path='/Slide' element={<Slide />} />
        <Route path='/About' element={<About/>}/>
         <Route path='/Contact' element={<Contact />} /> 
        <Route path='/Service' element={<Service/>}/>
        
        <Route path='/Book' element={<Book/>}/>
        <Route path='/Shome' element={<Shome/>}/>
        
         {/* Correct the import path */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
