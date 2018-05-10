Building a Web App with ASP.NET Core, MVC, Entity Framework Core, Bootstrap, and Angular

dotnet --help
dotnet new console
dotnet build
dotnet run

dotnet add package Newtonsoft.Json
dotnet run "jonasta"


vs 2017
new web empty application
	//public void configure
	app.Run(async (context) =>
		{
			await context.Response.WriteAsync("Hello World!");
		});
		
	
	2 create index.html file	
	//public void configure
		app.UseStaticFiles()
	put in wwwroot to static serve
	//serve as default
	app.UseDefaultFiles()
	
	MIDDLEWARE -> "Run some code when a request comes in"
