import {useState, useEffect} from 'react'
import {getBooks} from "./api.js"
import Card from './Card.js';
function Search() {
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const setNewBooks = async () => {
        let res = await getBooks();
        console.log(res);
        setBooks(res);
    };
    setNewBooks();
}, []);

useEffect(() =>{
setOutput([])
books.filter(val => {
  if(val.title.toLowerCase().includes(input.toLowerCase())){
    setOutput(output=> [...output, val])
  }else{
    console.log("Такой книги нет((((((")
  }
})

}, [input])


    return (
      <div className="Main">
        <h2>Search the books</h2>
        <input onChange={e=> setInput(e.target.value)} type="text" placeholder='Search'></input>
          <div className='ddd'>
            {output.map((el, index) => {return <Card key={index} book={el} />;})}
          </div>
      </div>
    );
  }
  
  export default Search;
  