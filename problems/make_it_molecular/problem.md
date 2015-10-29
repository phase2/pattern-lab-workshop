In interfaces, molecules are groups of elements that function together as a unit. 
For example, a form label, search input, and button atom can combine them together to form a search form molecule.

Building up from atoms to molecules encourages a “do one thing and do it well” mentality, 
and encourages creating reusable interface patterns.

---

For the purposes of this lesson, we will be creating an item molecule.
This molecule will consist of a div that contains two mustache partials, 
one for our image and one for our button. 

First, make a new folder for your molecules to live in. Call it `molecules`

We're making an item molecule, so make a new file in that folder called `01-item.mustache`

In that file, make a `<div>` tag.

Next, include the mustache partials.

The image mustache partial looks like this: `{{> atoms-image }}`
The button mustache partial looks like this: `{{> atoms-button }}`

Be sure to close the `<div>` tag afterwards.


For more info on how Pattern Lab works its magic with mustache: 
  `http://patternlab.io/docs/pattern-including.html`
For more info on mustache syntax in general: 
  `http://mustache.github.io/mustache.5.html`
