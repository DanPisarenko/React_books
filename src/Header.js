import "./App.css"
import {useState, useEffect} from 'react'
import {getBooks} from "./api.js"
function Header() {
    return (
      <div className="Header">
        <a href="/"><h1>BookWorm</h1></a>
        <a href="/search">Search the books</a>
      </div>
    );
  }
  
  export default Header;
  