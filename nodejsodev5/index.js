const http = require('http');
const urls = ['INDEX','HAKKIMDA','İLETİŞİM'];

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200 , {'Content-Type': 'text/html; charset=utf-8'});
        res.write(`<h2>${urls[0]} SAYFASINA HOŞ GELDİNİZ</h2>`);
    }
    else if (url === '/about') {
        res.writeHead(200 , {'Content-Type': 'text/html; charset=utf-8'});
        res.write(`<h2>${urls[1]} SAYFASINA HOŞ GELDİNİZ</h2>`);
    }
    else if (url === '/contact') {
        res.writeHead(200 , {'Content-Type': 'text/html; charset=utf-8'});
        res.write(`<h2>${urls[2]} SAYFASINA HOŞ GELDİNİZ</h2>`);
    } else {
        res.writeHead(404 , {'Content-Type': 'text/html; charset=utf-8'});
        res.write('<h1>404 SAYFA BULUNAMADI</h1>')
    }
    res.end();   
});

const port = 5000;

server.listen(port);

