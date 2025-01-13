//create web server
//create a web server that listens on port 3000
//when a request is received, the server should respond with the contents of the 'comments.json' file
//if the file doesn't exist, the server should respond with a 404 status code and the text 'Not Found'
//if there is an error reading the file, the server should respond with a 500 status code and the text 'Internal Server Error'
//use the 'http' module to create the server
//use the 'fs' module to read the file
//use the 'path' module to construct the path to the file
//use the 'process' object to get the current working directory
//use the 'console' object to log the error message to the console
//use the 'JSON.stringify()' function to convert the file contents to a JSON string
//use the 'res.end()' method to send the response to the client
//use the 'res.writeHead()' method to set the status code and content type of the response
//use the 'res.write()' method to send the response to the client
//use the 'fs.readFile()' method to read the file
//use the 'path.join()' method to construct the path to the file
//nothing else worked for this tutorial