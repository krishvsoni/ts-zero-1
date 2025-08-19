type book ={
    title: string;
    author: string;
    year: number;
}


const myBook: book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}


function printBookDetails(book:book):void {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year: ${book.year}`);
}

printBookDetails(myBook);