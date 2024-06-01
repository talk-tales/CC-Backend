const express = require("express");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth.middleware");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/auth", authRoutes);

app.get("/testauth", authMiddleware, (req, res) => {
    res.send(req.user);
});

app.get("/", (req, res) => {
    res.send("Hello Talk Tales!");
});

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
});
