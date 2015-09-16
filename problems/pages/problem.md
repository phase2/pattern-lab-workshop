
Pages are specific instances of templates and swap out placeholder content 
with real representative content to give an accurate depiction of what a user will ultimately see.

Pages are essential for testing the effectiveness of the design system. 
This final form allows us to loop back to modify our molecules, organisms, 
and templates to better address the real context of the design.

Pages also provide a place to test variations in templates, 
such as testing an article containing a 40-character-length headline and another 
article with a 340-character-length headline. What does it look like when a user has 
one item in their shopping cart versus 10 items with a discount code applied? 
These specific page instances test the resiliency of the system, 
influencing how the underlying molecules, organisms, and templates are constructed.

---

Pages are probably the simplest files to set up, at least from the mustache perspective.

All a page file requires is a partial linking to the template that you want to use. A wrapper div isn't required.

So you know the drill... make a directory for your pages and a file containing the template partial.

Folder: `pages`
Filename: `01-products.mustache`
Partial: `{{> templates-products }}`

Seems simple, but the magic happens when JSON is introduced. We'll explain more next lesson.