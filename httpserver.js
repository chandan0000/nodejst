const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>this is chandan</h1><p>hey this is the way to rock the world!</p>');
})
server.listen(port, () => {
    console.log(`server is listen on port ${port}`);
})