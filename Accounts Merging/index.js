const accounts = require('./accounts.json');
const accountsMerge = require('./merge');

const result = accountsMerge(accounts);

console.log(JSON.stringify(result, null , 2));