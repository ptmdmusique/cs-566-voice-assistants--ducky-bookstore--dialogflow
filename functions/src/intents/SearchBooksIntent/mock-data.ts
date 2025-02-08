import { GoogleBooksAPIResponse } from "./types";

export const MOCK_BOOK_RESPONSE: GoogleBooksAPIResponse = {
  totalItems: 25,
  kind: "abc",
  items: [
    {
      kind: "books#volume",
      id: "1",
      volumeInfo: {
        title: "Harry Potter and the Sorcerer's Stone",
        authors: ["J.K. Rowling"],
        publishedDate: "1997-06-26",
        categories: ["Fantasy", "Young Adult"],
      },
    },
    {
      kind: "books#volume",
      id: "2",
      volumeInfo: {
        title: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
        publishedDate: "1925-04-10",
        categories: ["Classic", "Fiction"],
      },
    },
    {
      kind: "books#volume",
      id: "3",
      volumeInfo: {
        title: "1984",
        authors: ["George Orwell"],
        publishedDate: "1949-06-08",
        categories: ["Dystopian", "Science Fiction"],
      },
    },
    {
      kind: "books#volume",
      id: "4",
      volumeInfo: {
        title: "To Kill a Mockingbird",
        authors: ["Harper Lee"],
        publishedDate: "1960-07-11",
        categories: ["Classic", "Legal Fiction"],
      },
    },
    {
      kind: "books#volume",
      id: "5",
      volumeInfo: {
        title: "The Hobbit",
        authors: ["J.R.R. Tolkien"],
        publishedDate: "1937-09-21",
        categories: ["Fantasy", "Adventure"],
      },
    },
    {
      kind: "books#volume",
      id: "6",
      volumeInfo: {
        title: "Pride and Prejudice",
        authors: ["Jane Austen"],
        publishedDate: "1813-01-28",
        categories: ["Classic", "Romance"],
      },
    },
    {
      kind: "books#volume",
      id: "7",
      volumeInfo: {
        title: "The Catcher in the Rye",
        authors: ["J.D. Salinger"],
        publishedDate: "1951-07-16",
        categories: ["Classic", "Coming-of-Age"],
      },
    },
    {
      kind: "books#volume",
      id: "8",
      volumeInfo: {
        title: "The Lord of the Rings",
        authors: ["J.R.R. Tolkien"],
        publishedDate: "1954-07-29",
        categories: ["Fantasy", "Epic"],
      },
    },
    {
      kind: "books#volume",
      id: "9",
      volumeInfo: {
        title: "The Da Vinci Code",
        authors: ["Dan Brown"],
        publishedDate: "2003-03-18",
        categories: ["Thriller", "Mystery"],
      },
    },
    {
      kind: "books#volume",
      id: "10",
      volumeInfo: {
        title: "The Alchemist",
        authors: ["Paulo Coelho"],
        publishedDate: "1988-01-01",
        categories: ["Philosophical", "Adventure"],
      },
    },
    {
      kind: "books#volume",
      id: "11",
      volumeInfo: {
        title: "The Shining",
        authors: ["Stephen King"],
        publishedDate: "1977-01-28",
        categories: ["Horror", "Thriller"],
      },
    },
    {
      kind: "books#volume",
      id: "12",
      volumeInfo: {
        title: "Moby-Dick",
        authors: ["Herman Melville"],
        publishedDate: "1851-10-18",
        categories: ["Classic", "Adventure"],
      },
    },
    {
      kind: "books#volume",
      id: "13",
      volumeInfo: {
        title: "Crime and Punishment",
        authors: ["Fyodor Dostoevsky"],
        publishedDate: "1866-01-01",
        categories: ["Classic", "Psychological Fiction"],
      },
    },
    {
      kind: "books#volume",
      id: "14",
      volumeInfo: {
        title: "The Road",
        authors: ["Cormac McCarthy"],
        publishedDate: "2006-09-26",
        categories: ["Dystopian", "Post-Apocalyptic"],
      },
    },
    {
      kind: "books#volume",
      id: "15",
      volumeInfo: {
        title: "Brave New World",
        authors: ["Aldous Huxley"],
        publishedDate: "1932-08-01",
        categories: ["Dystopian", "Science Fiction"],
      },
    },
    {
      kind: "books#volume",
      id: "16",
      volumeInfo: {
        title: "Dune",
        authors: ["Frank Herbert"],
        publishedDate: "1965-08-01",
        categories: ["Science Fiction", "Adventure"],
      },
    },
    {
      kind: "books#volume",
      id: "17",
      volumeInfo: {
        title: "Dracula",
        authors: ["Bram Stoker"],
        publishedDate: "1897-05-26",
        categories: ["Horror", "Gothic"],
      },
    },
    {
      kind: "books#volume",
      id: "18",
      volumeInfo: {
        title: "The Picture of Dorian Gray",
        authors: ["Oscar Wilde"],
        publishedDate: "1890-07-20",
        categories: ["Classic", "Philosophical Fiction"],
      },
    },
    {
      kind: "books#volume",
      id: "19",
      volumeInfo: {
        title: "Frankenstein",
        authors: ["Mary Shelley"],
        publishedDate: "1818-01-01",
        categories: ["Gothic", "Science Fiction"],
      },
    },
    {
      kind: "books#volume",
      id: "20",
      volumeInfo: {
        title: "The Hunger Games",
        authors: ["Suzanne Collins"],
        publishedDate: "2008-09-14",
        categories: ["Dystopian", "Young Adult"],
      },
    },
    {
      kind: "books#volume",
      id: "21",
      volumeInfo: {
        title: "It",
        authors: ["Stephen King"],
        publishedDate: "1986-09-15",
        categories: ["Horror", "Thriller"],
      },
    },
    {
      kind: "books#volume",
      id: "22",
      volumeInfo: {
        title: "Percy Jackson & The Olympians: The Lightning Thief",
        authors: ["Rick Riordan"],
        publishedDate: "2005-06-28",
        categories: ["Fantasy", "Young Adult"],
      },
    },
    {
      kind: "books#volume",
      id: "23",
      volumeInfo: {
        title: "The Martian",
        authors: ["Andy Weir"],
        publishedDate: "2011-09-27",
        categories: ["Science Fiction", "Adventure"],
      },
    },
    {
      kind: "books#volume",
      id: "24",
      volumeInfo: {
        title: "A Game of Thrones",
        authors: ["George R.R. Martin"],
        publishedDate: "1996-08-06",
        categories: ["Fantasy", "Epic"],
      },
    },
    {
      kind: "books#volume",
      id: "25",
      volumeInfo: {
        title: "The Fault in Our Stars",
        authors: ["John Green"],
        publishedDate: "2012-01-10",
        categories: ["Romance", "Young Adult"],
      },
    },
  ],
};

