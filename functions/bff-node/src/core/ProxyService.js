const { getBaseUrl } = require("./environment");
const httpClient = require("../utils/httpClient");
const { logInfo } = require("../utils/logger");

class ProxyService {
  constructor() {
    this.validServices = ["alugueis", "estoques"];
  }

  getServiceFromUrl(url) {
    const parts = url.split("/").filter(Boolean);
    return this.validServices.find((p) => parts.includes(p));
  }

  buildTargetUrl(service, url) {
    const parts = url.split("/").filter(Boolean);
    const index = parts.indexOf(service);
    const pathAfter = parts.slice(index + 1).join("/");
    return `${getBaseUrl(service)}/${pathAfter}`.replace(/\/$/, "");
  }

  async forwardRequest(req) {
    const service = this.getServiceFromUrl(req.originalUrl);
    if (!service) throw new Error("Serviço inválido");

    const targetUrl = this.buildTargetUrl(service, req.originalUrl);
    logInfo(`${req.method} → ${targetUrl}`);

    return httpClient({
      method: req.method,
      url: targetUrl,
      params: req.query,
      data: req.body,
      headers: { ...req.headers, host: undefined },
    });
  }
}

module.exports = ProxyService;
