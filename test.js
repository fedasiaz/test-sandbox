async function run() {
  const fetch = (await import('node-fetch')).default;
  const response = await fetch('https://api.github.com');
  if (!response.ok) {
    throw new Error('Test failed: network request failed');
  }
  console.log('Test passed');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
