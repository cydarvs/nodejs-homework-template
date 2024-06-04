/*
express: This is the Express.js framework for building web applications and APIs.
logger (morgan): This is a middleware for logging HTTP requests and responses.
cors: This middleware enables Cross-Origin Resource Sharing, which allows your server to accept requests from different origins.
contactsRouter: This is the router module for handling routes related to contacts. It is imported from a local file.
*/
import express from "express";
import logger from "morgan";
import cors from "cors";

import { router as contactsRouter } from "./routes/api/contactsRouter.js";
import { router as usersRouter } from "./routes/api/usersRouter.js";

// Initializes a new Express application
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// Use Middleware

app.use(logger(formatsLogger)); // logger(formatsLogger): Uses the morgan logger middleware with the determined format.
app.use(cors());  // cors(): Enables CORS for all routes by default.
app.use(express.json()); // Parses incoming requests with JSON payloads.

// Mounts the contactsRouter on the /api/contacts path. Any request to /api/contacts will be handled by the contactsRouter.
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

// This middleware handles requests that do not match any route. It responds with a 404 status code 
// and a JSON message indicating that the resource was not found.
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// This error-handling middleware catches any errors that occur in the application. 
// It responds with a 500 status code and a JSON message containing the error message.
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// module.exports = app;
// Exports the app instance for use in other parts of the application (such as the server file that starts the application).
export { app };