const makeUseCases = require("../../../src/features/aluguel/aluguelUseCases");

describe("⚙️ AluguelUseCases", () => {
  const mockRepo = {
    findAll: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const useCases = makeUseCases(mockRepo);

  beforeEach(() => jest.clearAllMocks());

  test("listar deve chamar repo.findAll corretamente", async () => {
    mockRepo.findAll.mockResolvedValue([{ cliente_nome: "João" }]);
    const result = await useCases.listar({ status: "ativo" });
    expect(mockRepo.findAll).toHaveBeenCalledWith({ status: "ativo" });
    expect(result[0].cliente_nome).toBe("João");
  });

  test("criar deve lançar erro se faltar campo obrigatório", async () => {
    await expect(useCases.criar({})).rejects.toThrow("Campos obrigatórios ausentes");
  });

  test("criar deve chamar repo.create com dados válidos", async () => {
    const payload = {
      estoque_id: "E1",
      cliente_nome: "Lucas",
      cliente_email: "lucas@email.com",
      data_inicio: "2025-01-01",
      valor_mensal: 1200,
    };
    mockRepo.create.mockResolvedValue(payload);
    const result = await useCases.criar(payload);
    expect(mockRepo.create).toHaveBeenCalledWith(payload);
    expect(result.estoque_id).toBe("E1");
  });

  test("buscar deve lançar erro se não encontrado", async () => {
    mockRepo.findById.mockResolvedValue(null);
    await expect(useCases.buscar(1)).rejects.toThrow("Aluguel não encontrado");
  });

  test("atualizar deve lançar erro se não existir", async () => {
    mockRepo.findById.mockResolvedValue(null);
    await expect(useCases.atualizar(1, {})).rejects.toThrow("Aluguel não encontrado");
  });

  test("deletar deve chamar delete se encontrado", async () => {
    mockRepo.findById.mockResolvedValue({ id: 1 });
    await useCases.deletar(1);
    expect(mockRepo.delete).toHaveBeenCalledWith(1);
  });
});
