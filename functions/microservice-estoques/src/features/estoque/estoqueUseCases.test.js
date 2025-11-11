const makeEstoqueUseCases = require("../../../src/features/estoque/estoqueUseCases");

describe("⚙️ EstoqueUseCases", () => {
  const mockRepo = {
    findAll: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  const useCases = makeEstoqueUseCases(mockRepo);

  beforeEach(() => jest.clearAllMocks());

  test("listar deve chamar repo.findAll corretamente", async () => {
    mockRepo.findAll.mockResolvedValue([{ nome: "Galpão 1" }]);
    const result = await useCases.listar({ status: "disponivel" });
    expect(mockRepo.findAll).toHaveBeenCalledWith({ status: "disponivel" });
    expect(result[0].nome).toBe("Galpão 1");
  });

  test("criar deve lançar erro se campo obrigatório faltar", async () => {
    await expect(useCases.criar({})).rejects.toThrow("Campo codigo é obrigatório");
  });

  test("criar deve chamar repo.create se todos campos existirem", async () => {
    const payload = {
      codigo: "A1",
      nome: "Galpão Teste",
      tamanho_m2: 100,
      preco_mensal: 2000,
      localizacao: "SP",
    };
    mockRepo.create.mockResolvedValue(payload);
    const result = await useCases.criar(payload);
    expect(mockRepo.create).toHaveBeenCalledWith(payload);
    expect(result.nome).toBe("Galpão Teste");
  });

  test("buscar deve lançar erro se estoque não for encontrado", async () => {
    mockRepo.findById.mockResolvedValue(null);
    await expect(useCases.buscar("123")).rejects.toThrow("Estoque não encontrado");
  });

  test("atualizar deve lançar erro se não existir", async () => {
    mockRepo.findById.mockResolvedValue(null);
    await expect(useCases.atualizar("123", {})).rejects.toThrow("Estoque não encontrado");
  });

  test("deletar deve chamar delete após verificar existência", async () => {
    mockRepo.findById.mockResolvedValue({ _id: "123" });
    await useCases.deletar("123");
    expect(mockRepo.delete).toHaveBeenCalledWith("123");
  });
});
