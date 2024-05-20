const bcrypt = require("bcrypt");
const saltRounds = 10;
const prisma = require("../lib/prisma");

function registerUser(data) {
    let { email, name, password } = data;
    let hashedPassword = bcrypt.hashSync(password, saltRounds);
    prisma.User.create({
        data: {},
    });
    return;
}
