import { Box, Typography, Button, Container, Grid, Paper } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HistoryIcon from '@mui/icons-material/History';
import { useNavigate } from 'react-router-dom';

function Alugueis() {
  const navigate = useNavigate();

  const handleGerenciarAlugueis = () => {
    navigate('/alugueis/gerenciar');
  };

  const handleCadastrarAluguel = () => {
    navigate('/alugueis/cadastrar');
  };

  const handleHistoricoAlugueis = () => {
    navigate('/alugueis/historico');
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
          Gerencie e acompanhe os aluguéis de estoques de forma prática
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
              <AssignmentIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Gerenciar Aluguéis
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Visualize, edite e acompanhe os aluguéis ativos de seus estoques.
              </Typography>
              <Button variant="contained" onClick={handleGerenciarAlugueis} fullWidth>
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
              <AddCircleIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Cadastrar Novo Aluguel
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Adicione um novo aluguel para um estoque disponível.
              </Typography>
              <Button variant="contained" color="primary" onClick={handleCadastrarAluguel} fullWidth>
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
              <HistoryIcon sx={{ fontSize: 50, color: '#1976d2', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Histórico de Aluguéis
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Acompanhe os aluguéis finalizados e cancelados de forma detalhada.
              </Typography>
              <Button variant="contained" color="secondary" onClick={handleHistoricoAlugueis} fullWidth>
                Ver Histórico
              </Button>
            </Paper>
          </Grid>

        </Grid>
      </Container>

      
    </Box>
  );
}

export default Alugueis;
