## Code Test

This exercise is meant to give us an initial guage of your programming and software development experience. It is not meant to be long or complicated. It is also not timed, so you are encouraged to take as long as you'd like to solve it and reach a solution you are satisfied with.

### Requirements

For this exercise, in a language of your choice, you will create a simple tool that allows a user to search a list of movies by an actor/actress name. Given the name of the star the user is looking for, the tool should print out the movies that person starred in, in order of release date.

- This tool should be usable as an execuatble script at the command line; no formal user interface is needed.
- Output should be printed directly into the terminal window.
- The script should be able to accept a single parameter, which is the full (first and last) name of the actor/actress being searched for (see usage example below).
- You should only use the standard libraries in your language of choice to solve the problem. If your the language does not have any built in automated testing libraries, you are free to include those.
- Please include a README which specifies the details of any language requirements (such as what version) and any details for how to run the program.
- Please supply your solution code and README in a zip file format when submitting.

#### Example Usage for Ruby

    $ ruby movies.rb "Tom Hanks"

### Input Formatting

The movie information is maintained in a simple text file which you can find [here](http://static.thebump.com/code-test/movies.txt). The file is formatted as follows:

- Each movie consists of 4 different pieces of information: Title, Year of release, Director, Star actors/actresses.
- Each of these pieces of information are on seperate lines.
- The list of stars is a comma delimited list of names
- Between each movies information, there is a blank line to mark the start of the next movies information.
 

### Output Formatting

Each entry in the output should be formatted as follows:

    Title: <Movie Name> (<Release Year>)
    Directed By: <Director Name>
    Also Starring: <Other Stars>
    
More specifically, performing a search for "Tom Hanks" on the example data set should print the following results:

    2 Movies Featuring Tom Hanks

    Title: Forrest Gump (1994)
    Directed By: Robert Zemeckis
    Also Starring: Robin Wright, Gary Sinise
    
    Title: Saving Private Ryan (1998)
    Directed By: Steven Spielberg
    Also Starring: Matt Damon, Tom Sizemore
    

#### Evaluation

We will be evaluating your solution on a combination of all of the following:

- Correctness of output
- Simplicity
- Readability
- Use of automated testing
- Overall clean design
