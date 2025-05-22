import jwt from "jsonwebtoken";
import "dotenv/config";
export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt",token,{
    maxAge : 7*24*60*60*1000, // expires in 7 days(it takes value in milliseconds)
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    sameSite : "strict", // prevent CSRF(cross-site request forgery) attacks
    secure : process.env.NODE_ENV !== "development"
  });
  return token;
};
