class EstoqueRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll(query = {}) {
    return this.model.find(query);
  }

  async create(data) {
    return this.model.create(data);
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async update(id, data) {
    // retorna o documento atualizado (ou null)
    return this.model.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  }

  async delete(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = EstoqueRepository;
