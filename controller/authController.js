const bcrypt = require("bcrypt");
const saltRounds = 10;
const prisma = require("../lib/prisma");
const jwt = require("jsonwebtoken");

async function registerUser(data) {
    let { email, name, password } = data;
    let hashedPassword = bcrypt.hashSync(password, saltRounds);
    let user = await prisma.User.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
}

async function loginUser(data) {
    let { email, password } = data;
    let user = await prisma.User.findUnique({
        where: {
            email: email,
        },
        select: {
            id: true,
            name: true,
            email: true,
            password: true,
        },
    });

    if (user) {
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (comparePassword) {
            let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
            return {
                token,
                user: {
                    name: user.name,
                    email: user.email,
                },
            };
        }
        throw new Error("Password salah!");
    }
    throw new Error("Akun tidak ditemukan");
}

module.exports = {
    registerUser,
    loginUser,
};