export const NO_MATCH_PROMPTS: string[] = [
  "Hmm, it looks like we couldn't find that one. Want to try a different title or author?",
  "Oops, nothing came up for that! How about we search for something else?",
  "Yikes! We couldn't find a match for that. Want to give me another title?",
  "Aww, no luck finding that book! Any other titles you're curious about?",
  "Bummer! We didn’t find that book. Let’s try something else!",
  "Hmm, I couldn’t find that. How about trying a different title or author?",
  "Looks like that book’s hiding! Want to search for another one?",
  "Uh-oh, I couldn’t find a match. Want to try a different title or author?",
  "No matches found. But hey, I’m always up for another search! Any other books you have in mind?",
  "I couldn’t find that book. Let’s see if we can find something else together!",
];

export const RESULT_PROMPTS: string[] = [
  "Great news! I’ve found {numResults} books. Here are the first {actualResultToReturn}:",
  "Here you go! I found {numResults} matches. Here’s the top {actualResultToReturn}:",
  "I’ve got {numResults} books for you! Here are the first {actualResultToReturn}:",
  "I found {numResults} books in my library! Showing the top {actualResultToReturn}:",
  "Good news! There are {numResults} books that match. Here are {actualResultToReturn} of them:",
  "Here’s what I found: {numResults} books in total. Here’s a sneak peek at the first {actualResultToReturn}:",
  "Awesome! I discovered {numResults} options for you. The first {actualResultToReturn} are:",
  "Success! I found {numResults} books! Check out the top {actualResultToReturn}:",
  "I’ve searched and found {numResults} matches! Here are {actualResultToReturn} of them:",
  "Wow! I found {numResults} books for you. Here are the first {actualResultToReturn} to get you started:",
];

export const NO_CRITERIA_PROMPT = [
  "Hey there! What kind of book are you looking for? You can tell me a title, author, genre, or even a publication year!",
  "I’ve got tons of books waiting for you! Can you give me a little hint—maybe an author, a title, or a genre?",
  "Not sure where to start? No worries! Just let me know a book title, an author, or a genre, and I’ll find something awesome for you!",
  "Books, books, books! But I need a bit more info. Are you looking for a mystery, fantasy, or maybe a classic?",
  "Tell me what you're in the mood for! Fiction, non-fiction, sci-fi, or a specific book title? I’m all ears!",
  "No worries, I can help! Just let me know if you have a favorite author, a title in mind, or even a book category you love!",
  "Looking for a great read? Just drop a hint—title, author, genre, or even a release year—and I’ll fetch the best match for you!",
  "I've got a whole library at my fingertips! Give me a keyword, a title, or an author, and I'll do the magic.",
  "Tell me a little bit more—are you in the mood for an adventure, a thriller, or something completely different?",
  "Oops! Looks like you didn’t give me any search details. Want to browse by genre, author, or a favorite book?",
];

export const NO_BOTH_AUTHOR_AND_TITLE = [
  "I can search by either book title or author, but not both. Which one would you like to use?",
  "Oops! I can only look up books by title or author separately. Do you want to search by title or author?",
  "I’d love to help, but I can only search using a title or an author, not both at once. Which one should I use?",
  "Looks like you provided both a title and an author—I can only use one. Which one would you like me to search for?",
  "I can only search by one thing at a time—either the book title or the author’s name. Let me know which one to use!",
  "Hmm, I see both a title and an author. I can only look up one at a time. Should I go with the title or author?",
  "To keep things simple, I can only search by title or author, not both. Which one should I use?",
  "I’d be happy to find a book for you! Just let me know if you’d like me to search by title or by author.",
  "I can’t use both a book title and an author in the same search. Would you like me to find books by title or author instead?",
  "I can only search using one piece of information at a time—either a title or an author. Which one do you want to go with?",
];

export const MAX_RESULT_RETURN = 5;
