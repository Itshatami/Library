import { useState } from "react";
import { books } from "../constants/mockData";
import BookCard from "./BookCard";

function Books() {
  const [liked, setliked] = useState([]);
  const handleLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id);
      setliked(newLikedList);
    } else {
      setliked((liked) => [...liked, book]);
    }
  };
  return (
    <div>
      <div>
        {books.map((book) => (
          <BookCard key={book.id} data={book} handleLikedList={handleLikedList} />
        ))}
      </div>
          <div>{!! liked.length && (<p>liked books</p>) }</div>
    </div>
  );
}

export default Books;
