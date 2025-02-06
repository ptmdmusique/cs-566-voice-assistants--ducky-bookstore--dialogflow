import * as logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v2/https";
import { match } from "ts-pattern";
import { handleFindPhysicalLocationIntent } from "./intents/FindPhysicalLocationIntent/handleFindPhysicalLocationIntent";
import { handleSearchBooksIntent } from "./intents/SearchBooksIntent/handleSearchBooksIntent";
import { AvailableIntentName, WebhookRequest, WebhookResponse } from "./types";

export const handleWebhook = onRequest((request, response) => {
  // Only allow the request if its header contains "sourceApp" and its value is "ducky-bookstore-webhook"
  if (request.headers["sourceapp"] !== "ducky-bookstore-webhook") {
    response.status(401).send("Unauthorized, check pass");
    return;
  }

  const data = request.body as WebhookRequest<AvailableIntentName>;
  console.log("data", data);

  try {
    const tag = data.queryResult?.intent?.displayName;
    const responseObj: WebhookResponse = match(tag)
      .returnType<WebhookResponse>()
      .with("SearchBooksIntent", () => handleSearchBooksIntent())
      .with("FindPhysicalLocationIntent", () =>
        handleFindPhysicalLocationIntent(),
      )
      .exhaustive();

    response.send(responseObj);
  } catch (error) {
    logger.error(error);
    response.status(500).send(error);
  }
});
