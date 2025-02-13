import type { RequestHandler } from "express";
import { encodeJWT } from "../../services/jwt.helpers";

export const login: RequestHandler = async (req, res) => {
  const user = req.body;

  const token = await encodeJWT(user);

  res.cookie("auth_token", token, {
    secure: false,
    httpOnly: true,
    maxAge: 36000000,
  });

  res.status(200).json({
    message: `Bienvenue sur Intra_Sense ! Token : ${token}`,
    token: token,
    email: user.email,
  });
};
