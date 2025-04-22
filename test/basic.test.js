const assert = require('assert');

describe('Basic Test Suite', () => {
  it('should pass a simple test', () => {
    assert.strictEqual(1 + 1, 2);
  });

  it('should handle string operations', () => {
    const str = 'Hello MCP!';
    assert.strictEqual(str.length, 10);
    assert.strictEqual(str.toUpperCase(), 'HELLO MCP!');
  });
});