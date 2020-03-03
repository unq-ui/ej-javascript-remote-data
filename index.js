const axios = require('axios');

const promise = axios.get('https://randomuser.me/api/')
  .then(request => console.log("En el then la data -> ",  request.data))
  .then(() => 1)
  .catch(error => console.log('Error', error));

console.log("Después del llamado es pending -> ", promise);

setTimeout(() => console.log('Luego de un tiempo retorna 1 ->', promise), 1500);
