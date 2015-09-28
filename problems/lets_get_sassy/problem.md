Pattern Lab uses Sass, a CSS compiler, to handle its styling. 
If you don't know any Sass, don't worry! Regular CSS is perfectly valid inside of scss files.

Larger projects generally create a mirror directory to contain the Sass partials.
Our mustache directories would sit inside of a `patterns/` folder, while every corresponding stylesheet 
would sit in its respective folder inside of `scss/`

Eventually, Sass(/Pattern Lab) will take every stylesheet following a certain naming convention and compile them into 
a single stylesheet for the entire site. I won't make you create that whole duplicate structure for this lesson,
just know that is how it is generally done.

For our purposes, we'll stick our .scss file next to the component we're modifying, as we did last lesson with the sidecar json.

Let's go back to our button. It was called: `01-tutorial-button.mustache`, so our stylesheet will be called: `_01-tutorial-button.scss`

That underscore is incredibly important. It is how Sass/Pattern Lab knows that the stylesheet is a partial stylesheet and should be compiled.

We're going to add some light styling to our button. Let's center the text and add some color.

`button {`
  `color: green;`
  `text-align: center;`
`}`

