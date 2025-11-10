import { Box, Typography, Paper, Button, Grid, TextField } from "@mui/material";

function GerenciarEstoques() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Gerenciar Estoques
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        Visualize, edite e acompanhe seus estoques de forma prática e rápida.
      </Typography>

      {/* Filtro de busca */}
      <Paper sx={{ p: 2, mt: 2, mb: 3 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField fullWidth label="Buscar por nome ou código" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button fullWidth variant="contained">Buscar</Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Lista mockada */}
      <Grid container spacing={3}>
        {[1, 2, 3].map((i) => (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <Paper
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
              elevation={3}
            >
              <Typography variant="h6">Estoque {i}</Typography>
              <Typography variant="body2" color="text.secondary">
                Localização: São Paulo - SP
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Tamanho: 120 m²
              </Typography>
              <Typography variant="body2">R$ 2500 / mês</Typography>
              <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                <Button variant="contained" color="primary" fullWidth>
                  Editar
                </Button>
                <Button variant="outlined" color="error" fullWidth>
                  Excluir
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GerenciarEstoques;
