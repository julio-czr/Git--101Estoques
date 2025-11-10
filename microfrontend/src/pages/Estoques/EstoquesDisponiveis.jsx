import { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, Button } from "@mui/material";

function EstoquesDisponiveis() {
  const [estoques, setEstoques] = useState([]);

  // Busca os estoques da API
  useEffect(() => {
    const fetchEstoques = async () => {
      try {
        const response = await fetch("/api/estoques/");
        const data = await response.json();
        setEstoques(data);
      } catch (error) {
        console.error("❌ Erro ao buscar estoques:", error);
      }
    };
    fetchEstoques();
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Estoques Disponíveis 
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Encontre e alugue espaços de estoque disponíveis em diversas regiões.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {estoques.length === 0 ? (
          <Typography sx={{ m: 2 }}>Nenhum estoque disponível no momento.</Typography>
        ) : (
          estoques.map((estoque) => (
            <Grid item xs={12} sm={6} md={4} key={estoque._id}>
              <Paper
                sx={{
                  p: 3,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
                elevation={3}
              >
                <Typography variant="h6">{estoque.nome}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Localização: {estoque.localizacao}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Tamanho: {estoque.tamanho_m2} m²
                </Typography>
                <Typography variant="body2">
                  R$ {estoque.preco_mensal.toLocaleString("pt-BR")} / mês
                </Typography>
                <Button
                  sx={{ mt: 2 }}
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Ver detalhes
                </Button>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
}

export default EstoquesDisponiveis;
