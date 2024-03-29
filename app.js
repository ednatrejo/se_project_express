const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const { PORT = 3001 } = process.env;
const app = express();
app.use(cors());
app.disable("x-powered-by");

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb://127.0.0.1:27017/wtwr_db",
  (r) => {
    console.log("connected to DB", r);
  },
  (e) => console.log("DB error", e),
);

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
