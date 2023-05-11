const router = require("express").Router();
const fibonacci = require("./fibonacci");

router.get("/api/v1/calculate", (req, res) => {
  try {
    const value = parseInt(req.query.value);
    return res.status(200).json({
      originalValue: `your query is, ${
        req.query.value
      } and result is ${fibonacci(value)}`,
    });
  } catch (e) {
   res.status(422).json({message: 'Invalid query param', value: req.query.value}); 
  }
});

router.get("/", (_req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

module.exports = router;
