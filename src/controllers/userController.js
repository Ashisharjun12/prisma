import prisma from "../config/db.js";

const createUser = async (res, req, next) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({ where: { email } });

  if (findUser) {
    return res.status(400).json({ message: "email already exist" });
  }
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });

  return res.json({ status: success, message: "user created", user });
};

export { createUser };
