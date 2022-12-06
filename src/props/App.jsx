import React from "react";
import "./app.css";
const data = [
  {
    bookImage:
      "https://m.media-amazon.com/images/I/81OrrjDgaSL._AC_UL480_FMwebp_QL65_.jpg",
    bookTitle: "The Bookstore Sisters: A Short Story",
    bookAuthor: "Alice Hofman",
  },
  {
    bookImage:
      "https://m.media-amazon.com/images/I/81XIsyCJcIL._AC_UL480_FMwebp_QL65_.jpg",
    bookTitle: "Hello, Bookstore",
    bookAuthor: "Primw Video",
  },
  {
    bookImage:
      "https://m.media-amazon.com/images/I/71Xi7sn6KnL._AC_UL480_FMwebp_QL65_.jpg",
    bookTitle: "The Judge's List: A Novel (The Whistler)",
    bookAuthor: "Paperback",
  },
  {
    bookImage:
      "https://m.media-amazon.com/images/I/71Xi7sn6KnL._AC_UL480_FMwebp_QL65_.jpg",
    bookTitle: "The Judge's List: A Novel (The Whistler)",
    bookAuthor: "Paperback",
  },
  {
    bookImage:
      "https://m.media-amazon.com/images/I/71Xi7sn6KnL._AC_UL480_FMwebp_QL65_.jpg",
    bookTitle: "Random Book",
    bookAuthor: "Random Author",
  },
];
const MyBook = () => {
  return (
    <div className="parent">
      {data.map((randomData) => {
        return (
          <div className="book">
            <img src={randomData.bookImage} alt={randomData.bookTitle} />
            <h4>{randomData.bookTitle}</h4>
            <h4>{randomData.bookAuthor}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default MyBook;
