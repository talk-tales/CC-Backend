const express = require("express");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth.middleware");
const convRoutes = require("./routes/conversation");
const prisma = require("./lib/prisma");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

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

app.get("/testmodel", (req, res) => {
    res.send("req.error");
});
app.get("/testauth", authMiddleware, (req, res) => {
    res.send(req.user);
});
app.get("/dataset", async (req, res) => {
    let data = await prisma.Dataset.findMany({});
    res.send(data);
});

app.post("/dataset", async (req, res) => {
    try {
        const file = req.body.filename;
        const label = req.body.label;
        let insert = await prisma.Dataset.create({
            data: {
                filename: file,
                label: label,
            },
        });
        res.status(200).send(insert);
    } catch (error) {
        res.status(500).send(`Failed to upload file: ${error.message}`);
    }
});

app.get("/", (req, res) => {
    res.send("Hello Talk Tales!");
});

app.listen(PORT, async () => {
    console.log(`Server running at port : ${PORT}`);
});
