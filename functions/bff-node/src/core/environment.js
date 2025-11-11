const isLocal = process.env.FUNCTIONS_EMULATOR === "true";
const project = process.env.GCLOUD_PROJECT || "seu-projeto";
const region = process.env.FUNCTION_REGION || "us-central1";

function getBaseUrl(service) {
  if (isLocal) {
    return `http://127.0.0.1:5001/${project}/${region}/${service}`;
  }
  return `https://${region}-${project}.cloudfunctions.net/${service}`;
}

module.exports = { isLocal, project, region, getBaseUrl };
