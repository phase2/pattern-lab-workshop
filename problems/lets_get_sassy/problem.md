Pattern Lab uses Sass, a CSS compiler, to handle its styling. 

Larger projects generally create a mirror directory to contain the Sass partials.
Our directories would sit inside of patterns/ and every stylesheet partial we make
would sit in its respective folder inside of scss/

I won't make you create that whole duplicate structure for this test, just know that is how it is generally done.
For our purposes, we'll stick our .scss file next to the component we're modifying, as we did with the sidecar json.

Let's go back to our button. It was called: `01-tutorial-button.mustache`, 
so our stylesheet will be called: `_01-tutorial-button.scss`

The underscore at the front is absolutely essential, as that's how Sass knows it is a partial stylesheet.
Eventually, Pattern Lab will take every partial and compile them into a single stylesheet for the entire site.

If you don't know any Sass, don't worry! Regular CSS is perfectly acceptable inside of scss files.

Let's make our button red with the text centered.