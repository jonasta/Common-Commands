common motivations
	1.code coverage
	2.prevent bugs
	3.core logic is working

uncommon motivations
	1.easier maintenance
	2.refactor with confidence
	3.clean code
	
mechanics of TDD
	3 steps
		1. write a failing test
		2. make it pass
		3. refactor
TDD cycle
	1 minute
	red -> green -> refactor
	ex: salary calculator
	
Tools
	mean.js
	grunt.js
	mocha
	karma(testrunner)&jasmine(behind) - end to end test
	
Server
	why? common, logic, easy automation (data only)
	chalenges
		routes
		database interaction
		know what to test
	goals
		code in best location
		logic covered by test
	Rating application
		rate, comment
		other people rating
		Model
			name, description, average score, ratings[individual rating, comment]
			
Refactor
	reasons
		make code mor readable
		follow best practices
		reusable blocks
	
Models
	models by themself not useful
	client needs access
	need api routes
	what is unique to THIS app
	keep responsibilities separate (controller only "get")
	next logical building blocks
	
	API
		routes
			/events
				list events
			/events/{id}/reviews
				reviews of an event
		actions
			get - fetch
			post - add
			put - update
			delete - remove
			
		SAMPLE API REQUEST
			request url: api.examples.com/events
			request method : GET
			returns : [
				{eventModel},
				{eventModel}
				...
			]	
			
			request url : api.example.com/events/{id}
			request method : GET
			returns : {
				id: {id},
				name : {eventName},
				ratings : [{rating}, {rating}]
			}


	
event.js
	export mongoose (model)
event.spec
	validate model (ratings, calculate avg rating)
event.server.controller
	getAllEvents
event.server.controller.spec
	when listing events, should return status, data
	

	
	
	
	
	