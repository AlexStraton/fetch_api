async function getBooks() {
  try {
    const allBooks = await fetch("https://gutendex.com/books/");
    const books = await allBooks.json();
    return books;
  } catch (error) {
    console.log(error);
  }
}

export default getBooks;
