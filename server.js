var http = require('http'),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    PORT = 80;

http.createServer(function (request, response) {

  var uri = url.parse(request.url).pathname,
      filename = path.join(process.cwd(), 'public', uri),
      mimes = {
      '.html': 'text/html',
      '.js': 'text/javascript'
    };

  fs.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    fs.readFile(filename, "binary", function(err, file) {
      if(err) {
        response.writeHead(500, {"Content-Type": "text/plain"});
        response.write(err + "\n");
        response.end();
        return;
      }

      var headers = {};
      var contentType = mimes[path.extname(filename)];
      if (contentType) headers["Content-Type"] = contentType;
      response.writeHead(200, headers);
      response.write(file, "binary");
      response.end();
    });
  });


}).listen(PORT);

console.log('Server running on port ' + PORT);
