const EstoqueRepository = require("../../../src/features/estoque/estoqueRepository");

describe("🧱 EstoqueRepository", () => {
  const mockModel = {
    find: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  };

  const repo = new EstoqueRepository(mockModel);

  beforeEach(() => jest.clearAllMocks());

  test("findAll deve chamar model.find com o filtro correto", async () => {
    mockModel.find.mockResolvedValue([{ nome: "Galpão 1" }]);
    const result = await repo.findAll({ status: "disponivel" });
    expect(mockModel.find).toHaveBeenCalledWith({ status: "disponivel" });
    expect(result[0].nome).toBe("Galpão 1");
  });

  test("create deve chamar model.create", async () => {
    mockModel.create.mockResolvedValue({ codigo: "A1" });
    const result = await repo.create({ codigo: "A1" });
    expect(mockModel.create).toHaveBeenCalledWith({ codigo: "A1" });
    expect(result.codigo).toBe("A1");
  });

  test("findById deve chamar model.findById", async () => {
    mockModel.findById.mockResolvedValue({ nome: "Galpão A" });
    const result = await repo.findById("123");
    expect(mockModel.findById).toHaveBeenCalledWith("123");
    expect(result.nome).toBe("Galpão A");
  });

  test("update deve chamar findByIdAndUpdate corretamente", async () => {
    mockModel.findByIdAndUpdate.mockResolvedValue({ nome: "Atualizado" });
    const result = await repo.update("123", { nome: "Atualizado" });
    expect(mockModel.findByIdAndUpdate).toHaveBeenCalledWith("123", { nome: "Atualizado" }, { new: true, runValidators: true });
    expect(result.nome).toBe("Atualizado");
  });

  test("delete deve chamar findByIdAndDelete", async () => {
    await repo.delete("123");
    expect(mockModel.findByIdAndDelete).toHaveBeenCalledWith("123");
  });
});
