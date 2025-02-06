## To dev

- Open 2 terminals and `cd functions`
- Run `npm run serve` and `npm start`
- To test the local server live, run `npx ngrok http 5001` and update the webhook in the [Dialogflow console](https://dialogflow.cloud.google.com/#/agent/ducky-bookstore-dhrl/fulfillment)
  - Make sure to set `sourceapp=ducky-bookstore-webhook` header
