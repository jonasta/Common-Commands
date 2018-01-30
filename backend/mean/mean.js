multivision company
	home
	profile
	User list
	Course List
	Course Details
	
	
angular 1.2
node 0.10.25
express 4.2.0
mongo 2.4.1

WALKING SKELETON
	npm init
	npm i --save express jade
	add git support
		git status
	add project subfolders
		"/server" - node (server side) (or "app")
		"/public" - client side
	add bower rc file
		.bowerrc
		directory where it puts the dependencies "public/vendor"
	bower init
	create ./server.js
		express()
		route(*)
	create "./server/view" folder
		index.jade --hello world
	
	run with nodemon server.js
	
	add stylus (css preprocessor)
	add logger 'morgan'
	add bodyparser (express)
	
	run with nodemon sever.js
	
	"/server/include"
		layout.jade
			"./public/css"/bootstrap.css, "./public/css"/site.css
			block main-content
		scripts.jade
			jquery, angular (in "/public/vendor")
	"server/views"
		index.jade
			extends layout, define main-content
	
	run with nodemon sever.js
	
	ANGULARJS
		create "public/app"/app.js
			angular.module
			angular.config --use "/server/views/partials"
			angular.controller (mainCtrl)
		edit layout.jade
			base=(href = '/')
		add app.js to scripts.jade
		create "/server/views/partials"/main.jade
			{{myvar}}
		edit index.jade
			div(ng-view)
		
		html hierarchy
			layout.jade (block "main-content") (include scripts)
				scripts.jade (links to jquery.js, angular.js, app.js...)
				index.jade(block - "main-content")
					div(ng-view) -- "angular app"
				
			angular app
				partial.jade - mainCtrl
	
	MONGODB
		server.js
			mongoose
	
	HEROKU DEPLOY
		procfile
		process.env.PORT
		mongodb
			mlab
		install heroku client
		
	Views
		created "partial/new_courses"
		created "partial/featured_courses"
		css
	
	Authentication/Authorization
		passport
		password security (hash encrypt)
		authorization
		included 
			navbar-login.jade
			navbar-loginCtrl.js
			
		
	refactoring server.js
		config
			config
			express
			mongo
			routes
			
	Authentication
		server login code
			passport
		client login code
			view
		signout 
	
	Authorization
		roles	
	
	
		
	

//MONGODB
use xxx
db
show collections
db.GameScore.find()
db.users.remove({})
mongodb://admin:admin@ds161164.mlab.com:61164/multivision	
mongo mongodb://localhost/multivision
	
//GIT - branches
	git checkout -b iss53
	..changes
	git commit -a -m 'added a new footer [issue 53]'
	git checkout master
	git merge iss53
//GIT - remotes
git remote -v
//GIT - remove branch
git branch -d the_local_branch
git push origin --delete the_remote_branch
//git undo "add"
git reset
//git remove from repo but keep disk
git rm --cached -r somedir
 
//NODE_ENV
set NODE_ENV=production	

//HEROKU
heroku login
heroku create
heroku config:set NODE_ENV=production
heroku ps:scale web=1
heroku open

heroku logs
heroku restart

heroku keys
	heroku keys:add
	c:users\jota\.ssh
		ssh-keygen
	heroku keys
	heroku keys:clean
	keroku keys: remove joe@joe-i7
	in WINDOWS
		copy keys to git/.ssh o
		
//EXPRESS
	var express = require('express');
	var app = express();
	//configure
	app.configure(function(){
			app.set('title', 'value');
		}
	);
	//or app.configure('production'/'development', function(){});
	//routing
		//customer
		app.get('/customer/:id', function(){
			res.send('customer : ' + req.params.id;
		});
		//?id=
		app.get('/customer', function(){
			res.send('customer : ' + req.query.id;
		});
	//static files
	app.use(express.logger('dev));
	app.use(express.favicon());
	app.use(express.static(__dirname + '/public'));
	//views
	..configure(...
		app.set('views', __dirname + '/server/views');
		app.set('view engine', 'jade');
	
	app.get('/'...
		res.render('file'); //server/views/file.jade
	//********LISTEN*******
	app.listen(3000);
	
	
	//structure
	index.js //require('./routes/customer.js) ...  app.get('/customer', customer.index)
		/routes/customer.js 
			//exports.index = function... res.render('customer/index', {customers: db.listCustomers()}) //views/home/index.js
			//       .create = function... res.render('customer/create'...
			//       .createCustomer = function... db.addCustomer({name: req.body.name...}); res.redirect('/customer
			
		/views/customer/index.jade
	//ROUTES
	get
	post
	put
	delete
	
	//content negotiation
	res.format({
		html : function(){(res.render('user.html'), {customer : customer});},
		json : function(){(res.json(JSON.stringfy(customer)))}
	});
	curl --header "Accept: application/JSON" url
	
	//upload file
	form enctype='multipart/form-data'
	
	//LOCALS
	app.locals.clockData = {dateTime : new Date().toUTCString()}
	html 
		p= clockData.dateTime
		
	//Scenarios
	cookies
		cookie-parser
	session
		express-session
		redis
		connect-redis
	middleware
		interceptors
		globalInterceptor
		singleInterceptor
	Authentication/Authorization
		interceptor
		accessChecker(next)
			if auth then next()
			else /login
	Error Handling
		
	
	
	
	
//FORM
	form(id='form', method='post', action='/customer/save/#{customer.id}')
		label(for='email') Email
		input(type='email', id='email', name='email', value='#{customer.email}')
		input(type='submit', value='Save')
	//exposed as req.body
	exports.save = function (req, res) {
	  console.log('REQ BODY : ' + req.body.email);
	  
	req.params... url param
	req.query... query string
	req.body... form data
	only GET or POST

//SERVER
	when requesting partials, request static file
	
//NPM
    package.json
		  "scripts": {
			"start": "node ./bin/www"
		  },
	npm ls -g --depth 0
	
//CODES
	200 ok
	301 moved
	304 not modified
	404 not found
	500 server error

//HTTP - CURL
curl -H "Content-Type: application/json" -H "X-Parse-Application-Id: myAppId" -X POST http://localhost:1337/parse/classes/GameScore -d "{\"score\":123,\"playerName\":\"Sean Plott\",\"cheatMode\":false}"
curl -H "Content-Type: application/json" -H "X-Parse-Application-Id: myAppId" http://localhost:1337/parse/classes/GameScore
curl -H "Content-Type: application/json" -H "X-Parse-Application-Id: myAppId" -X POST http://localhost:1337/parse/classes/GameScore -d "{\"score\":123,\"playerName\":\"Sean Plott\",\"cheatMode\":false}"

	