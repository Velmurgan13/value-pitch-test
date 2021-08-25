require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();

app.use(express.json());
app.options("*", cors()); // include before other routes
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Bind all routes to the app
app.use(routes);

const URI = process.env.DBURL;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Application is Connected to MongoDB");
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is started in ${PORT}`));
