const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
const { isLocal, project, region } = require("./core/environment");

const app = express();
app.use(cors());
app.use(express.json());

// Healthcheck
app.get("/", (req, res) =>
  res.json({
    status: "BFF OK",
    local: isLocal,
    project,
    region,
    exemplos: ["/api/alugueis", "/api/estoques"],
  })
);

app.use(apiRoutes);

module.exports = app;
