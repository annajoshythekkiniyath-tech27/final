const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;

app.use(express.json());
app.use(cors());
require("./connection");

const BlogModel = require("./model");

// ADD
app.post("/add", async (req, res) => {
  await BlogModel(req.body).save();
  res.json({ message: "Employee Added" });
});

// VIEW
app.get("/view", async (req, res) => {
  const data = await BlogModel.find();
  res.json(data);
});

// GET ONE (for update)
app.get("/get/:id", async (req, res) => {
  const data = await BlogModel.findById(req.params.id);
  res.json(data);
});

// UPDATE
app.put("/update/:id", async (req, res) => {
  await BlogModel.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
});

// DELETE
app.delete("/delete/:id", async (req, res) => {
  await BlogModel.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
