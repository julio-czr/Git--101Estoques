function logInfo(message, ...args) {
  console.log(`[INFO] ${message}`, ...args);
}

function logError(message, ...args) {
  console.error(`[ERROR] ${message}`, ...args);
}

module.exports = { logInfo, logError };
