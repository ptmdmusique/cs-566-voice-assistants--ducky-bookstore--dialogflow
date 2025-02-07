import Fuse from "fuse.js";
import { match } from "ts-pattern";
import { getRandomArrayElement } from "../utils";
import {
  MOCK_BOOK_RESPONSE,
  NO_MATCH_PROMPTS,
  RESULT_PROMPTS,
} from "./mock-data";
import { AvailableSlotType, BookItem, UserInput } from "./types";

// * --- Data query
export const queryForData = (userInput: UserInput) => {
  // TODO: replace this with actual query once we start that section
  let results = MOCK_BOOK_RESPONSE.items;

  if (userInput.Genre) {
    results = results.filter((item) => {
      return item.volumeInfo?.categories
        .map((category) => category.toLowerCase())
        ?.includes(userInput.Genre.toLowerCase());
    });
  }

  if (userInput.AuthorName) {
    results = search("AuthorName", userInput.AuthorName);
  }

  if (userInput.BookTitle) {
    results = search("BookTitle", userInput.BookTitle);
  }

  if (userInput.PublishedDate) {
    // TODO: make this more dynamic to handle case such as "before"
    results = results.filter((item) => {
      return item.volumeInfo?.publishedDate === userInput.PublishedDate;
    });
  }

  return results;
};

const search = (
  slotType: Exclude<AvailableSlotType, "PublishedDate" | "Genre">,
  value: string,
): BookItem[] => {
  const fuse = new Fuse(MOCK_BOOK_RESPONSE.items, {
    keys: [getFuseKeyFromSlotType(slotType)],
    isCaseSensitive: false,
  });

  return fuse.search(value).map(({ item }) => item);
};

const getFuseKeyFromSlotType = (
  slotType: Exclude<AvailableSlotType, "PublishedDate" | "Genre">,
): string => {
  return match(slotType)
    .with("AuthorName", () => "volumeInfo.authors")
    .with("BookTitle", () => "volumeInfo.title")
    .exhaustive();
};

// * --- Helper functions
// export const getUserInputFromSlots = (slots: Slots): UserInput => {
//   return {
//     Genre: slots.Genre.value as AvailableGenre,
//     AuthorName: slots.AuthorName.value,
//     BookTitle: slots.BookTitle.value,
//     PublishedDate: slots.PublishedDate.value,
//   };
// };

export const getNoResultPrompt = () => {
  return getRandomArrayElement(NO_MATCH_PROMPTS);
};

export const getResultPrompts = (bookItems: BookItem[]) => {
  const prompt = getRandomArrayElement(RESULT_PROMPTS);

  const numResultToReturn = Math.min(bookItems.length, MAX_RESULT_RETURN);
  return prompt
    .replace("{numResults}", bookItems.length.toString())
    .replace("{actualResultToReturn}", numResultToReturn.toString())
    .replace(
      "{results}",
      bookItems.map((item) => item.volumeInfo?.title).join(", "),
    );
};

const MAX_RESULT_RETURN = 5;
