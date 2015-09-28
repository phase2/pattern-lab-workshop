Organisms are groups of molecules (and possibly atoms) joined together 
to form distinct section of an interface.

Organisms can consist of similar and/or disparate molecule types.
For example, a masthead organism might consist of a logo, navigation, 
and search form, while a “product grid” organism might consist of the 
same product info molecule repeated over and over.

Building up from molecules to organisms encourages creating standalone, 
portable, reusable components.

---

Let's turn our item molecule from the last lesson into a product grid 
organism!

This organism will consist of a div that contains three item molecules. 

Create a new folder for your organisms to live in: `organisms`

Create a file called: `01-product-grid.mustache`

This organism needs a wrapper div and 3 mustache partials, all referring to the item molecule we previously created.

**Hint:** The partial looks like this: `{{> molecules-item }}`

Be sure the close the div after the partials!