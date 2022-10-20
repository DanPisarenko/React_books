import "./App.css"
function Card(props) {
    return (
      <div className="Card">
        <img src={props.book.image} alt="" width="240"></img>
            <h3>{props.book.title}</h3>
            <span>{props.book.author}</span>
            <span>ISBN: {props.book.isbn}</span>
            <a className="btn_sm" href="#">See More</a>

      </div>
    );
  }
  
  export default Card;
  