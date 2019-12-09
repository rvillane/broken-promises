
async function toUpper(items) {
  return items.map((i) => i.toUpperCase());
}

async function toLower(items) {
  return items.map((i) => i.toLowerCase());
}

async function reverse(items) {
  return items.map((i) => [...i].reverse().join(''));
}

async function getData() {
  return ['tEsT', 'HeLlO', 'wOrLd'];
}

getData()
  .then(toUpper)
  .then(toLower)
  .then(reverse)
  .then(console.log);
