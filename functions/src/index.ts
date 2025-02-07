import * as logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v2/https";
import { match } from "ts-pattern";
import { handleFindPhysicalLocationIntent } from "./intents/FindPhysicalLocationIntent/handleFindPhysicalLocationIntent";
import { handleSearchBooksIntent } from "./intents/SearchBooksIntent/handleSearchBooksIntent";
import { getRandomArrayElement } from "./intents/utils";
import { WebhookRequest, WebhookResponse } from "./types";

export const handleWebhook = onRequest((request, response) => {
  // Only allow the request if its header contains "sourceApp" and its value is "ducky-bookstore-webhook"
  if (request.headers["sourceapp"] !== "ducky-bookstore-webhook") {
    response.status(401).send("Unauthorized, check pass");
    return;
  }

  const data = request.body as WebhookRequest;
  console.info("data", data);

  try {
    const tag = data.queryResult?.intent?.displayName;
    const responseObj: WebhookResponse = match(tag)
      .returnType<WebhookResponse>()
      .with("SearchBooksIntent", () =>
        handleSearchBooksIntent(data as WebhookRequest<"SearchBooksIntent">),
      )
      .with("FindPhysicalLocationIntent", () =>
        handleFindPhysicalLocationIntent(
          data as WebhookRequest<"FindPhysicalLocationIntent">,
        ),
      )
      .with("Default Fallback Intent", () => ({
        fulfillmentMessages: [
          { text: { text: [getRandomArrayElement(FALLBACK_PROMPTS)] } },
        ],
      }))
      .with("Default Welcome Intent", () => ({
        fulfillmentMessages: [
          { text: { text: [getRandomArrayElement(GREETING_PROMPTS)] } },
        ],
      }))
      .exhaustive();

    response.send(responseObj);
  } catch (error) {
    logger.error(error);
    response.status(500).send(error);
  }
});

const GREETING_PROMPTS: string[] = [
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

const FALLBACK_PROMPTS: string[] = [
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

// const ERROR_PROMPTS: string[] = [
//   "Oops, something went wrong on my end. Could you try that again?",
//   "Yikes! I hit a snag. Mind repeating your request?",
//   "Uh-oh, it looks like I ran into a little trouble. Let’s try that again!",
//   "Sorry about that! I couldn’t process your request. Could you ask me one more time?",
//   "Hmm, something didn’t work right. Let’s give it another shot!",
//   "My feathers are a bit ruffled—there was an error. Can you try asking again?",
//   "Quack quack! Something seems off. Let’s try that one more time, shall we?",
//   "Sorry, I hit a bump in the road. Could you repeat what you said?",
//   "Oops, I’m having a hard time with that. Try asking again, or say 'help' for more options!",
//   "Eek, I didn’t expect that. Let’s start over—what can I help you find?",
// ];
