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

  return <></>;
}

export default App;
