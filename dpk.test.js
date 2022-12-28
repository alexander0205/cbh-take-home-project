const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
  
  it("should return a hash of the event data if the event does not have a partitionKey property", () => {
    const event = { data: "abc" };
    expect(deterministicPartitionKey(event)).toMatch(/^[0-9a-f]{128}$/);
  });
 
  it("should return a trivial partition key if the event is falsy", () => {
    expect(deterministicPartitionKey(null)).toBe("0");
  });
});
