const http = require('http')
const fs = require('fs')
const config = require('./config.json');
const { Console } = require('console');
const { text } = require('d3');
const port = config.webserver.port;

console.log('NodeHostMU from mhjwass')

const server =  http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/html '} )
    fs.readFile(config.webserver.directory + '/index.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('File not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong.', error)
    }else{
        console.log('Server is listening on port ' + port)
    }
})