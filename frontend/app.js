const axios = require('axios');
const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});
readline.question('Ask: ', async (q) => {
    const r = await axios.post('http://localhost:8000/ask', { question: q });
    console.log('Answer:', r.data.answer);
    readline.close();
});
