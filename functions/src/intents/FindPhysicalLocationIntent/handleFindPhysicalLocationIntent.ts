import { WebhookRequest, WebhookResponse } from "../../types";
import { getRandomArrayElement } from "../utils";
import { NO_MATCH_PROMPTS, RESULT_PROMPTS } from "./mock-data";
import { MAX_RESULT_RETURN, searchLocation } from "./utils";

export const handleFindPhysicalLocationIntent = (
  data: WebhookRequest<"FindPhysicalLocationIntent">,
): WebhookResponse => {
  const parameters = data.queryResult.parameters;
  const address = parameters["address"];
  const distance =
    parameters["unit-length"]?.amount ??
    parseFloat(parameters["unit-length"] || "5") ??
    5;

  const searchResult = searchLocation(address, distance);

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
              .replace("{location}", address)
              .replace("{miles}", distance.toString())
              .replace("{actualResultToReturn}", numResultToReturn.toString()),
          ],
        },
      },
      {
        text: {
          text: searchResult
            .slice(0, numResultToReturn)
            .map((item) => `${item.name} (${item.address})\n`),
        },
      },
    ],
  };
};
