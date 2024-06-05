const express = require("express");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth.middleware");
const convRoutes = require("./routes/conversation");

require("dotenv").config();

const PORT = process.env.PORT || 8080;
const app = express();
const storyRouter = require("./routes/story");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(busboy());

app.use("/auth", authRoutes);
app.use("/story", authMiddleware, storyRouter);
app.use("/conversation", authMiddleware, convRoutes);

app.get("/testauth", authMiddleware, (req, res) => {
    res.send(req.user);
});

app.get("/", (req, res) => {
    res.send("Hello Talk Tales!");
});

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
});
