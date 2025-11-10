import { useState } from 'react';
import { Box, Typography, TextField, Button, Container, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createAluguel } from '../../services/api'; // importe a função que você já tem

function CadastrarAluguel() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    estoque_id: '',
    cliente_nome: '',
    cliente_email: '',
    data_inicio: '',
    data_fim: '',
    valor_mensal: '',
    status: 'ativo'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAluguel(form); // usa a função pronta
      alert('Aluguel cadastrado com sucesso!');
      navigate('/alugueis/gerenciar');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar aluguel.');
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Cadastrar Novo Aluguel
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="ID do Estoque" name="estoque_id" value={form.estoque_id} onChange={handleChange} required />
        <TextField label="Nome do Cliente" name="cliente_nome" value={form.cliente_nome} onChange={handleChange} required />
        <TextField label="Email do Cliente" name="cliente_email" value={form.cliente_email} onChange={handleChange} type="email" required />
        <TextField label="Data de Início" name="data_inicio" value={form.data_inicio} onChange={handleChange} type="date" InputLabelProps={{ shrink: true }} required />
        <TextField label="Data de Fim" name="data_fim" value={form.data_fim} onChange={handleChange} type="date" InputLabelProps={{ shrink: true }} />
        <TextField label="Valor Mensal" name="valor_mensal" value={form.valor_mensal} onChange={handleChange} type="number" required />
        <TextField
          select
          label="Status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <MenuItem value="ativo">Ativo</MenuItem>
          <MenuItem value="finalizado">Finalizado</MenuItem>
          <MenuItem value="cancelado">Cancelado</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Cadastrar</Button>
      </Box>
    </Container>
  );
}

export default CadastrarAluguel;
