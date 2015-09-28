With templates, we break our biochemistry analogy to get into language 
that makes more sense to clients and final output. 
Templates are comprised mostly of organisms combined together to form 
page-level objects.

Templates provide context for these relatively abstract molecules and 
organisms, which is helpful for designers and clients alike.

Templates mostly focus on content structure (such as character length, 
image size, etc) rather than the actual content.

---

This lesson is going to have a few more steps than the previous few.

First, we're going to make a few empty organisms, to really show how templates are structured.
We'll need a header and a footer organism. Don't worry about the content in these files, 
just name them `02-header.mustache` and `03-footer.mustache`. 
Be sure to save them inside the `ORGANISMS` folder!

Now, make a new folder for your templates: `templates`

Next, name your template `01-products.mustache`

This template is going to need a few things:
  A partial for the header: `{{> organisms-header }}`
  A partial for the product grid: `{{> organisms-product-grid }}`
  A partial for the footer: `{{> organisms-footer }}`
  Wrapper divs around each partial.