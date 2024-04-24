import { Router } from "express";
const rutaUsuario = Router();
rutaUsuario.get("/usuario", (req, res) =>{
    res.json({
        "nombre":"Julian",
        "apellido":"Vergara",
        "telefono":521252
    })
})
export default rutaUsuario;