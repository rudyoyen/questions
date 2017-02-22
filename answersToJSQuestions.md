
Explain event delegation

	My defintion: Event delegation is when an element has some children elements and rather than attaching event handlers to every 
	child node, you attach a handler to the parent node. When the event is triggered on the child node, say a 'click' event, the event
	bubbles up the DOM so our handler on the parent node will get triggered. When this handler is called, we can inspect the event object
	passed in to see what the value of the target property is (ie e.target). The target will be the actual child node that was clicked
	so we can then do whatever we want to that child node without having handlers attached to each child node.

	Expert's defintion: Delegated events - events that are attached to a parent element, but only get executed
	when the target of the event matches some criteria


Explain how this works in JavaScript

	'this' is a binding made for each function invocation based entirely on how the function is being called. 'this' will always be an object unless it is set to null or undefined. What exactly that object is, is determined by how the function is being called. 

	When a function is called at the highest level, in what is known as the global execution context, the 'this' of a function refers
	to the global object. NOTE - If that function runs in strict mode (ie it contains the statement "use strict") then 'this' in the 
	function will evaluate to undefined. 

	When a function is called as a method attached to an object, the 'this' of that function refers to the object that the method is attached to. NOTE - This does not matter if the function is originally defined on its own, not attached to an object. 

	When a function is called using call or apply, the 'this' of that function refers to the object passed in to call or apply.

Explain how prototypal inheritance works
What do you think of AMD vs CommonJS?
Explain why the following doesn't work as an IIFE: function foo(){ }();.
What needs to be changed to properly make it an IIFE?
What's the difference between a variable that is: null, undefined or undeclared?
How would you go about checking for any of these states?
What is a closure, and how/why would you use one?
What's a typical use case for anonymous functions?
How do you organize your code? (module pattern, classical inheritance?)
What's the difference between host objects and native objects?
Difference between: function Person(){}, var person = Person(), and var person = new Person()?
What's the difference between .call and .apply?
Explain Function.prototype.bind.
When would you use document.write()?
What's the difference between feature detection, feature inference, and using the UA string?
Explain Ajax in as much detail as possible.
What are the advantages and disadvantages of using Ajax?
Explain how JSONP works (and how it's not really Ajax).
Have you ever used JavaScript templating?
If so, what libraries have you used?
Explain "hoisting".
Describe event bubbling.
What's the difference between an "attribute" and a "property"?
Why is extending built-in JavaScript objects not a good idea?
Difference between document load event and document DOMContentLoaded event?
What is the difference between == and ===?

	== is a loose or abstract comparison. === is a strict comparison. === is only true if the operands are of the same type
	and their contents match. == converts one or both of the operands to the same type and then compares their contents in the
	exact same way as === performs the comparison. For example when a string is loosely compared to a number, the string is first
	converted to a number and then compared by ===.  

	Some things that evaluate to false for == comparison:
	-Anything compared the NaN
	-Anything compared to null other than null or undefined
	-Anything compared to undefined other than null or undefined
	-Two objects with identical properties but the operands reference different objects

	Some things that evaluate to true for == comparison:
	-false, 0, -0, "", "0", "-0", []

	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

Explain the same-origin policy with regards to JavaScript.
Make this work:
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
Why is it called a Ternary expression, what does the word "Ternary" indicate?
What is "use strict";? what are the advantages and disadvantages to using it?
Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
Why would you use something like the load event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
Explain what a single page app is and how to make one SEO-friendly.
What is the extent of your experience with Promises and/or their polyfills?
What are the pros and cons of using Promises instead of callbacks?
What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
What tools and techniques do you use debugging JavaScript code?
What language constructions do you use for iterating over object properties and array items?
Explain the difference between mutable and immutable objects.
What is an example of an immutable object in JavaScript?
What are the pros and cons of immutability?
How can you achieve immutability in your own code?
Explain the difference between synchronous and asynchronous functions.
What is event loop?
What is the difference between call stack and task queue?
Explain the differences on the usage of foo between function foo() {} and var foo = function() {}


