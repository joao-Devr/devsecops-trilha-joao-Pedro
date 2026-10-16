const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const UPLOADS_DIR = path.join(__dirname, "..", "..", "uploads");

// GET /api/files/:filename - lê e devolve o conteúdo de um arquivo da pasta uploads/
''
router.get("/:filename", (req, res) => {

  // Remove caracteres e caminhos relativos (ex: ../) para evitar Path Traversal
  const safeFilename = path.basename(req.params.filename);
  const filePath = path.join(UPLOADS_DIR, safeFilename);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.status(404).json({ error: "Arquivo não encontrado" });
    res.type("text/plain").send(data);
  });
});

module.exports = router;