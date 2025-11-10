import { useState } from "react";
import { Box, Typography, TextField, Button, Grid, Paper } from "@mui/material";
import { createEstoque } from "../../services/api"; // <-- importa sua função de API

function CadastrarEstoque() {
  const [formData, setFormData] = useState({
    codigo: "",
    nome: "",
    tamanho_m2: "",
    preco_mensal: "",
    localizacao: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Atualiza os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Envia para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await createEstoque(formData);
      console.log("✅ Estoque criado:", response.data);
      setMessage("Estoque cadastrado com sucesso!");
      setFormData({
        codigo: "",
        nome: "",
        tamanho_m2: "",
        preco_mensal: "",
        localizacao: "",
      });
    } catch (error) {
      console.error("❌ Erro ao cadastrar estoque:", error);
      setMessage("Erro ao cadastrar o estoque. Verifique os dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Cadastrar Novo Estoque
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Adicione um novo estoque disponível para aluguel em poucos cliques.
      </Typography>

      <Paper sx={{ p: 3, mt: 3, maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name="codigo"
                label="Código do Estoque"
                value={formData.codigo}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="nome"
                label="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="tamanho_m2"
                label="Tamanho (m²)"
                type="number"
                value={formData.tamanho_m2}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                name="preco_mensal"
                label="Preço Mensal (R$)"
                type="number"
                value={formData.preco_mensal}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                name="localizacao"
                label="Localização"
                value={formData.localizacao}
                onChange={handleChange}
                required
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                disabled={loading}
              >
                {loading ? "Cadastrando..." : "Cadastrar Estoque"}
              </Button>
            </Grid>

            {message && (
              <Grid item xs={12}>
                <Typography
                  color={message.includes("Erro") ? "error" : "success.main"}
                >
                  {message}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default CadastrarEstoque;
