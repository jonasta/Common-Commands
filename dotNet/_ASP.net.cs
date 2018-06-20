#Building a Web App with ASP.NET Core, MVC, Entity Framework Core, Bootstrap, and Angular#

dotnet --help
dotnet new console
dotnet build
dotnet run

dotnet add package Newtonsoft.Json
dotnet run "jonasta"


vs 2017
#1 new web empty application
	//boilerplate to listen in a port (8888)
	Console app that listens to requests
		BuildWebHost that listens to requests
			default builder
				Startup Class with configuration
					Configure()
						what you wanna do when requests comes in
				
	Properties
		Configure default port
		
					
	
	//public void configure
	app.Run(async (context) =>
		{
			await context.Response.WriteAsync("Hello World!");
		});
		
	
#2 serving index.html file	
	*tip : new file extension (enables shift + f2)
	wwwroot/index.html //generates default html

	MIDDLEWARE -> "Run some code when a request comes in"
	
	//public void configure
	app.UseDefaultFiles() //changes the url to index files to serve as default
	app.UseStaticFiles() // allow to serve file from wwwroot folder
		put in wwwroot to static serve
	ORDER MATTERS

#3 HTML and CSS

	What Is HTML?
	HTML Basics
	HTML Forms
	CSS Basics
	CSS Naming
	CSS Classes
	The Box Model
	
#4 JavaScript

	What Is JavaScript?
	Adding a JavaScript File
	JavaScript Events
		wrap in anonymous function //avoid global scope
	Using Bower
		bower.json //dependencies
		bowerrc //directory : wwwroot/lib
		bower install jQuery
	Introducing jQuery
	Practical jQuery
	
#5 MVC
	
	
