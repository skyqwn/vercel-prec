import express from "express";
import path from "path";

const app = express();

app.use(express.static("public"));
const port = 5001;

app.get("/", (req, res, next) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

app.listen(port, () => {
  console.log("listening server");
});

export default app;
