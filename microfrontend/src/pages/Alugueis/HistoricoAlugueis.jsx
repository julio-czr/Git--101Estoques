import { useEffect, useState } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { getAlugueis } from '../../services/api'; // ajuste o caminho

function HistoricoAlugueis() {
  const [alugueis, setAlugueis] = useState([]);

  useEffect(() => {
    fetchAlugueis();
  }, []);

  const fetchAlugueis = async () => {
    try {
      const response = await getAlugueis();
      const data = Array.isArray(response.data) ? response.data : [];
      setAlugueis(data.filter(a => a.status !== 'ativo'));
    } catch (error) {
      console.error(error);
      alert('Erro ao buscar aluguéis.');
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Histórico de Aluguéis
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Estoque ID</TableCell>
            <TableCell>Cliente</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Data Início</TableCell>
            <TableCell>Data Fim</TableCell>
            <TableCell>Valor Mensal</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alugueis.length > 0 ? (
            alugueis.map(a => (
              <TableRow key={a.id}>
                <TableCell>{a.estoque_id}</TableCell>
                <TableCell>{a.cliente_nome}</TableCell>
                <TableCell>{a.cliente_email}</TableCell>
                <TableCell>{a.data_inicio}</TableCell>
                <TableCell>{a.data_fim || '-'}</TableCell>
                <TableCell>{a.valor_mensal}</TableCell>
                <TableCell>{a.status}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} align="center">
                Nenhum aluguel finalizado encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}

export default HistoricoAlugueis;
