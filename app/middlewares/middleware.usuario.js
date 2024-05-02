import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

export const tokenSign = (data) =>{ //Para crear token
    return jwt.sign({
        correo : data.correo,
        contrasena : data.contrasena,
        firma : "becerra"
    },process.env.JWT_SECRET,
    {
        expiresIn : process.env.JWT_TIMEEXPIRE
    })
}
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}