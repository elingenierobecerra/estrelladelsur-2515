import { pool } from "../../config/db_mysql.js";

export const crearUsuario = (req, res)=>{
    console.log(req.body);
    let nombre = req.body.name;

    res.json({
        "respuesta":"Esto es un post para agregar "+ nombre 
    })
}
export const mostrarUsuario = (req, res)=>{

    res.json({
        "nombre":"Julian",
        "apellido":"Vergara",
        "telefono":521257
    });
}
export const actulizarUsuario = (req, res)=>{

    console.log(req.body);
    let nombre = req.body.name;
    res.json({
        "respuesta":"Esta ruta es para actulizar "+ nombre 
    });

}
export const eliminarUsuario = (req, res)=>{
    console.log(req.body);
    let id = req.body.id;
    res.json({
        "respuesta":"Esta ruta es para borrar "+ id 
    });
}