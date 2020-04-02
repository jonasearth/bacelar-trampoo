const Produtores = require("./controllers/Produtores");
const { Router } = require("express");

const routes = Router();

routes.get("/produtores", Produtores.getAll);
routes.get("/produtor", Produtores.getByID);
routes.post("/produtor/search", Produtores.search);
routes.post("/produtor/att", Produtores.update);

routes.post("/produtor/add", Produtores.register);
routes.delete("/produtor/delete", Produtores.delete);

module.exports = routes;
