const express = require("express");
const router = express.Router();
const cors = require("cors");
const suma = require("./suma");

const app = express();
const PORT = 4500;

app.use(cors());

router.get("/", function (req, res, next) {
  res.json({ hola: "el pepe" });
});

router.get("/:a/:b", function (req, res, next) {
  res.json({ result: suma(req.params.a , req.params.b) });
});

app.use("/", router);
app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
