class AluguelRepository {
  constructor(model) {
    this.model = model;
  }

  async findAll(where = {}) {
    return this.model.findAll({ where });
  }

  async create(data) {
    return this.model.create(data);
  }

  async findById(id) {
    return this.model.findByPk(id);
  }

  async update(id, data) {
    const [updated] = await this.model.update(data, { where: { id } });
    return updated === 1;
  }

  async delete(id) {
    const deleted = await this.model.destroy({ where: { id } });
    return deleted === 1;
  }
}

module.exports = AluguelRepository;
