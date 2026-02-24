1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
i.When we search by a specific ID, we use getElementById() and it always returns an element.
ii.When searching for an element by a specific class name, getElementsByClassName() is used. It returns an HTML collection.
iii.querySelector() is a selector that returns the first element it matches. It can use ID, class and tag name etc.
iv.querySelectorAll() is a selector that returns all matching elements. This returns a NodeList which is static.

2. How do you create and insert a new element into the DOM?
Answer:
//First create a new element.
let newDiv = document.createElement("div");
//Then I will write the content in the element.
newDiv.textContent = "Hello World";
//Adding where to add it to the DOM
document.body.appendChild(newDiv);

3. What is Event Bubbling? And how does it work?
Answer:
Event Bubbling is a process where when an event occurs on a child element, it becomes the parent element and rises up the document. If we attach an event to a button, when we click on it, that event is triggered and propagated to its parent.

 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation in JavaScript is the process of placing an event listener on a parent element so that events from a child can be handled.
This is useful because it eliminates the need to set up separate listeners for many child elements and it also works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
i.preventDefault():
Stops the default behavior of an event. For example, form submission, link redirection.
This essentially turns off the default action.
ii.stopPropagation():
Stops event bubbling or capturing, meaning the event will no longer propagate to the parent element.
This basically stops progression.