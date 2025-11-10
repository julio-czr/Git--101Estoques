{/* Rodapé */}
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
        <Box
        sx={{
          py: 2,
          textAlign: 'center',
          backgroundColor: '#e3f2fd',
          color: 'text.secondary',
        }}
      >
        <Typography variant="caption">
          © {new Date().getFullYear()} AlugaEstoque — Todos os direitos reservados
        </Typography>
      </Box>
    </>
  );
}

