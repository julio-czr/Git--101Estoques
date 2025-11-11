// functions/index.js
const functions = require("firebase-functions/v1");

const alugueisApp = require("./microservice-alugueis/server");
const estoquesApp = require("./microservice-estoques/server");
const bffModule = require("./bff-node/index"); // atualmente é { bff: ... }

// utilitário pra resolver handler
function resolveHandler(mod) {
  if (typeof mod === "function") return mod; // app puro
  if (mod && typeof mod.bff === "function") return mod.bff; // { bff: fn }
  if (mod && typeof mod.default === "function") return mod.default; // ESM default
  throw new Error("Módulo importado não contém um handler HTTP válido.");
}

const bffHandler = resolveHandler(bffModule);
console.log("functions: resolved bffHandler typeof =", typeof bffHandler);

exports.alugueis = functions.https.onRequest(alugueisApp);
exports.estoques = functions.https.onRequest(estoquesApp);
exports.bff = functions.https.onRequest(bffHandler);
