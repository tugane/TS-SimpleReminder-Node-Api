import express from "express";
const app = express();
import reminderRouter from "./routers/reminders";
app.use(express.json());

app.use("/reminders", reminderRouter);
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8000, () => console.log("Server started"));
