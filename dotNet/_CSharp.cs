#C# Fundamentals with Visual Studio 2015#

.NET
	Common Language Runtime - CLR
		"System" namespace
		
	Framework Class Library - FCL
	

COMPILING
	c:\Windows\Microsoft.NET\Framework\v4.0.30319\csc Start.cs
	
	using System;
	namespace classes{	
		public class Start{
			public static void Main(){
				Console.WriteLine("Teste");
			}
		}
	}
	
	>> files.cs => Start.exe (Microsoft Intermediate Language)
	
CLASSES AND OBJECTS
	Classes
		propriedades da classe com maiusculo
	objeto
		GradeBook g1 = new GradeBook(); //g1 is a pointer
	construtor
	modificadores de acesso (private, public)
	static
	
	GradeBook
		GradeStatistics ComputeStatistics(){}

ASSEMBLIES
	exe
	dll
	right click in references > view in object browser
	
UNIT TEST
	New Test Project
	[TestClass]
	public class GradeBookTests{
		[TestMethod]
		public void ComputeHighestGrade(){}
	}

TYPES
	#reference
		class, string, array //changes reference, except when "obj = new obj"
	#value
		struct, int... // do NOT change original var
		
Methods
	behavior
	access modifier
	return type
	signature
		name + types
Fields
	data, variables of class

Properties
	fields + get, set
	private string _name;
	public string Name{
		get {return _name;}
		set{_name = value;}
	}
	//or
	public string Name{get;set;}
	
Events
	delegates, events
	Allow class to send notification to other classes
	Publisher raises the event
	Subscribers proccess the event
	
FLOW CONTROL
	if
	for
	try, catch
	
OBJECT ORIENTED PROGRAMMING
	encapsulation
		classes, methods	
	inheritance
		B : A
	polymorphism
	abstract class
		inherit from 1 abstract class only
	interface
		can implement 1 or n interfaces

***COLLECTIONS***
***DEFENSIVE PROGRAMMING***
	good code x bad code
	clean code techniques
	bad code >> refactoring >> good code

	clean code
		method >> clear purpose, single purpose
		good name
		focused code, single purpose
			DRY - reusable
		short length
			1 Screen
		automated code TEST
		predictable results
		
		1 - Class library
			entities
			repositories
			
	
	testable code
	validation, exception handling
	
	
**	
	
