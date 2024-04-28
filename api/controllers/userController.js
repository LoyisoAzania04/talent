import prisma from "../utils/prisma.js";

export const addUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    await prisma.user.create({
      data: { name, email },
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const editUser = async (req, res, next) => {
  try {
    const { phone, department, id, role, title } = req.body;

    await prisma.user.update({
      where: { id },
      data: { phone, department, role, title },
    });

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: [{ name: "desc" }],
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getUserInfo = async (req, res, next) => {
  try {
    const { email } = req.params;
    const userData = await prisma.user.findFirst({
      where: { email },
    });

    return res.status(200).json(userData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};







































/*(req, res) =>{
    res.status(200).json(menuItems);
}*/
