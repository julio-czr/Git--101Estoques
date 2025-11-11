const makeController = require("../../../src/features/aluguel/aluguelController");

describe("🧠 AluguelController", () => {
  const mockUseCases = {
    listar: jest.fn(),
    criar: jest.fn(),
    buscar: jest.fn(),
    atualizar: jest.fn(),
    deletar: jest.fn(),
  };

  const controller = makeController(mockUseCases);

  const mockRes = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  beforeEach(() => jest.clearAllMocks());

  test("listarAlugueis retorna 200 com lista", async () => {
    const req = { query: {} };
    const res = mockRes();
    mockUseCases.listar.mockResolvedValue([{ id: 1 }]);
    await controller.listarAlugueis(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([{ id: 1 }]);
  });

  test("criarAluguel retorna 201 com objeto criado", async () => {
    const req = { body: { cliente_nome: "Maria" } };
    const res = mockRes();
    mockUseCases.criar.mockResolvedValue({ id: 1 });
    await controller.criarAluguel(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ data: { id: 1 } });
  });

  test("buscarAluguel retorna 200 se encontrado", async () => {
    const req = { params: { id: "1" } };
    const res = mockRes();
    mockUseCases.buscar.mockResolvedValue({ id: 1 });
    await controller.buscarAluguel(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test("atualizarAluguel retorna 200 se sucesso", async () => {
    const req = { params: { id: "1" }, body: { status: "finalizado" } };
    const res = mockRes();
    mockUseCases.atualizar.mockResolvedValue({ id: 1, status: "finalizado" });
    await controller.atualizarAluguel(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
  });

  test("deletarAluguel retorna 204", async () => {
    const req = { params: { id: "1" } };
    const res = mockRes();
    mockUseCases.deletar.mockResolvedValue();
    await controller.deletarAluguel(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
    expect(res.send).toHaveBeenCalled();
  });
});
