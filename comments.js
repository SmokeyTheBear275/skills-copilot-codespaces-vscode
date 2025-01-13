//create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var comments = [];
var server = http.createServer(function(req, res) {
    var urlObj = url.parse(req.url, true);
    var pathname = urlObj.pathname;
    if (pathname === '/') {
        var fileContent = fs.readFileSync(path.join(__dirname, 'index.html'));
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(fileContent);
    } else if (pathname === '/submit') {
        var comment = urlObj.query;
        comments.push(comment);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else if (pathname === '/getComments') {
        var jsonStr = JSON.stringify(comments);
        res.end(jsonStr);
    } else {
        var fileContent = fs.readFileSync(path.join(__dirname, pathname));
        res.end(fileContent);
    }
});
server.listen(8080, function() {
    console.log('server is running at http://