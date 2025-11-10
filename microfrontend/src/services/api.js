import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export const getEstoques = () => api.get('/api/estoques/')
export const getEstoque = (id) => api.get(`/api/estoques/${id}`)
export const createEstoque = (data) => api.post('/api/estoques/', data)
export const updateEstoque = (id, data) => api.put(`/api/estoques/${id}`, data)
export const deleteEstoque = (id) => api.delete(`/api/estoques/${id}`)

export const getAlugueis = () => api.get('/api/alugueis/')
export const getAluguel = (id) => api.get(`/api/alugueis/${id}`)
export const createAluguel = (data) => api.post('/api/alugueis/', data)
export const updateAluguel = (id, data) => api.put(`/api/alugueis/${id}`, data)
export const deleteAluguel = (id) => api.delete(`/api/alugueis/${id}`)

export const getDadosAgregados = () => api.get('/api/agregado/estoques-alugueis')