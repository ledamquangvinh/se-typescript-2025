# Design Pattern for TypeScript 

Reference: https://refactoring.guru/design-patterns/typescript

![design patter](./img/img00.png)

# The Catalog of TypeScript

## Group 1: Creational Patterns

### Pattern 01 - Abstract Factory
![Abstract Factory](./img/abstract-factory-en-2x.png)
Lets you produce families of related objects without specifying their concrete classes.

### Pattern 02 -Builder
![Builder Factory](./img/builder-en-2x.png)
Lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code. 

### Pattern 03 - Factory Method
![Factory Method](./img/factory-method-en-2x.png)
Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
### Pattern 04 - Prototype
![Prototype Method](./img/prototype-2x.png) 
Lets you copy existing objects without making your code dependent on their classes.

### Pattern 05 - Singleton
![Singleton](./img/singleton-2x.png)
Lets you ensure that a class has only one instance, while providing a global access point to this instance.

## Group 2: Structural Patterns

### Pattern 1 - Adapter
![Adapter](./img/adapter-en-2x.png)
Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

### Pattern 2 - Bridge
![Bridge](./img/bridge-2x.png)
Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

### Pattern 3 - Composite
![Composite](./img/composite-2x.png)
Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

### Pattern 4 - Decorator
![Decorator](./img/decorator-2x.png)
Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

### Pattern 5 - Facade
![Facade](./img/facade-2x.png)
Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

### Pattern 6 - Flyweight
![Flyweight](./img/flyweight-2x.png)
Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

### Pattern 7 - Proxy
![Proxy](./img/proxy-2x.png)
Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.
## Group 3: Behavioral Patterns

### Pattern 1 - Chain of Responsibility
![Chain of Responsibility](./img/chain-of-responsibility-2x.png)
Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

### Pattern 2 - Iterator
![Iterator](./img/iterator-en-2x.png)
Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

### Pattern 3 - Memento
![Memento](./img/memento-en-2x.png)
Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

### Pattern 4 - State
![State](./img/state-en-2x.png)
State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

### Pattern 5 - Template Method
![Template Method](./img/template-method-2x.png)
Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

### Pattern 6 - Command
![Command](./img/command-en-2x.png)
Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

### Pattern 7 - Mediator
![Mediator](./img/mediator-2x.png)
Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

### Pattern 8 - Observer
![Observer](./img/observer-2x.png)
Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

### Pattern 9 - Strategy
![Strategy](./img/strategy-2x.png)
Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

### Pattern 10 - Visitor
![Visitor](./img/visitor-2x.png)
Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.


