WHY?
	- Arrays are not enought
	- Deal with data structures are troublesome

TREE
	- Collection
		- list
		- set
			- sortedSet
		- queue
			- deque
	- map
		- sortedMap

INTERFACE X IMPLEMENTATION
	- interface
		- functional characteristics
		- behavior
	- implementation
		- concrete and instantiable
	- iterable
		- collection
			- list (arraylist, linkedlist)
			- set (hashset)
				- sortedSet(treeset)
			- queue (priorityqueue)
				- deque (linkedlist, arraydeque)
		- map (hashmap)
		- sortedMap (treemap)

DEFINING AND ITERATING
	 Collection<Product> products = new ArrayList<>();
	 products.add(door);
	 products.add(floorPanel);
	 products.add(window);	
	 
	 - iterator, capacidade de alterar a lista enquanto itera
		final Iterator<Product> productIterator = products.iterator();
		while (productIterator.hasNext()) {
			Product p = productIterator.next();
			if (p.getWeight() > 20) {
				System.out.println(p);

			} else {
				productIterator.remove();
			}
		}
	 
LIST
	- collection with iterator order
	- add, get(i), idnexOf, set(product), sort, 
	- public static final comparator<Product> BY_WEIGHT = comparing(Product::getWeight) //java 8
	- ARRAYLIST
		- general use
		- used by default
		- cpu cache sympatetic
	- LINKEDLIST
		- worse performance in general
		- use when adding elements at start our "add/remove" a lot
		
SET
	- collection of DISTINCT elements
	- hashset
		- based upon hashmap
		- general use
		- obj1.equals(obj2)
			- obj1.hashcode() == obj2.hashcode()
	- sorted/navigable set
		- collection of distinct elements that also have ORDER
		- sorted set
			- no indexes, but subsets
			- headSet(), tailSet() include de node itself,
		- navigable set
			- lower(E e), higher(E e), ceilling, pollFirst, pollLast
		

DATA STRUCTURE WITH MODIFICATION ORDER
	- QUEUES
		- fifo
		- offer(), add() *exception in case of full queue, 
		- remove()*exception case empty, poll()
		- element()*exception when empty, peek();
		- PRIORITY QUEUES - highest priority out
			- Queue<Product> priorityQueue = new PriorityQueue<>(Product.BY_WEIGHT);
	- STACKS	
		- lifo
		- bad implementation, depracated	
		- DECKS ( double ended queue)
			- offerFirst(), offerLast(), addFirst(), addLast() 
			- remove*, poll*, get*, peek*
			- to LIFO  - push(), pop()
		- Avoid deck and linkedlist implementation!
	
COLLECTION OF PAIRS 
	- MAPS
		- key -> value
		- why?
			- easy depending on situation
		- put (key, value), get(key)
		- final Map<Integer, Product> map = new HashMap<>();	
		
		- SORTED MAP
			- tailMap(), headMap()
		- NAVIGABLEMAP

COLLECTION OPERATIONS
	- ALGORITHMS
		- .rotate(list, noelements)
		- .shuffle()
		- .sort(list, comparator)
		
	- FACTORIES
		- Set<Integer> set = Collections.singleton(1);
		- Set<Integer> set = Collections.emptySet();
		
	- UTILITIES
		- Collections.addAll(products, door, window, floorPanel)
		- Collections.min(products, Product.BY_NAME) //OR .max
		
	- UTILITIES