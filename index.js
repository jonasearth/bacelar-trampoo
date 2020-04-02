const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const http = require("http");
const port = 3000;
const app = express();
const server = http.Server(app);
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port);
