const express = require("express");
const authRoutes = require("./routes/auth");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Hello Talk Tales!");
});

app.listen(PORT, () => {
    console.log(`Server running at port : ${PORT}`);
});
