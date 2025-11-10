import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront'
import InventoryIcon from '@mui/icons-material/Inventory'
import AddBusinessIcon from '@mui/icons-material/AddBusiness'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  const handleGerenciarEstoques = () => {
    navigate('/gerenciar');
  };

  const handleCadastrarEstoque = () => {
    navigate('/cadastrar');
  };

  const handleEstoquesDisponiveis = () => {
    navigate('/disponiveis');
  };

  return (
    <Box 
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f9fafc',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Cabeçalho */}
      <Box
        sx={{
          backgroundColor: '#1976d2',
          color: 'white',
          py: 3,
          textAlign: 'center',
          boxShadow: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          101 Estoques
        </Typography>
        <Typography variant="subtitle1">
          Solução inteligente para gerenciamento e aluguel de estoques
        </Typography>
      </Box>

      {/* Conteúdo principal */}
      <Container sx={{ flexGrow: 1, py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
              }}
            >
              <InventoryIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Gerenciar Estoques
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Visualize, edite e acompanhe seus estoques de forma prática e rápida.
              </Typography>
              <Button variant="contained" onClick={handleGerenciarEstoques} fullWidth>
                Acessar
              </Button>
            </Paper>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
              }}
            >
              <AddBusinessIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Cadastrar Novo Estoque
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Adicione um novo estoque disponível para aluguel em poucos cliques.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleCadastrarEstoque} fullWidth>
                Cadastrar
              </Button>
            </Paper>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                textAlign: 'center',
                transition: '0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 },
              }}
            >
              <StorefrontIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Estoques Disponíveis
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Encontre e alugue espaços de estoque disponíveis em diversas regiões.
              </Typography>
              <Button variant="contained" color="secondary" onClick={handleEstoquesDisponiveis} fullWidth>
                Ver Estoques
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Home
