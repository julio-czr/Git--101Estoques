import { Typography, Grid, Paper } from '@mui/material'

function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Bem-vindo ao 101Estoques
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Sistema de gerenciamento de estoques e aluguéis
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Estoques</Typography>
          <Typography>
            Gerencie seus estoques de forma eficiente. Adicione, edite e remova itens do estoque.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6">Aluguéis</Typography>
          <Typography>
            Controle os aluguéis de seus itens. Acompanhe status, datas e disponibilidade.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Home