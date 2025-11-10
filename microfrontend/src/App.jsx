import { Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './pages/Home'
import Estoques from './pages/Estoques/Estoques'
import Alugueis from './pages/Alugueis/Alugueis'
import GerenciarEstoques from './pages/Estoques/GerenciarEstoques'
import CadastrarEstoque from './pages/Estoques/CadastrarEstoque'
import EstoquesDisponiveis from './pages/Estoques/EstoquesDisponiveis'
import CadastrarAluguel from './pages/Alugueis/CadastrarAluguel.jsx'
import GerenciarAlugueis from './pages/Alugueis/GerenciarAlugueis.jsx'
import HistoricoAlugueis from './pages/Alugueis/HistoricoAlugueis.jsx'
import Layout from "./components/Layout/index.jsx";


function App() {
  return (
    <>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            
            <Route path="/estoques" element={<Estoques />} />
            <Route path="/gerenciar" element={<GerenciarEstoques />} />
            <Route path="/cadastrar" element={<CadastrarEstoque />} />
            <Route path="/disponiveis" element={<EstoquesDisponiveis />} />

            <Route path="/alugueis" element={<Alugueis />} />
            <Route path="/alugueis/cadastrar" element={<CadastrarAluguel />} />
            <Route path="/alugueis/gerenciar" element={<GerenciarAlugueis />} />
            <Route path="/alugueis/historico" element={<HistoricoAlugueis />} />
          </Route>
        </Routes>
    </>
  )
}

export default App