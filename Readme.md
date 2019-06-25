# Node walkthrough

0. In a new file called `index.js` write a CLI application that accepts a user parameter and logs it to the console.

1. Push your result to a new GitHub repo called node-walkthrough and post the link to #exercises on Slack. We're going to do this after each exercise because fearlessness is built from backups. Here's a workflow that works for me:

    a) At the start of each exercise, `checkout` a new branch and `commit` working code at each step as you complete it.

    b) `checkout master` and `merge` your feature branch. `push` once you finish each one to help me keep an eye on progress as you go.
    
    c) Test that your code definitely works on master, then delete unused branches.

2. In a new file called `messaging.js` write a new function called `showHelp`.

    a) This function should print help text to the console.

    b) Connect this function to `index.js` using CommonJS Module syntax.
    The function should fire if the term `--help` appears anywhere in the argument list. Think about your control flow before writing code.

    Remember: Git is your friend.

3. In a new file called `formatting.js` write a new function called `removeWhitespace`. This function should take a string as a parameter and:

    a) Trim whitespace from the beginning and end of the param
    
    b) Collapse spaces (ensure only one space appears at a time, no doubles)

    Example output:  

    - '  sao   tome'     => 'sao tome'
    - 'kuala lumpur  '  => 'kuala lumpur'
  
Tip: Use console.log to check your output as you go. Remove any test calls to console.log once you're happy with the output.

Remember: Do the Git dance.

4. Still in `formatting.js` write a new function called `capitalizeInitial`. This function should take a string as a parameter, and return it with only the first letter capitalized.

    Example output:  

    - 'europe'        => 'Europe'
    - 'BERLIN'        => 'Berlin'
    - 'aSIa'          => 'Asia'

Remember: Have you committed lately?

5. Still in `formatting.js` write a new function called `prepareString` that puts an input string through `capitalizeInitial` and `removeWhitespace` then replaces any spaces with underscores.

    Example output:

    - 'kuala  lumpur'   => 'Kuala_Lumpur'
    - '  puerto rico'   => 'Puerto_Rico'
    - ' tokyo'          => 'Tokyo'

There are a million other ways we should sanitize user input before using it in a production app, but this will do for now.

Remember: Hmmm end of the exercise. Wasn't there something to remember...?

6. Start a new file called `client.js` to handle your API call (similar to what we did yesterday).

Remember: Did you remember on your own this time?

7. Write a function to format the API response before presenting it to the user, so it's easier to read. (To decide where to write this function, think about how your control flow will go through your files and functions between input and ouput).

Remember: What happens before the next exercise?

8. Handle common errors with helpful messages for the user

Remember: You know the drill.

9. Pick another endpoint to be handled by the same app. At which points will your existing control flow need to change to accommodate this? Go through the steps of preparing input, performing the call and formatting output. Keep committing as you complete small steps toward this.