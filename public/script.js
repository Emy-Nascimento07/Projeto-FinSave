const form = document.getElementById("myForm");
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Coleta os valores dos campos do formulário
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const nivelConhecimento = document.getElementById("nivel-conhecimento").value;
  const dataNascimento = document.getElementById("data-nascimento").value;
  const objetivoFinanceiro = document.getElementById("objetivo-financeiro").value;
  const mensagem = document.getElementById("mensagem").value;
  const termos = document.getElementById("termos").checked;

  // Cria um objeto JSON com os dados
  const dadosForm = {
    nome: nome,
    telefone: telefone,
    email: email,
    nivelConhecimento: nivelConhecimento,
    dataNascimento: dataNascimento,
    objetivoFinanceiro: objetivoFinanceiro,
    mensagem: mensagem,
    termos: termos
  };

  //Enviar o objeto JSON para o servidor usando Fetch API
  try {
    const response = await fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dadosForm),
    });

    if (response.ok) {
      alert("Formulário enviado com sucesso.");
    } else {
      alert("Erro ao enviar formulário.");
    }
  } catch (error) {
    console.error("Erro: ", error);
    alert("Erro ao enviar o formulário.");
  }
});
