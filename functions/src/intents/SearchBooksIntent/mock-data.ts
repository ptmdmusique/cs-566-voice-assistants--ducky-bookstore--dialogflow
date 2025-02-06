import { GoogleBooksAPIResponse } from "./types";

export const MOCK_BOOK_RESPONSE: GoogleBooksAPIResponse = {
  kind: "books#volumes",
  totalItems: 50,
  items: [
    {
      kind: "books#volume",
      id: "1",
      etag: "abcd1",
      selfLink: "https://www.googleapis.com/books/v1/volumes/1",
      volumeInfo: {
        title: "Harry Potter and the Sorcerer's Stone",
        authors: ["J.K. Rowling"],
        publisher: "Scholastic",
        publishedDate: "1997",
        description:
          "A young boy discovers he is a wizard and attends a magical school.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0439708184",
          },
          {
            type: "ISBN_13",
            identifier: "9780439708180",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 309,
        printType: "BOOK",
        categories: ["Fantasy", "Young Adult"],
        averageRating: 4.9,
        ratingsCount: 12000,
        maturityRating: "NOT_MATURE",
        language: "en",
        previewLink: "http://books.google.com/books?id=1&printsec=frontcover",
        infoLink: "http://books.google.com/books?id=1",
        canonicalVolumeLink: "https://books.google.com/books/about?id=1",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 24.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 19.99,
          currencyCode: "USD",
        },
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: "http://play.google.com/books/reader?id=1",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "2",
      etag: "abcd2",
      selfLink: "https://www.googleapis.com/books/v1/volumes/2",
      volumeInfo: {
        title: "The Great Gatsby",
        authors: ["F. Scott Fitzgerald"],
        publisher: "Scribner",
        publishedDate: "1925",
        description:
          "A young millionaire’s attempt to rekindle an old romance.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0743273567",
          },
          {
            type: "ISBN_13",
            identifier: "9780743273565",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 180,
        printType: "BOOK",
        categories: ["Classic", "Fiction"],
        averageRating: 4.5,
        ratingsCount: 5000,
        maturityRating: "NOT_MATURE",
        language: "en",
        previewLink: "http://books.google.com/books?id=2&printsec=frontcover",
        infoLink: "http://books.google.com/books?id=2",
        canonicalVolumeLink: "https://books.google.com/books/about?id=2",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 14.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 12.99,
          currencyCode: "USD",
        },
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: "http://play.google.com/books/reader?id=2",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "3",
      etag: "abcd3",
      selfLink: "https://www.googleapis.com/books/v1/volumes/3",
      volumeInfo: {
        title: "To Kill a Mockingbird",
        authors: ["Harper Lee"],
        publisher: "J.B. Lippincott & Co.",
        publishedDate: "1960",
        description: "A young girl comes of age in the racially charged South.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0061120081",
          },
          {
            type: "ISBN_13",
            identifier: "9780061120084",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 281,
        printType: "BOOK",
        categories: ["Fiction", "Classic"],
        averageRating: 4.8,
        ratingsCount: 7000,
        maturityRating: "NOT_MATURE",
        language: "en",
        previewLink: "http://books.google.com/books?id=3&printsec=frontcover",
        infoLink: "http://books.google.com/books?id=3",
        canonicalVolumeLink: "https://books.google.com/books/about?id=3",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 15.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 11.99,
          currencyCode: "USD",
        },
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: "http://play.google.com/books/reader?id=3",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "4",
      etag: "abcd4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/4",
      volumeInfo: {
        title: "1984",
        authors: ["George Orwell"],
        publisher: "Secker & Warburg",
        publishedDate: "1949",
        description:
          "A totalitarian regime uses surveillance and control to maintain power.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0451524934",
          },
          {
            type: "ISBN_13",
            identifier: "9780451524935",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 328,
        printType: "BOOK",
        categories: ["Dystopian", "Science Fiction"],
        averageRating: 4.7,
        ratingsCount: 9000,
        maturityRating: "NOT_MATURE",
        language: "en",
        previewLink: "http://books.google.com/books?id=4&printsec=frontcover",
        infoLink: "http://books.google.com/books?id=4",
        canonicalVolumeLink: "https://books.google.com/books/about?id=4",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 18.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 14.99,
          currencyCode: "USD",
        },
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: "http://play.google.com/books/reader?id=4",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
    {
      kind: "books#volume",
      id: "5",
      etag: "abcd5",
      selfLink: "https://www.googleapis.com/books/v1/volumes/5",
      volumeInfo: {
        title: "The Catcher in the Rye",
        authors: ["J.D. Salinger"],
        publisher: "Little, Brown and Company",
        publishedDate: "1951",
        description:
          "A disillusioned teenager navigates the complexities of life and adulthood.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0316769487",
          },
          {
            type: "ISBN_13",
            identifier: "9780316769488",
          },
        ],
        readingModes: {
          text: true,
          image: true,
        },
        pageCount: 277,
        printType: "BOOK",
        categories: ["Fiction", "Classic"],
        averageRating: 4.3,
        ratingsCount: 8000,
        maturityRating: "NOT_MATURE",
        language: "en",
        previewLink: "http://books.google.com/books?id=5&printsec=frontcover",
        infoLink: "http://books.google.com/books?id=5",
        canonicalVolumeLink: "https://books.google.com/books/about?id=5",
      },
      saleInfo: {
        country: "US",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 16.99,
          currencyCode: "USD",
        },
        retailPrice: {
          amount: 12.99,
          currencyCode: "USD",
        },
      },
      accessInfo: {
        country: "US",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink: "http://play.google.com/books/reader?id=5",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
    },
  ],
};

