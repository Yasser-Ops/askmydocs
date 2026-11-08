import express from "express";

const app = express();

app.get ("/api/health", (req, res) => {
  res.json({ status: "ok" });
}
);
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});