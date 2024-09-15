import { useEffect, useState } from "react";
import "./App.css";
import getBooks from "../src/api";
import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

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
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {books.map((book, i) => {
          return (
            <Card
              sx={{
                height: "100%",
                width: "70%",
                margin: 1,
                backgroundColor: "lightblue",
              }}>
              <CardContent key={i}>
                <Typography variant='h5' component='div'>
                  {book.title}
                </Typography>

                <Typography
                  variant='body2'
                  sx={{ color: "text.secondary", fontSize: 14 }}>
                  Author:{" "}
                  {book.authors.map((author) => {
                    return author.name;
                  })}
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
                  Book themes:{" "}
                  {book.bookshelves
                    .filter((theme) => theme.startsWith("Browsing: "))
                    .map((theme) => theme.replace("Browsing: ", ""))
                    .join(", ")}
                </Typography>
                <Typography variant='body2' sx={{ color: "text.secondary" }}>
                  Number of downloads:{" "}
                  {book.download_count
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
}

export default App;
