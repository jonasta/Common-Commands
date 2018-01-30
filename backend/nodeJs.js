npm init;

1 - Getting Started
	blocks
		libuv
		v8
		js/c++

	node event loop
		always listening like js
		non blocking
		
	code Convention
		non blocking
		Event-Emitter
			results.on('row' ...)
		callback - last parameter
			getStuff(inputParam, handleResults)
		error first
			var handleResults = function(error, results){}
		for simple callback - simple anonymous function
			getStuff(inputParam, function(error, results){});
		closures
			someOtherFunction(function(error, stuffToGet){
				var foo = 23;
				getStuff(stuffToGet, function(error, results){
					//if error is undefined
					//do something with results AND FOO
				});
				
			});

2 - Module, require() and NPM
	modules
			var foo = require('foo');
			var Bar = require('bar');
				let b = new Bar();
			var funcionality = require('bigmodule').func;
	three sources of modules
		#1 build-in
			fs, http, crypto
		#2 project file
			data = require('./data');
			module.exports.doIt = doIt
		#3 third party modules
			npm 
			package.json
			
3 - Events and Streams
	callback x event
		callback
			getThem(param, function(){});

			a. request/reply
			b. wait for all results to arrive
			c. error or result
		event
			var results = getThem(param);
			results.on('item', function(){});
			results.on('done', function(){});
			results.on('error', function(){});

			a. publish/subscribe
			b. act on each item arriving
			c. parcial result before error
			
	EventEmitter Class
		publisher
			emitter.emit(event, args[]);
		subscriber	
			emitter.on(event, listener);
			
		a. 'event' can be any string
		b. >= 0 arguments
		c. set of events exposed to the subscriber by the publisher
		
		patterns
			1. return from a function call (above)
				var getResource = function(c){
					var e = new EventEmitter();
					//e.emit('start') e.emit('data') e.emit('end') with nextThick and setInterval
					return e;
				}
				
				var r = getResource(5);
				r.on('start', function(){ log('start);})

			2. extend EventEmitter to emit event
				Resource.js
					function Resource(m){
						//self = this
						//self.emit('start') self.emit('data') self.emit('end') with nextThick and setInterval
					}
					util.inherits(Resource, EventEmitter)
					module.exports(Resource);
					
				example.js
					var r = new Resource(5);
					r.on('start', function(){ log('start');}) //'data', 'end' etc
	
	Streams
		instances of (and extension of) EventEmitter
			- file io
			- network (request, response, tcp sockets)
			- stdin, stdout, stderr
		instance of
			ReadableStream
			WritableStream
			both
		readableStream "pipe" writableStream
		
		readableStream
			readable (boolean)
			event: 'data', 'end', 'error', 'close'
			functions pause(), resume(), destroy(), pipe()
			
		writableStream
			writable (boolean)
			event: 'drain', 'error', 'close', 'pipe'
			functions write(), end(), destroy(), destroySoon()
		
		readableStream example
			var s = request('http://pluralsight.com/');
			s.on('data', function(){}); //called multiple times
			s.on('end', function(){}); 
		
		
		process.stdout = console 
		
		writableStream example
			console.log("stdout is writable : " + process.stdout.writable);
			process.stdout.write("hello");
			process.stdout.write("world");
		
		pipe example
			var s = request('http://pluralsight.com/');
			// pipe to the console
			s.pipe(process.stdout);
			//pipe to a file
			s.pipe(fs.createWriteStream('pluralsight.html'));
			
Acessing local system
	process object
		stdin, stdout, stderr
		atributes of current process(env, memoryUsage...)
		process related functions(chdir, abort, kill...)
		instance of EventEmitter
		
	interacting with file system
		fs module
			mkdir, readdir, close, open, readFile...
			stream oriented functions
				fs.createReadStream()
				fs.createReadStream()
			watch change on file/directory			
			
	Buffers
		raw memory allocation for binary data
		converted to/from string
		handy way to convert from/to base64
		
	OS module
		info about running system (os.tmpDir, os.hostname...)
		
Interacting with the web
	as web-client
		var http = require("http");
		var req = http.request(options, function(res){
		//options: url or object{host, port, method...}
		req = http.ClientRequest(WritableStream)
		res = http.ClientResponse(ReadableStream)
		the request can be piped for POST request
		the response is a callback(above) or "response" event
		http.get() - simplified
		
	as web-server
		var http = require("http");
		var server = http.createServer(function (req, res) {		
		req = http.ServerRequest(ReadableStream)
		res = http.ServerResponse(WritableStream)
		each request is provided via callback or "request" event
		the ServerRequest can be read from/piped for POST uploads
		ServerResponse can be piped whe return stream-oriented data
		SSL = https.createServer...
		
	real time integration Socket.IO
		abstraction to various methods to maindain active connection browser <-> server
		use socke when possible
		
Testing and debugging
	"assert" module
	mocha + should.js
	cloud9 + browser
	Node Inspector Module

Scaling node app
	child process
		handle big tasks while the main thread goes on
			1. spawn(command, [args], [options])
				emits "exit" & "close"				
			2. exec (command, [args], callback)
				runs command string in shell
				callback invoked on completion with erro, stdout, stderr
			3. execFile(file, [args], [options], callback)
				similar to exec, but the file is executed directly
			4. fork(modulePath, [args], [options])
				special version of spawn, for childprocesses
				adds "send" and on('message', m =>{}) event to the child
				
		Ex : 
		Exec:
			var exec = require('child_process').exec;
			var child = exec('uptime', function(err, stdout, strerr){ //'uptime | cut -d ', ' -f 1' 
				if (err){
					console.log(stderr);
				}else{
					console.log(stdout);
				}
			});
			console.log('pid : ' + child.pid);
			
		spawn:
			pipe grep node example'
		
		fork:
			//main.js
				var fork = require('child_process').fork;
				var child = fork(__dirname + '/honorstudants.js', function(){
					child.on('message', function(m){
						console.log('the answer is ' + m);
						child.send({cmd : done});
					});
				});
				child.send({cmd:'double', number:20});
			//honorstudants.js
				var fun = require('./mathfun');
				process.on('message', function(m){
					if (cmd === 'double'){
						fun.eventDoubler(m.number, function(err, res){
							process.send({answer : res});
						});
					}else if (cmd === 'done'){
						process.exit();
					}
				});
								
	scaling with cluster module
		experimental
		"worker" class
		master - isMaster
		worker (s) modules - isWorker
	
	
	