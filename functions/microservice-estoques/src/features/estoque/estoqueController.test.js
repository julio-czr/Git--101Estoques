const makeEstoqueController = require("../../../src/features/estoque/estoqueController");

describe("🧠 EstoqueController", () => {
  const mockUseCases = {
    listar: jest.fn(),
    criar: jest.fn(),
    buscar: jest.fn(),
    atualizar: jest.fn(),
    deletar: jest.fn(),
  };

  const controller = makeEstoqueController(mockUseCases);

  const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  beforeEach(() => jest.clearAllMocks());

  test("listarEstoques retorna status 200 e resultado", async () => {
    const req = { query: {} };
    const res = mockRes();
    mockUseCases.listar.mockResolvedValue([{ nome: "Galpão X" }]);
    await controller.listarEstoques(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ nome: "Galpão X" }]);
  });

  test("criarEstoque retorna 201 se sucesso", async () => {
    const req = { body: { codigo: "A1" } };
    const res = mockRes();
    mockUseCases.criar.mockResolvedValue({ codigo: "A1" });
    await controller.criarEstoque(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ codigo: "A1" });
  });

  test("buscarEstoque retorna 200 se encontrado", async () => {
    const req = { params: { id: "123" } };
    const res = mockRes();
    mockUseCases.buscar.mockResolvedValue({ nome: "Galpão Y" });
    await controller.buscarEstoque(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test("atualizarEstoque retorna 200 se atualizado", async () => {
    const req = { params: { id: "123" }, body: { nome: "Novo" } };
    const res = mockRes();
    mockUseCases.atualizar.mockResolvedValue({ nome: "Novo" });
    await controller.atualizarEstoque(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test("deletarEstoque retorna 204 se deletado", async () => {
    const req = { params: { id: "123" } };
    const res = mockRes();
    mockUseCases.deletar.mockResolvedValue();
    await controller.deletarEstoque(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });
});
