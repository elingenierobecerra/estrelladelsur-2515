import { pool } from "../../config/db_mysql.js";

export const crearUsuario = (req, res)=>{
    console.log(req.body);
    let nombre = req.body.name;

    res.json({
        "respuesta":"Esto es un post para agregar "+ nombre 
    })
}


export const mostrarUsuario = async(req, res)=>{

    try {
        
        const resultado = await pool.query("select * from usuario");
        res.json(resultado[0]);

    } catch (error) {
        res.json({
            "error":error,
            "method": "get"
        })
    }

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