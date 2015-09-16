In interfaces, molecules are groups of elements that function together as a unit. 
For example, a form label, search input, and button atom can combine them together to form a search form molecule.

Building up from atoms to molecules encourages a “do one thing and do it well” mentality, 
and encourages creating reusable interface patterns.

---

For the purposes of this lesson, we will be creating an item molecule.
This molecule will consist of a div that contains two mustache partials, 
one for our image and our button. 

First, make a new folder for your molecules to live in. Call it `molecules`

We're making an item molecule, so make a new file in that folder called `01-item.mustache`

A mustache partial looks like this: `{{> thing }}`
They can be very explicit: `{{> atoms-01-tutorial-button }}` 
Or more general: `{{> atoms-image }}`

The magic of mustache partials lies in the `>` syntax, which tells mustache to look for that file.

For more info on mustache syntax, please check: `http://mustache.github.io/mustache.5.html`

For this lesson, the more general syntax is fine.