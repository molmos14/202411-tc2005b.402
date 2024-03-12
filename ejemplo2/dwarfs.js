const http = require ('http');

const PORT = 8080;
const IP = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('I am Groot');
});

server.listen(PORT, IP, () => {
    console.log(`Server running at http://${IP}:${PORT}/`);
});
