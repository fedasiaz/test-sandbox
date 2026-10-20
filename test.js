const assert = require('node:assert');
const fetch = require('node-fetch');

(async () => {
  try {
    const res = await fetch('https://example.com');
    assert.strictEqual(res.status, 200, 'Expected status 200');
    console.log('Test passed!');
  } catch (e) {
    console.error('Test failed:', e.message);
    process.exit(1);
  }
})();