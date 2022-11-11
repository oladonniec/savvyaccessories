const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response, request } = require("express");
const stripe = require("stripe")(
  "sk_test_51JilxLDjEG3jzy2QOlYkPeUDPghEvEfwUtE5291oSrpBg4aACXNBgE72IhFQcYUqexHhf4h9r8MKIAUmAhNouyyt00fo9hB9HZ"
);

//API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received Boom!! >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //Ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);
