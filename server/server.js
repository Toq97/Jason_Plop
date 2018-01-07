var http = require('http');
var fs = require('fs');

/*var luke = {
    nome: 'Luke',
    cognome: 'Skywalker'
};*/

var server = http.createServer((request, response) => {

    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    console.log(request.method);

    if(request.url === '/'){
        response.writeHead(200, 'OK', { 'content-type': 'application/json' });
        //read file
        var luke = '';
        fs.readFile('./data/luke.json', function(err, data) {
            if (err) {
                console.log('file read error', err);
            }
            luke = JSON.parse(data);
            console.log( JSON.stringify(luke));
            response.end(JSON.stringify(luke));
        });
        if(request.method === 'GET'){
            var luke = '';
            fs.readFile('./data/luke.json', function(err, data) {
                if (err) {
                    console.log('file read error', err);
                }
                luke = JSON.parse(data);
                console.log( JSON.stringify(luke));
                response.end(JSON.stringify(luke));
            });
            console.log('chiamata Get ricevuta');
        }

        if(request.method === 'PUT'){
            console.log('chiamata PUT');
            var body = '';

            request.on('data', function(data) {
                body += data;
                console.log("responde body: " + body);
                luke = JSON.parse(body);
                console.log(typeof luke.toString());
                lukeString = luke.toString();
                fs.writeFile('./data/luke.json', lukeString, (err) => {  
                    if(err) throw err;
                    console.log('Data written to file');
                });

                console.log('This is after the write call');  
                response.end(lukeString);
            })
            
        }

        if(request.method === 'POST'){
            

        }

    } else if(request.url === '/goodbye'){
        response.writeHead(200, 'OK', { 'content-type': 'application/json' });
        var luke = '';
        fs.readFile('./data/fake-luke.json', function(err, data) {
            if (err) {
                console.log('file read error', err);
            }
            luke = JSON.parse(data);
            console.log( JSON.stringify(luke));
            response.end(JSON.stringify(luke));
        });
        console.log('chiamata Get ricevuta');
    }
});

server.listen(3000);