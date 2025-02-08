import Fuse from "fuse.js";
import { match } from "ts-pattern";
import { getRandomArrayElement } from "../utils";
import {
  MOCK_BOOK_RESPONSE,
  NO_MATCH_PROMPTS,
  RESULT_PROMPTS,
} from "./mock-data";
import { BookItem, UserInput } from "./types";

// * --- Data query
export const queryForData = (userInput: UserInput) => {
  // TODO: replace this with actual query once we start that section
  let results = MOCK_BOOK_RESPONSE.items;

  if (userInput.genre) {
    results = results.filter((item) => {
      return item.volumeInfo?.categories
        .map((category) => category.toLowerCase())
        ?.includes(userInput.genre.toLowerCase());
    });
  }

  if (userInput.person) {
    const author = userInput.person?.name;
    results = search("author", author);
  }

  const bookTitle = userInput.any;
  if (bookTitle) {
    results = search("book-title", bookTitle);
  }

  const publishedDateQuery = userInput["date-period"];
  if (publishedDateQuery) {
    const startDate = new Date(publishedDateQuery.startDate);
    const endDate = new Date(publishedDateQuery.endDate);

    results = results.filter((item) => {
      // Seems like DialogFlow already handle the cases like "after 1980", "before 1999" or "in 1910s"
      const publishedDate = new Date(item.volumeInfo.publishedDate);
      return publishedDate >= startDate && publishedDate <= endDate;
    });
  }

  return results;
};

// TODO: remove
// /** Filter by specified Date. Also handle cases like "after 1980", "before 1999" or "in 1910s" */
// const filterByDate = (results: BookItem[], date: string): BookItem[] => {
//   const filterType = getFilterType(date);
//   const anchorDate = new Date(filterType.anchorTime);

//   return results.filter((item) => {
//     const publishedDate = new Date(item.volumeInfo.publishedDate);

//     return match(filterType.type)
//       .with("exact", () => publishedDate.getTime() === anchorDate.getTime())
//       .with("after", () => publishedDate > anchorDate)
//       .with("before", () => publishedDate < anchorDate)
//       .with("in-decade", () => {
//         return (
//           publishedDate.getFullYear() >= anchorDate.getFullYear() &&
//           publishedDate.getFullYear() < anchorDate.getFullYear() + 10
//         );
//       })
//       .exhaustive();
//   });
// };

// const getFilterType = (
//   date: string,
// ): { type: "after" | "before" | "exact" | "in-decade"; anchorTime: string } => {
//   const afterMatch = date.match(/^after (\d{4}(-\d{1,2}(-\d{1,2})?)?)$/);
//   if (afterMatch) {
//     return { type: "after", anchorTime: afterMatch[1] };
//   }

//   const beforeMatch = date.match(/^before (\d{4}(-\d{1,2}(-\d{1,2})?)?)$/);
//   if (beforeMatch) {
//     return { type: "before", anchorTime: beforeMatch[1] };
//   }

//   const inDecadeMatch = date.match(/^in (\d{4})s$/);
//   if (inDecadeMatch) {
//     return { type: "in-decade", anchorTime: inDecadeMatch[1] };
//   }

//   const exactMatch = date.match(/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/);
//   if (exactMatch) {
//     return { type: "exact", anchorTime: exactMatch[1] };
//   }

//   return { type: "exact", anchorTime: date };
// };

const search = (
  slotType: "author" | "book-title",
  value: string,
): BookItem[] => {
  const { key, threshold } = getFuseKeyFromSlotType(slotType);
  const fuse = new Fuse(MOCK_BOOK_RESPONSE.items, {
    keys: [key],
    isCaseSensitive: false,
    threshold,
  });

  return fuse.search(value).map(({ item }) => item);
};

const getFuseKeyFromSlotType = (
  slotType: "author" | "book-title",
): { key: string; threshold: number } => {
  return match(slotType)
    .with("author", () => ({ key: "volumeInfo.authors", threshold: 0.2 }))
    .with("book-title", () => ({ key: "volumeInfo.title", threshold: 0.5 }))
    .exhaustive();
};

// * --- Helper functions
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
