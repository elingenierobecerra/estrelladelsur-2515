import express from "express";

const app = express();

// RUTAS
app.get("/", (req, res)=>{
    res.send("Hola humanos");
});

app.get("/gallery", (req, res)=>{
    res.send("Bienvenidos a mis fotos");
});

app.get("/usuario", (req, res)=>{
    res.json({"mensaje":"Ingresa tus datos basicos"});
});

export default app;