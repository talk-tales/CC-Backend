const express = require("express");
const router = express.Router();
const Response = require("../lib/response");
const authController = require("../controller/authController");
const { Prisma } = require("@prisma/client");

router.post("/login", async (req, res) => {
    try {
        let login = await authController.loginUser(req.body);
        if (login) {
            res.status(200).json(Response.make(true, "Berhasil Login", login));
        }
    } catch (err) {
        res.status(400).json(Response.make(false, err.message, null));
    }
});

router.post("/register", async (req, res) => {
    try {
        let { name, email, password } = req.body;

        if (name && email && password) {
            let user = await authController.registerUser(req.body);
            if (user) {
                res.status(201).json(
                    Response.make(true, "Berhasil registrasi user", user)
                );
            }
        } else {
            throw new Error("Nama, Email atau Password Tidak Lengkap!");
        }
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            res.status(400).json(
                Response.make(false, "Email sudah ada!", null)
            );
        } else {
            res.status(400).json(Response.make(false, err.message, null));
        }
    }
});

module.exports = router;
