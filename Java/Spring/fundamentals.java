SPRING FUNDAMENTALS

	- Framework that reduces JEE apps complexity
	- Pojo based = Plain Old Java Objects
	- Unobstructive
	- AOP/Proxies
	- Best Practices
	PROBLEM
		Testability
		Maintainability
		Scalability
		Complexity
	
	- Maven/Gradle	
	
	- Business focus
		- Ex:
			- jdbc (connection, preparedStatment, try catch finnaly etc...)
			- annotation xml based (getEntityManager.find(Car.class, id))
	
	- How it works
		- POJOs 
		- Can be seen as a HashMap
		- Registry
		
ARCHITECTURE AND PROJECT SETUP
	- before = JEE blueprints
	- WORA
	- not Hardcoded
	
	STEPS
		- edit pom.xml
		- create a model
			Customer
		- create a repository (acess customer data)
			- impl and interface
		- create a service
				- impl and interface
				
		WHITOUT SPRING
			- main -> serviceOBJ.findAll() -> repositoryOBJ.findAll()
			
		WHIT SPRING
			- remove the hardcoded references to serviceOBJ and repositoryOBJ
		
ADDING SPRING
		- add to pom.xml
			<dependencies>
				<dependency>
					<groupId>org.springframework</groupId>
					<artifactId>spring-context</artifactId>
					<version>4.3.6.RELEASE</version>
				</dependency>
			</dependencies>		

XML CONFIGURATION
	- src/main/resources/applicationContext.xml
	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:schemaLocation="http://www.springframework.org/schema/beans 
							   http://www.springframework.org/schema/beans/spring-beans.xsd">

		<bean></bean>
	</beans>
	
	- namespace provide us a dictionary to use
	
	BEANS
		- essentialy classes
		- replaces keyword "new" ------------------**
		- define class, use interface
				<bean name="customerRepository" class="com.exdev.repository.HibernateCustomerRepositoryImpl"></bean>
	
	SETTER INJECTION			
		- CustomerServiceImpl
			public void setCustomerRepository(CustomerRepository customerRepository) {
				this.customerRepository = customerRepository;
			}

		- applicationContext.xml
			<bean name="customerService" class="com.exdev.service.CustomerServiceImpl">
				<property name="customerRepository" ref="customerRepository"/>
			</bean>
			
		- main
		
			public static void main(String[] args) {

				ApplicationContext app = new ClassPathXmlApplicationContext("applicationContext.xml");
				CustomerService service = app.getBean("customerService", CustomerService.class);
				System.out.println(service.findAll().get(0).getFirstName());
				
			}
		
			
	CONSTRUCTOR INJECTION
		- CustomerServiceImpl
			public CustomerServiceImpl(CustomerRepository c){
				this.customerRepository = c;
			}
		
		- applicationContext.xml
			<bean name="customerService" class="com.exdev.service.CustomerServiceImpl">
				<constructor-arg index="0" ref="customerRepository"/>
			</bean>
			
		- main
		 = exemplo do setter acima
		 
	AUTOWIRE
		- spring automatically wires beans
		- byType, byName, constructor, no
			- byType, precisa SETTER
				verifica o nome do tipo da classe, independente do método set
				ex: 	public void setFoo(CustomerRepository customerRepository) {
							this.customerRepository = customerRepository;
						}
				funcionaria com byType, mas não byName
			- byName, precisa SETTER
				ex: 	public void setFoo(CustomerRepository customerRepository) {
							this.customerRepository = customerRepository;
						}
					<bean name="foo" class="com.exdev.repository.HibernateCustomerRepositoryImpl" />
	
					<bean name="customerService" class="com.exdev.service.CustomerServiceImpl" autowire="byName">
			
			- constructor, precisa construtor vazio
				
					
				
			<bean name="customerService" class="com.exdev.service.CustomerServiceImpl" autowire="constructor">
					<!-- 		<constructor-arg index="0" ref="customerRepository"/> -->
			</bean>
			
	ANNOTATION CONFIGURATION
		
		- applicationContext.xml
		
			<?xml version="1.0" encoding="UTF-8"?>
			<beans xmlns="http://www.springframework.org/schema/beans"
				xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
				xsi:schemaLocation="http://www.springframework.org/schema/beans 
									   http://www.springframework.org/schema/beans/spring-beans.xsd
									   http://www.springframework.org/schema/context
									   http://www.springframework.org/schema/context/spring-context.xsd">
									
									   
				<context:annotation-config />
				<context:component-scan base-package="com.exdev" />
			</beans>	
			
		STEREOTYPE ANNOTATIONS
			- @Component - any POJO
			- @Service - business logic layer
			- @Repository - data layer
			
			AUTOWIRE
				- member variable
					@Autowired
					private CustomerRepository customerRepository;
					
				- constructor
					@Autowired
					public CustomerServiceImpl(CustomerRepository customerRepository) {
						this.customerRepository = customerRepository;
					}			
				- setter
					@Autowired
					public void setCustomerRepository(CustomerRepository customerRepository) {
						this.customerRepository = customerRepository;
					}	
			
			JSR-330
				- java dependency injection
				
