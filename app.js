const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const errorHandler = require("./middlewares/error-handler");
const { errors } = require("celebrate");

const routes = require("./routes");

const { PORT = 3001 } = process.env;
const app = express();
app.use(cors());
app.disable("x-powered-by");
app.use(errorHandler);

const { requestLogger, errorLogger } = require("./middlewares/logger");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://127.0.0.1:27017/wtwr_db",
  (r) => {
    console.log("connected to DB", r);
  },
  (e) => console.log("DB error", e),
);

app.use(express.json());

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("Server will crash now");
  }, 0);
});

app.use(requestLogger);
app.use(routes);

app.use(errorLogger); // enabling the error logger

app.use(errors()); // celebrate error handler
app.use(errorHandler); //centralized error handler

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
