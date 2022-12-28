const crypto = require("crypto");
const getCandidateHash = (data) => crypto.createHash("sha3-512").update(data).digest("hex");
exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event && event.partitionKey) {
    candidate = typeof event.partitionKey !== "string" ? JSON.stringify(candidate) : event.partitionKey
  } else if (event) {
    const data = JSON.stringify(event);
    candidate = getCandidateHash(data)
  }

  candidate = `${candidate}`.length > MAX_PARTITION_KEY_LENGTH && getCandidateHash(candidate)
  
  return candidate;
 
};