// ? --- These prompts are generated by ChatGPT --- ?

export const GREETING_PROMPTS: string[] = [
  "Hello from Ducky! Welcome to my Bookstore. What can I get ya today?",
  "Hey there! It’s Ducky’s Bookstore. Looking for your next great read?",
  "Welcome to Ducky’s Bookstore! What book adventure are you in the mood for today?",
  "Hiya! This is Ducky’s Bookstore. Ready to dive into some amazing books?",
  "Quack quack! You’ve made it to Ducky’s Bookstore. What are you searching for today?",
  "Hey, book lover! Welcome to Ducky’s Bookstore. Let’s find your perfect match!",
  "Hello there! It’s Ducky here. What kind of book magic can I whip up for you today?",
  "Greetings from Ducky’s Bookstore! What can I help you discover today?",
  "Hi! Welcome to Ducky’s cozy corner of books. What are you in the mood to read?",
  "Hello and welcome! Ducky’s Bookstore is open for business. What can I find for you?",
];

export const NO_SLOT_PROMPTS: string[] = [
  "Hmm, I didn’t catch that. Could you tell me what book or author you’re looking for?",
  "I didn’t hear what you’re searching for. Could you try saying the title or author again?",
  "Oops, it seems like I missed what you’re looking for. What book or genre can I help you with?",
  "I’m here to help, but I need a little more info. What book or author should I look up for you?",
  "Looks like you forgot to mention the book or author. Can you let me know what you're after?",
  "Not sure what you’re looking for. Could you give me the title or author to search?",
  "Quack! I don’t know what book you mean yet. Can you tell me the title or author?",
  "I couldn’t hear your request. Could you let me know the name of the book or author?",
  "Hmm, I need a bit more to go on. What book or author can I search for you today?",
  "It seems like you didn’t tell me what to search for. Could you try again with the book title or author?",
];

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

export const REPROMPT_PROMPTS: string[] = [
  "Hey, are you still there? Want to search for something else?",
  "I didn’t catch that. Would you like me to search for another book?",
  "Hello? If you’re looking for more books, just let me know!",
  "I’m ready when you are! Want to search for a different book?",
  "I’m here! Just say the title or author, and I’ll find it for you.",
  "I didn’t hear anything. Need help finding a book?",
  "Still thinking about a book? Let me know when you’re ready!",
  "Hey, are you still with me? Let me know if you’d like me to search again!",
  "I’m waiting to help! Feel free to share any book title or author.",
  "Don’t leave me hanging! Want to try searching for something else?",
];

