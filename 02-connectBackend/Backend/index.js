import express from "express";

const app = express();

app.get =
  ("/",
  (req, res) => {
    res.send("hello baby");
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
