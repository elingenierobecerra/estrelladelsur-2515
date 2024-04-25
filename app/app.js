import express from "express";
import rutaUsuario from "./routes/routes.usuario.js";
// import ruta from "./routes/index.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// RUTAS
app.get("/", (req, res)=>{
    res.send("Bienvindioa a la aplicacion de los usuairo");
});

app.use("/api", rutaUsuario);

export default app;