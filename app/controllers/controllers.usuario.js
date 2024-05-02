import { pool } from "../config/db_mysql.js";

export const crearUsuario = async(req, res)=>{

    let info = req.body;

    try {
        let resultado = await pool.query(`
            insert into usuario(
                idusuario,identificacion,
                nombres,correo,
                contrasena,telefono) values
                (
                    ${info.idusuario},"${info.identificacion}",
                    "${info.nombres}","${info.correo}",
                    "${info.contrasena}","${info.telefono}"
                )
        `)

        if (resultado[0].affectedRows > 0 ){
            res.json({
                respuesta:"registro insertado"
            })
        }else{
            res.json({
                respuesta:"No inserto nada"
            })
        }
        
    } catch (error) {
        res.json({
            "error":error,
            "method": "post"
        })
    }

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
export const actulizarUsuario = async(req, res)=>{

    let info = req.body;

    try {
        let resultado = await pool.query(`
            update usuario
            set 
            identificacion = '${info.identificacion}',
            nombres = '${info.nombres}',
            correo = '${info.correo}',
            contrasena = '${info.contrasena}',
            telefono = '${info.telefono}'
            where idusuario = ${info.idusuario}
        `)

        if (resultado[0].affectedRows > 0 ){
            res.json({
                respuesta:"registro modificado"
            })
        }else{
            res.json({
                respuesta:"No modifico nada"
            })
        }
        
    } catch (error) {
        res.json({
            "error":error,
            "method": "put"
        })
    }

}
export const eliminarUsuario = async(req, res)=>{

    let info = req.body;

    try {
        let resultado = await pool.query(`
            delete from usuario
            where idusuario = ${info.idusuario}
        `)

        if (resultado[0].affectedRows > 0 ){
            res.json({
                respuesta:"registro borrado"
            })
        }else{
            res.json({
                respuesta:"No borro nada"
            })
        }
        
    } catch (error) {
        res.json({
            "error":error,
            "method": "delete"
        })
    }


}
export const loginUsuario = async(req, res)=>{
    
    let correo = req.body.correo;
    let contrasena = req.body.contrasena;

    try {
        let resultado = await pool.query(`
        select correo from usuario
        where correo = '${correo}' and contrasena = '${contrasena}'
        `);
        console.log(resultado[0]);

        if (resultado[0]==""){
            res.json({
                respuesta:"Logueo incorrecto",
                estado:false
            });
        }else{
            res.json({
                respuesta:"Logueo correcto",
                estado:true
            });
        }
    } catch (error) {
        res.json({
            respuesta:"Error en el logueo",
            type:error
        })
    }
}