const express = require("express");
const router = express.Router();
const { execFile } = require("child_process");

// GET /api/ping?host=<endereço> - diagnóstico de rede
router.get("/ping", (req, res) => {
  const { host } = req.query;
  if (!host) return res.status(400).json({ error: "Parâmetro 'host' é obrigatório" });

  // execFile não invoca o shell (sh/bash) e passa os parâmetros de forma segura em uma array
  execFile("ping", ["-c", "2", cleanHost], (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: "Falha ao executar ping", details: stderr });
    res.json({ host: cleanHost, output: stdout });
  });
});

module.exports = router;