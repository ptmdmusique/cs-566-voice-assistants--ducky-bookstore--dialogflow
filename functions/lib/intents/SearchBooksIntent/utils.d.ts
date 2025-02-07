import { BookItem, UserInput } from "./types";
export declare const queryForData: (userInput: UserInput) => BookItem[];
export declare const getNoResultPrompt: () => string;
export declare const getResultPrompts: (bookItems: BookItem[]) => string;
