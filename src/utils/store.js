import { v4 as uuid } from "uuid";

export const books = [
    {
        _id: uuid(),
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        imgURL: "",
        category: "Read"
    },
    {
        _id: uuid(),
        title: "1984",
        author: "George Orwell",
        imgURL: "",
        category: "Read"
    },
    {
        _id: uuid(),
        title: "Pride and Prejudice",
        author: "Jane Austen",
        imgURL: "",
        category: "Read"
    },
    {
        _id: uuid(),
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        imgURL: "",
        category: "Want to Read"
    },
    {
        _id: uuid(),
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        imgURL: "",
        category: "Currently Reading"
    },
    {
        _id: uuid(),
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        imgURL: "",
        category: "Want to Read"
    },
    {
        _id: uuid(),
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        imgURL: "",
        category: "Want to Read"
    },
    {
        _id: uuid(),
        title: "The Alchemist",
        author: "Paulo Coelho",
        imgURL: "",
        category: "Currently Reading"
    },
    {
        _id: uuid(),
        title: "To Kill a Kingdom",
        author: "Alexandra Christo",
        imgURL: "",
        category: "Currently Reading"
    },
    {
        _id: uuid(),
        title: "The Book Thief",
        author: "Markus Zusak",
        imgURL: "",
        category: "Read"
    }
];

export const categories = ["Read", "Currently Reading", "Want to Read"];

