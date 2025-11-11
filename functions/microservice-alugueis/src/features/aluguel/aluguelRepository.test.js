const AluguelRepository = require("../../../src/features/aluguel/aluguelRepository");

describe("🧱 AluguelRepository", () => {
  const mockModel = {
    findAll: jest.fn(),
    create: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  };

  const repo = new AluguelRepository(mockModel);

  beforeEach(() => jest.clearAllMocks());

  test("findAll deve chamar model.findAll com filtro correto", async () => {
    mockModel.findAll.mockResolvedValue([{ cliente_nome: "João" }]);
    const result = await repo.findAll({ status: "ativo" });
    expect(mockModel.findAll).toHaveBeenCalledWith({ where: { status: "ativo" } });
    expect(result[0].cliente_nome).toBe("João");
  });

  test("create deve chamar model.create", async () => {
    const payload = { cliente_nome: "Maria" };
    mockModel.create.mockResolvedValue(payload);
    const result = await repo.create(payload);
    expect(mockModel.create).toHaveBeenCalledWith(payload);
    expect(result.cliente_nome).toBe("Maria");
  });

  test("findById deve chamar model.findByPk", async () => {
    mockModel.findByPk.mockResolvedValue({ id: 1 });
    const result = await repo.findById(1);
    expect(mockModel.findByPk).toHaveBeenCalledWith(1);
    expect(result.id).toBe(1);
  });

  test("update deve retornar true se atualizado", async () => {
    mockModel.update.mockResolvedValue([1]);
    const result = await repo.update(1, { status: "finalizado" });
    expect(mockModel.update).toHaveBeenCalledWith({ status: "finalizado" }, { where: { id: 1 } });
    expect(result).toBe(true);
  });

  test("delete deve retornar true se deletado", async () => {
    mockModel.destroy.mockResolvedValue(1);
    const result = await repo.delete(1);
    expect(mockModel.destroy).toHaveBeenCalledWith({ where: { id: 1 } });
    expect(result).toBe(true);
  });
});
