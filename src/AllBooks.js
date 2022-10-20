import {useState, useEffect} from 'react'
import {getBooks} from "./api.js"
import Card from './Card.js';
function AllBooks() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const setNewBooks = async () => {
        let res = await getBooks();
        console.log(res);
        setBooks(res);
    };
    setNewBooks();
}, []);




    return (
      <div className="Main">
          <div className='ddd'>
            {books.map((el, index) => {return <Card key={index} book={el} />;})}
          </div>
      </div>
    );
  }
  
  export default AllBooks;
  