const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// GET endpoint
app.get("/bfhl", (req, res) => {
  res.json({ operation_code: 1 });
});

// POST endpoint
app.post("/bfhl", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({ error: "Invalid input. Expected an array." });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter(
    (item) => isNaN(item) && typeof item === "string" && item.length === 1
  );
  const highestAlphabet =
    alphabets.length > 0
      ? [alphabets.reduce((a, b) => (a.localeCompare(b) > 0 ? a : b))]
      : [];

  res.json({
    is_success: true,
    user_id: "nandavardhan_radhakrishnan_15092003",
    email: "nr3648@srmist.edu.in",
    roll_number: "RA2111028010043",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
