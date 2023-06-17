import { v4 as uuid } from "uuid";

export const books = [
    {
        _id: uuid(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        imgURL: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
        category: "Read"
    },
    {
        _id: uuid(),
        title: "1984",
        author: "George Orwell",
        imgURL: "https://kbimages1-a.akamaihd.net/c9472126-7f96-402d-ba57-5ba4c0f4b238/1200/1200/False/nineteen-eighty-four-1984-george.jpg",
        category: "Read"
    },
    {
        _id: uuid(),
        title: "Pride and Prejudice",
        author: "Jane Austen",
        imgURL: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781499806250/pride-and-prejudice-9781499806250_lg.jpg",
        category: "Read"
    },
    {
        _id: uuid(),
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        imgURL: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780743273565/the-great-gatsby-9780743273565_lg.jpg",
        category: "Want to Read"
    },
    {
        _id: uuid(),
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        imgURL: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9780743202084_9780743202084_lg.jpg",
        category: "Currently Reading"
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        imgURL: "https://m.media-amazon.com/images/I/91ocU8970hL._AC_UF1000,1000_QL80_.jpg",
        category: "Want to Read"
    },
    {
        _id: uuid(),
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        imgURL: "https://m.media-amazon.com/images/I/710+HcoP38L._AC_UF1000,1000_QL80_.jpg",
        category: "Want to Read"
    },
    {
        _id: uuid(),
        title: "The Alchemist",
        author: "Paulo Coelho",
        imgURL: "https://m.media-amazon.com/images/I/41e+TR4xPDL._SY344_BO1,204,203,200_.jpg",
        category: "Currently Reading"
    },
    {
        _id: uuid(),
        title: "To Kill a Kingdom",
        author: "Alexandra Christo",
        imgURL: "https://m.media-amazon.com/images/I/81jXwb7ZCML._AC_UF1000,1000_QL80_.jpg",
        category: "Currently Reading"
    },
    {
        _id: uuid(),
        title: "The Book Thief",
        author: "Markus Zusak",
        imgURL: "https://m.media-amazon.com/images/I/51BV65y0-lL._AC_UF1000,1000_QL80_.jpg",
        category: "Read"
    }
];

export const categories = ["Read", "Currently Reading", "Want to Read"];

