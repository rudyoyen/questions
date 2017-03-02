**************From S:

# PHONE SCREEN TEMPLATE
#phone-screens/template
_*FE TEMPLATE*_
 
 
_*General Questions*_

* How did you get in to web development?
* Why do you like working on the front-end?
* Tell me about your current position? Likes, dislikes?
* What css pre-processors have you used? Why do you like them?
* What js frameworks have you used? Why do you like them?

* How do you keep a growing codebase under control?
* Experience with testing?
* Describe a time when you overcame a large technical challenge?

* Describe your working relationship with clients, designers, etc?
* Why do you want to work here? What do you know about us?
* What are you looking for in a new position? What kind of role?

_*Technical Questions*_

* _*JS*_

	* Dropdown js propagation behavior question

* _*CSS*_

	* If you had a generic component that, given a new feature, was no longer generic, how would you adapt the current styling to the new design
	* How would you hide a section of something on the page? What are different examples? How are they different?

		* opacity: in layout, still functions. this
		* visibility: in layout, no functions
		* display: removed from layout. this
		* absolute position of the page

_*QUESTIONS ASKED*_
 
 
 
 
_*General Questions*_
* Programming - How did you get into it? Why do you enjoy it?
* Tell me about your current position? Likes, dislikes?
* Do you like working on the front-end or the backend?
* Do you like working at the app level or framework level?
* What excites you about working on the front-end?
* What css pre-processors have you used? Why do you like them?
* What js frameworks have you used? Why do you like them?
* How do you keep large css systems modular?

* Experience with testing?
* How do you keep a growing codebase under control?
* Describe a time when you overcame a large technical challenge?

* Describe your working relationship with clients, designers, etc?
* Why do you want to work here? What do you know about us?
* What are you looking for in a new position? What kind of role?
* Hobbies, interests, what do you do for fun?

_*Technical Questions*_
* _*JS*_

	* Dropdown js propagation behavior question: I have a navigation menu on my webpage. When you click on one of those items, it shows a dropdown. The behavior that has been requested is: 1. When you click on anything inside the dropdown, that dropdown should remain open; 2. When you click anywhere outside the dropdown, the dropdown should close. How would you do this?

* _*CSS*_

	* If you had a generic component that, given a new feature, was no longer generic, how would you adapt the current styling to the new design
	* How would you hide a section of something on the page? What are different examples? How are they different?

		* opacity: in layout, still functions
		* visibility: in layout, no functions
		* display: removed from layout
		* absolute position of the page

*_Adobe Example Engineering Questions:_*
* Tell me about the most challenging engineering project that you have been involved with during past year.
* Describe the most significant written technical report or presentation that you had to complete.
* In your last engineering position, what were some of the things that you spent the most time on, and how much time did you spend on each?
* What do you enjoy most/least about engineering?
* What new engineering specialty skills have you developed during the past year?
* Do you have any patents? If so, tell me about them. If not, is it something you see yourself pursuing and why or why not?
* Think of a specific engineering project when you answer this question. What could you have done to be more successful in achieving your goal(s)?
* Describe a time when you confronted a problem that really tested your engineering know-how.
* What is your overall career objective? Do you see yourself working in engineering ten years from now? If not, what do you think you will be doing?
* Give me an example of a time in which you were effective in doing away with the “constant emergencies” and “surprises” that engineers often face.
* Describe a time when as a member of the engineering department, you were instrumental in building a good long-term relationship with another department within the company.
* Tell me about your greatest success in using the principles of logic to solve an engineering problem in your last job.
* Give me an example of a time when you applied your ability to use analytical techniques to define problems or design solutions



**************From MV:

1. 
Implement a stack that internally uses one or more queues to store its data
class Queue:
    def __init__(self):
        self.array = []
    
    def enqueue(self, obj):
        self.array.append(obj)
    
    def dequeue(self):
        if (len(self.array) == 0) :
            return None
        
        retVal = self.array[0];
        self.array = self.array[1:len(self.array)]
        return retVal

    def length(self):
        return len(self.array)

class Stack:
# Fill this in

2. Design a collection of classes to represent a filesystem.


3. Reverse a string in-place in C:

    void reverse (char *str)
    {
        // your code here!
    }




 *******************From CD:

https://github.com/h5bp/Front-end-Developer-Interview-Questions


Question: Optimize this page in as many ways possible:
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="stylesheet" href="style_2.css" type="text/css" />
    <link rel="stylesheet" href="style_3.css" type="text/css" />
    <link rel="stylesheet" href="style_4.css" type="text/css" />

    <script type="text/javascript" src="app.js"></script>
    <script type="text/javascript" src="lib1.js"></script>
    <script type="text/javascript" src="lib2.js"></script>
</head>
<body>

    <div>
        ...
    </div>

</body>
</html>

Answer:

Question: Briefly explain margin, padding, border.
Answer: …

Question: Briefly explain position: absolute/relative/static/fixed.
Answer: …

Question: Explain the difference between call & apply.
Answer: Function.call(context); vs. Function.apply(context, null, [args]);

Question: Do you have experience with Canvas?
If not, ask about other imaging experience.
If so, explain a project where you've used it.

Cross domain stuff?
Given an image object: draw it onto a canvas and draw a square in the center.

Question: Discuss OOCSS?

Question: Hoisting sample

Questions: Implement drawing app w/ Canvas API. Touch events?
- Performance? Throttling Events (requestAnimationFrame? w/ fallback?)
- Look for well structured/organized code. How can you make it reusable for other tools?```