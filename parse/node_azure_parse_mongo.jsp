azure
	testenodemeuparse.azurewebsites.net
	testenodemeuparse.scm.azurewebsites.net/dev/wwwroot/server.js
	parse-server-exampleebe8.azurewebsites.net
	parse-server-exampleebe8.scm.azurewebsites.net/dev/wwwroot/server.js
	https://portal.azure.com

mongo
	mongodb://admin:admin@ds161164.mlab.com:61164/multivision



	
1
		parse
			https://github.com/parse-community/parse-server-example
			deploy para azure
			seleciona mongo database
		
2

http://mytestapp.azure.com/parse
		usar curl
			curl -H "Content-Type: application/json" -H "X-Parse-Application-Id: myAppId" -X POST parse-server-exampleebe8.azurewebsites.net/parse/classes/GameScore -d "{\"score\":123,\"playerName\":\"Sean Plott\",\"cheatMode\":false}"



			curl -H "Content-Type: application/json" -H "X-Parse-Application-Id: myAppId" parse-server-exampleebe8.azurewebsites.net/parse/classes/GameScore


			curl -H "Content-Type: application/json" -H "X-Parse-Application-Id: myAppId" -X POST http://localhost:1337/parse/classes/GameScore -d "{\"score\":123,\"playerName\":\"Sean Plott\",\"cheatMode\":false}"			
3
		node app


			var options = {
			  host: 'parse-server-exampleebe8.azurewebsites.net',
			  port: 80,
			  path: '/parse/classes/GameScore',
			  method: 'GET',
			  headers : {'content-type': 'application/json', 'X-Parse-Application-Id': 'myAppId'},

			};


			http.get(options, function (resp) {
			  resp.pipe(process.stdout);

			  resp.on('data', function (d) {
				test += d;
			  });


			}).on("error", function (e) {
			  console.log("Got error: " + e.message);
			});
		