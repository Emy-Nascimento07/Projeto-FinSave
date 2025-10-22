const { error } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

//Configuração para servir arquivos estáticos na pasta public
app.use(express.static(path.join(__dirname, "public")));

//Middleware para processar dados JSON
app.use(express.json());

//Rota para a página inicial (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota para envio do formulário
app.post("/submit-form", (req, res) => {
  const dadosForm = req.body;
  const nomeArquivo = `formulario-${dadosForm.nome}.json`;
  const caminhoArquivo = path.join(__dirname, "formularios", nomeArquivo);

  fs.writeFile(caminhoArquivo, JSON.stringify(dadosForm, null, 2), (error) => {
    if (error) {
      console.error("Erro ao salvar o arquivo:", error);
      return res.status(500).send("Erro ao salvar o formulário");
    }
    res.status(200).send("Fromulário salvo com sucesso!");
  });
});

console.log("!!! ALERTA: A ROTA /submit-form FOI ACIONADA !!!");

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}.`);
});
