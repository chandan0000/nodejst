const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1>this is chandan</h1><p>hey this is the way to rock the world!</p>');
    } else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>about</h1><p>hey this is the way to rock the world!</p>');
    }
    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFile('index.thml');
        res.end(data.toString());
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>about</h1><p>hey this is the way to rock the world!</p>');
    }

    else {
        res.statusCode = 404;
        res.end('<h1>404</h1><p>hey this is the way to rock the world!</p>');
    }
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html')

})
server.listen(port, () => {
    console.log(`server is listen on port ${port}`);
})