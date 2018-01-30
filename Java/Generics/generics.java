WHY
	type casting
	code that inherits
	type safety without copy paste
	runtime error -> compiler error
	common used with inheritance
	
EX
	buffer
		stringbuffer
		integerbuffer
	code optimization
	
HOW
	public class CircularBuffer<T>{}
	CircularBuffer<Integer> b = new CircularBuffer<Integer>(5);
	CircularBuffer<String> b = new CircularBuffer<String>(5);
	
GENERIC COLLECTIONS
	LIST
		ordered
		//interface List        implementation ArrayList()
		List<Person> lst = new ArrayList<>(); //java 7 includes de diamond '<>' operator
	SET
		collection of uniques elements
		Set<Person> set = new HashSet<>();
	MAP
		dictionary with key -> value
		Map<String, Person> map = new HashMap<>(); //<String, Person> generic
		for (Map.Entry<String, Person> entry : map.entrySet()){ //generic entrySet() method
			System.out.println(entry.getKey()); //generic method
			System.out.println(entry.getValue()); //generic method
		}
CLASSES AND INTERFACES
	ex : list - arraylist/linkedlist
	implementing a generic type
	
		public class AgeComparator implements Comparator<Person>{
			@Override
			public int compare(Person left, Person right){
				return Integer.compare(left.getAge(), right.getAge()); //desc "* -1"
			}
		}
		
	pass up a type parameter
	
		public class SortedPair<T> {

			private final T first;
			private final T second;
			
			public SortedPair(T left, T right){
				first = left;
				second = right;
			}
		}
			
	type bounds
		public class SortedPair<T extends Comparable<T>> {
		permite que T seja usado como um Comparable, limita a ser um Comparable

GENERIC METHODS
	public static <T> T min(List<T> values, Comparator<T> comparator){...}

WILDCARD GENERICS
	used in java core libs
	"?"
	safety without copy/paste

	the substitution principle
		if we can pass a class/interface as parameter, we can pass a subclass/implementation

	upper bounded
		public void saveAll(final List<? extends Person> persons){...}
		anything that extends from/is a Person
		use "T" when you have to use a method of the "T" object in the code, otherwise "?"
		getting things of a list
		
	lower bounded
		public void loadAll() 
		anything that is/is a parent from Person
		putting things of a list		
		
	unbounded
		Class<?> classCustumer = Class.forName("Customer");
		doesnt matter what class is
		
RAWTYPES AND COMPATIBILITY
	Class Literals
		Logger.class
		reflectable: primitives, lists, unbounded wildcards
			System.out.println(int.getClass());
		not reflectable : type variable "T", bounded wildcards
			List<String> strings = new ArrayList<>(); 
			System.out.println(strings.getClass()); //java.util.ArrayList	
			List<? extends Number> numbers = new ArrayList<>();
			System.out.println(numbers.getClass()); //java.util.ArrayList

REFLECTION AND LAMBDAS
	
	