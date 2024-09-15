import { useEffect, useState } from "react";
import "./App.css";
import getBooks from "../src/api";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const allBooks = await getBooks();
        setBooks(allBooks.results);
        console.log(allBooks.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <div> AMAZING BOOKS</div>
      {books.map((book, i) => {
        return (
          <ul key={i}>
            <div>Title: {book.title}</div>
            <div>
              Author:{" "}
              {book.authors.map((author) => {
                return author.name;
              })}
            </div>
            <div>
              Book themes:{" "}
              {book.bookshelves
                .filter((theme) => theme.startsWith("Browsing: "))
                .map((theme) => theme.replace("Browsing: ", ""))
                .join(", ")}
            </div>
            <div>Number of downloads: {book.download_count}</div>
          </ul>
        );
      })}
    </>
  );
}

export default App;
