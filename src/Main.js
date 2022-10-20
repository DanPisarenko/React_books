import {useState, useEffect} from 'react'
import {getBooks} from "./api.js"
import Card from './Card.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllBooks from './AllBooks.js';
import Search from './Search.js';
import {FullBook} from "./FullBook"
function Main() {
 

    return (
      <div className="Main">
      <Router>
        <Routes>
          <Route path='/' element={<AllBooks/>}></Route>
          <Route path='/search' element={<Search/>}></Route>
          <Route path='/book/:id' element={<FullBook/>}></Route>
        </Routes>
      </Router>
      </div>
    );
  }
  
  export default Main;
  