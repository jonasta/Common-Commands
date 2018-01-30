WHY
	communication
	commin vocabulary
	abstract topic
	revisit
	
ADAPTER
	work as a plug adapter
	convert a interface into another
	legacy code
		ex: array -> list, streams
	DESIGN
		client centric
		integrate new with old
	EX
		1
			Integer[] arrayOfInts = new Integer[] {1, 2, 3};	
			List<Integer> listOfInts = Arrays.asList(arrayOfInts)
		2	
			public interface Employee(getId, getFirstName()...)			
			employees.add(new EmployeeAdapterLdap(employeeFromLdap));
			tip: right click to create the adapter
			public class EmployeeAdapterLdap implements Employee {
				private EmployeeLdap instance;
				public EmployeeAdapterLdap(EmployeeLdap instance) {
					this.instance = instance;
				}
				@Override
				public String getId() {
					return instance.getCn();
				}
				...
	
BRIDGE
	similar to adapter
	works with new code
	DESIGN
		interfaces and abstract classes
		composition over inheritance
		see bridgeUML.png
	EX:
		1
			JDBC connection/preparedStatement
		2 see imgs
			bridge1.jpeg
			bridge2.jpeg			
			
		3 see imgs
			bridge3.jpeg
		
COMPOSITE
	compose objects into tree structures
	composite != composition
	DESIGN
		Tree structured
		leaf or component, same operations
		Component + leaf + composite
		see imgs
			composite.png
	EX:
		1
			java.awt.Component
			JSF widgets
			RESTFul service GETs
		2
			Map
		3
			exercise: Menu, MenuItem, MenuComponent						

DECORATOR
	add functionality through constructors
	original object stay the same
	DESIGN	
		composition + inheritance
		subclassing
		constructor needs instance from hierarchy
	EX
		java.io.inputStream
		UI components (jwt, swing)
		Sandwich exercisae
			Sandwich sandwich = new DressingDecorator(new MeatDecorator(new SimpleSandwich()));
	
		
		
FACADE
	pron: fa-çá-d
	usually refactoring pattern
	make API easy to use
	simplify interface to client
	EX
		java.net.URL
		java.faces.context.FacesContext
		exercise
			JDBC create, insert and select
			
			public static void main (String args []) {
				JdbcFacade jdbcFacade = new JdbcFacade();			
				jdbcFacade.createTable();
				...
			
			DbSingleton instance = null;
			public JdbcFacade() {
				instance = DbSingleton.getInstance();
			}
			public int createTable() {
				int count = 0;
				try {
					Connection conn = instance.getConnection();
					Statement sta = conn.createStatement();
					count = sta.executeUpdate("CREATE TABLE Address (ID INTEGER, StreetName VARCHAR(20), City VARCHAR(20))");
					sta.close();
					conn.close();
				} catch (Exception e) {
					e.printStackTrace();
				}
				return count;
			}
		
	DESIGN
		class that uses composition
		shouldn't need inheritance
		
	PITFALLS
		used to clean code
		should think about API design
		overused
		FACADE X ADAPTER
			facade just simplifies api
			adapter add/modify behavior
		
		
		
		
		
FLYWEIGHT
	more efficient use of memory
	large number of similar objects
	EX
		java.lang.String
		java.lang.Integer#valueOf(int)
		Boolean, Byte, Character, Short
		{
			Integer firstInt = Integer.valueOf(5);
			Integer secondInt = Integer.valueOf(5);
			Integer thirdInt = Integer.valueOf(10);

			System.out.println(System.identityHashCode(firstInt)); //15194609
			System.out.println(System.identityHashCode(secondInt));//15194609
			System.out.println(System.identityHashCode(thirdInt)); //23154841
		}
		
		FlyweightInventoryDemo
			item (/*flyweight implementation*/)
			order (orderNumber, item)
			catalog(items, lookup(name), totalItemsMade())
			inventorySystem(takeOrder(itemname, orderNumber), process(), report())
		
	
	DESIGN
		uses Factory
		Client, Factory, Flyweight, ConcreteFlyweight
		
	
	
	
	
	
	
	
	
	
	

PROXY