var http = require('http');
var fs = require('fs');

var luke = {
    nome: 'Luke',
    cognome: 'Skywalker'
};

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
        /*var luke = '';
        fs.readFile('./data/luke.json', function(err, data) {
            if (err) {
                console.log('file read error', err);
            }
            luke = JSON.parse(data);
            console.log(typeof luke);*/
            response.end(JSON.stringify(luke));
       // });
        
        if(request.method === 'GET'){
            response.end(JSON.stringify(luke));
            console.log('chiamata Get ricevuta');
        }

        if(request.method === 'PUT'){
            console.log('chiamata PUT');
            var body = '';
            request.on('data', function(data) {
                body += data;
                console.log("responde body: " + body);
                luke = JSON.parse(body);
            })
            //console.log(request.body);
           response.end(request.body);
        }

        if(request.method === 'POST'){
            

        }

    } else if(request.url === '/goodbye'){
        response.writeHead(200, 'OK', { 'content-type': 'application/json' });
        response.end('{ "nome" : "Luke", "cognome" : "de giorgis"}');
    }
});

server.listen(3000);