export const NO_MATCH_PROMPTS = [
  "Hmm, I couldn't find any bookstores near that location. Want to try another area?",
  "Looks like there aren’t any bookstores nearby. Maybe expand the search radius?",
  "Oops! No results came up. Would you like to search in a different location?",
  "I couldn't find any bookstores there. Want to try searching somewhere else?",
  "No bookstores nearby, but I can help you find one in a different city. Where else should I look?",
  "That location seems a bit quiet for bookstores. Want to widen the search?",
  "I checked, but no bookstores popped up. Try a different area or a larger radius?",
  "Uh-oh, nothing in that area. How about looking in a nearby city?",
  "I didn't find any results. Maybe we should check a different neighborhood?",
  "No bookstores found there! Should I look in a bigger area or a different place?",
];

export const RESULT_PROMPTS = [
  "I've found {numResults} bookstores near {location}! Here are the top {actualResultToReturn}: {bookstoreList}.",
  "Great news! There are {numResults} bookstores near {location}. Here are the closest ones: {bookstoreList}.",
  "I found {numResults} bookstores in {location}. Here are {actualResultToReturn} of them: {bookstoreList}.",
  "You're in luck! There are {numResults} bookstores nearby. The top ones are: {bookstoreList}.",
  "Here are {actualResultToReturn} bookstores near {location}: {bookstoreList}. Want more options?",
  "Found {numResults} bookstores! Check out these first: {bookstoreList}. Need directions?",
  "Good news! {numResults} bookstores are in your area. Here are {actualResultToReturn}: {bookstoreList}.",
  "I’ve located {numResults} bookstores for you. Here are the best ones: {bookstoreList}.",
  "I found bookstores nearby! The closest ones are: {bookstoreList}. Need more details?",
  "Looks like there are {numResults} bookstores near {location}. The top picks: {bookstoreList}.",
];