JAVA CONFIGURATION 
	- No applicationContext.xml
	STEPS
		- add appConfig.java with @Configuration
		
			- setter
				@Configuration
				public class AppConfig {
					@Bean(name = "customerService")
					public CustomerService getCustomerService() {
						CustomerServiceImpl s = new CustomerServiceImpl();
						s.setCustomerRepository(this.getCustomerRepository());
						return s;
					}
					@Bean(name = "customerRepository")
					public CustomerRepository getCustomerRepository(){
						return new HibernateCustomerRepositoryImpl();
					}
				}
			
			- main
				ApplicationContext app = new AnnotationConfigApplicationContext(AppConfig.class);
				CustomerService service = app.getBean("customerService", CustomerService.class);
				
			- constructor
				- appConfig.java
					@Bean(name = "customerService")
					public CustomerService getCustomerService() {
						CustomerServiceImpl s = new CustomerServiceImpl(getCustomerRepository());
						return s;
					}
					@Bean(name = "customerRepository")
					public CustomerRepository getCustomerRepository(){
						return new HibernateCustomerRepositoryImpl();
					}
									
				- ConsumerServiceImpl
					public CustomerServiceImpl(CustomerRepository customerRepository) {
						this.customerRepository = customerRepository;
					}
			- autowired
				- appConfig.java
					@Configuration
					@ComponentScan({"com.exdev"})
					public class AppConfig {
					}
					
				- @Service("customerService")
					public class CustomerServiceImpl implements CustomerService {
					
				- @Repository("customerRepository")
					public class HibernateCustomerRepositoryImpl implements CustomerRepository {

					
					
BEANS SCOPES
	- scope != pattern
	- @scope
	
	SINGLETON
		- 1 instance
		- @Scope("singleton") ou @Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)
		- xml -> <bean... scope="singleton"/>
		- default scope
	
	PROTOTYPE
		- > 1 instances
		- opposite of singleton, unique instances
		- xml -> <bean... scope="prototype"/>
		
	WEB SCOPES
		- @Request, 1 instance for request
		- @Session, 1 instance for session
		- @GlobalSession, 1 instance for application life cicle
		
PROPERTIES FILES
	- via XML
		1 - create app.properties
			dbUserName="mysqlusername"
		2 - context.xml
			<context:property-placeholder location="app.properties" />
			<bean name="foo" class="com.exdev.repository.HibernateCustomerRepositoryImpl">
				<property name="dbUserName" value="${dbUserName}"></property>
			</bean>	
		3 - *.java
			private String dbUserName;
			//add setter
			
	- via annotation
		1 - create app.properties
			dbUserName="mysqlusername"
		2 - context.xml
			<context:annotation-config />
			<context:property-placeholder location="app.properties" />
			<bean name="foo" class="com.exdev.repository.HibernateCustomerRepositoryImpl" />
		3 - *.java
			@Value("dbUserName")
			private String dbUserName;
	- via JAVA
		1 - create app.properties
			dbUserName="mysqlusername"
		2 - AppConfig.java
			@PropertySource("app.properties")

			@Bean
			public static PropertySourcesPlaceholderConfigurer getPropertySourcesPlaceholderConfigurer() {
				return new PropertySourcesPlaceholderConfigurer();
			}
			
		3 - *.java
			@Value("${dbUserName}")
			private String dbUserName;
			