export const RESULT_PROMPTS: string[] = [
  "Great news! I’ve found {numResults} books. Here are the first {actualResultToReturn}: {results}.",
  "Here you go! I found {numResults} matches. Here’s the top {actualResultToReturn}: {results}.",
  "I’ve got {numResults} books for you! Here are the first {actualResultToReturn}: {results}.",
  "I found {numResults} books in my library! Showing the top {actualResultToReturn}: {results}.",
  "Good news! There are {numResults} books that match. Here are {actualResultToReturn} of them: {results}.",
  "Here’s what I found: {numResults} books in total. Here’s a sneak peek at the first {actualResultToReturn}: {results}.",
  "Awesome! I discovered {numResults} options for you. The first {actualResultToReturn} are: {results}.",
  "Success! I found {numResults} books! Check out the top {actualResultToReturn}: {results}.",
  "I’ve searched and found {numResults} matches! Here are {actualResultToReturn} of them: {results}.",
  "Wow! I found {numResults} books for you. Here are the first {actualResultToReturn} to get you started: {results}.",
];

export const HELP_PROMPTS: string[] = [
  "Hi there! You can ask me to find books by title, author, or genre. What would you like to do?",
  "Need a hand? You can say things like 'Find Harry Potter,' or 'Search for books by J.K. Rowling.' How can I help?",
  "I’m here to help! Try saying, 'Recommend me a mystery book,' or 'Find books about cooking.' What’s your request?",
  "You can ask me things like, 'Show me fantasy books,' or 'Find books by Stephen King.' What can I do for you today?",
  "Looking for a book? Just tell me the title, author, or genre, and I’ll help you find it!",
  "I can find books for you! Try saying, 'Find romance novels,' or 'Search for books by j.K. Rowling.' Ready to search?",
  "Quack quack! I can help you find books by title, author, or category. Just let me know what you’re looking for!",
];

export const GOODBYE_PROMPTS: string[] = [
  "Thanks for stopping by! Come back anytime you want to explore more books. See ya!",
  "Goodbye for now! Hope you find your next favorite book. Quack you later!",
  "Catch you later! Don’t forget, I’m here whenever you need book recommendations.",
  "Happy reading! Come back soon for more book adventures. Bye for now!",
  "Take care! Let me know next time you need help finding a great book.",
  "See you next time! I’m always here to help you find your next great read.",
  "Bye-bye! Quack back soon for more book searches and recommendations!",
  "So long, friend! Have a great day and happy reading!",
  "It was fun helping you today! Come back soon for more book discoveries.",
  "Goodbye! I’ll be here when you’re ready to dive into more books.",
];

export const FALLBACK_PROMPTS: string[] = [
  "Sorry, I didn’t quite catch that. Could you try asking in a different way?",
  "Hmm, I’m not sure how to help with that. Maybe try asking for a book title, author, or genre?",
  "I’m not sure I understood. Can you rephrase your request?",
  "Oops, I didn’t get that. You can say things like, 'Find mystery books,' or 'Search for books by J.K. Rowling.'",
  "I didn’t catch that, but don’t worry! Try saying something like, 'Show me fantasy books,' or 'Find books about cooking.'",
  "Quack quack! I’m a bit confused. Can you try asking about a specific title, author, or genre?",
  "Sorry, I don’t know how to help with that. You can ask me to find books or recommend a genre. What do you have in mind?",
  "I didn’t understand that. How about asking for books by title, author, or genre?",
  "Hmm, that didn’t quite work. Try something like, 'Find books by Stephen King,' or 'Show me romance novels.'",
  "Sorry, I’m a little lost here. Could you try rephrasing your request?",
];

export const ERROR_PROMPTS: string[] = [
  "Oops, something went wrong on my end. Could you try that again?",
  "Yikes! I hit a snag. Mind repeating your request?",
  "Uh-oh, it looks like I ran into a little trouble. Let’s try that again!",
  "Sorry about that! I couldn’t process your request. Could you ask me one more time?",
  "Hmm, something didn’t work right. Let’s give it another shot!",
  "My feathers are a bit ruffled—there was an error. Can you try asking again?",
  "Quack quack! Something seems off. Let’s try that one more time, shall we?",
  "Sorry, I hit a bump in the road. Could you repeat what you said?",
  "Oops, I’m having a hard time with that. Try asking again, or say 'help' for more options!",
  "Eek, I didn’t expect that. Let’s start over—what can I help you find?",
];
