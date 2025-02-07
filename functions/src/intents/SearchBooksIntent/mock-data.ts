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
