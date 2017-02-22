Lessons Learned

1.25.17 START----------------------------

It's taken me probably three weeks to figure out roughly how to get the advanced filter working with 
this new NPM package and using separate windows. It was really complicated, but I feel like I took a very
circuitous route. Here are things I'm hoping to learn from:


What did seem to help:
I made a list of all the files that are involved, which ended up being eight files. A lot more than I realized.

I started at a high level with the file. Looking at how many lines it is in total. Looking at function names. Just getting a general feel for what it's doing.

Then I took deep look at what each binding was doing in the file. In more general terms, the bindings could be generalized to mean the endpoints that the file returned. I made comments next to each one describing what it did so it ended up looking like a list of definitions. 

I then look somewhat in depth at each function to understand roughly what it was doing. The definitions of all the variables helped a lot here.

I collapsed all the sub functions so I could just see their names and not their contents so I could get a feel for how the whole file was organized

I drew rough diagrams of the functions calling other functions to start to see how they related to each other

I identified the most important endpoint that the rest of the program relied on and worked back from there to understand how from an initial user input, the data flowed to that endpoint, and then to the rest of the program.

I drew diagrams of, forgetting about the specific functions, how the work flow should happen in this new version. To make sure I was still thinking on the right track.



What didn't seem to help:
Skipping around the file trying to randomly guess what things did

Trying to retain how everything worked in my head and not writing it down

Staring at the computer screen

Writing code that was NOT related to the most critical path of getting the most important endpoint to work in the file. 

Trying to get the file to work without understanding what it really did and treating it like a black box. It only works to treat something like a black box if you don't need to change it's contents. This file was set up in a way that would not be possible to work in the NPM package so it inherently had to change in some ways. That meant that I had to look inside and start to understand how it works.


For Next Time:
When you know you need to dive into a file to understand what's going on but you know you don't need to know every line of code in the file - maybe the right approach is to start at the highest level of understanding of the file and incrementally work your way down in detail and at each increment ask yourself, do I know enough yet about this file in order to do what I need or do I need to dive deeper? -I haven't done this yet so I'm not sure if it would work but seems like a reasonable approach. 


1.25.17 END------------------------------


