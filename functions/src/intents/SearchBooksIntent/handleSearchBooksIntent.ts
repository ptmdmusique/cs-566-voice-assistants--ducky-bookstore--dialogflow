import { WebhookRequest, WebhookResponse } from "../../types";
import { getRandomArrayElement } from "../utils";
import {
  MAX_RESULT_RETURN,
  NO_BOTH_AUTHOR_AND_TITLE,
  NO_CRITERIA_PROMPT,
  NO_MATCH_PROMPTS,
  RESULT_PROMPTS,
} from "./mock-data";
import { UserInput } from "./types";
import { queryForData } from "./utils";

export const handleSearchBooksIntent = (
  data: WebhookRequest<"SearchBooksIntent">,
): WebhookResponse => {
  const parameters = data.queryResult.parameters as UserInput;

  const hasCriteria = Object.values(parameters).some((value) => !!value);
  if (!hasCriteria) {
    return {
      fulfillmentMessages: [
        { text: { text: [getRandomArrayElement(NO_CRITERIA_PROMPT)] } },
      ],
    };
  }

  // Sometimes DialogFlow match the names badly, so it's safer to just discourage this
  const hasBothAuthorAndTitle = parameters.person && parameters.any;
  if (hasBothAuthorAndTitle) {
    return {
      fulfillmentMessages: [
        { text: { text: [getRandomArrayElement(NO_BOTH_AUTHOR_AND_TITLE)] } },
      ],
    };
  }

  const searchResult = queryForData(parameters);
  if (!searchResult.length) {
    return {
      fulfillmentMessages: [
        { text: { text: [getRandomArrayElement(NO_MATCH_PROMPTS)] } },
      ],
    };
  }

  const numResultToReturn = Math.min(searchResult.length, MAX_RESULT_RETURN);
  return {
    fulfillmentMessages: [
      {
        text: {
          text: [
            getRandomArrayElement(RESULT_PROMPTS)
              .replace("{numResults}", searchResult.length.toString())
              .replace("{actualResultToReturn}", numResultToReturn.toString()),
          ],
        },
      },
      {
        text: {
          text: searchResult
            .slice(0, numResultToReturn)
            .map(
              (item) =>
                `${item.volumeInfo.title} (by ${item.volumeInfo.authors.join(
                  ", ",
                )})\n`,
            ),
        },
      },
    ],
  };
};
