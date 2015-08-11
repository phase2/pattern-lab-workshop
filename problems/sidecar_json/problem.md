The `_data.json` file is our global info, generic data to be used as placeholders
or for things that won't change between pages, such as contact info or addresses.

But for things that DO need to be different, Pattern Lab uses a handy little trick we call "sidecar json"

Basically, if a mustache file has an accompanying json file,
the data in that file takes precedence over the global data when the pages are compiled.

For our purposes, let's assume we don't want our button to say "Add to cart" on our products page. 
What we really want it to say on this page is "Buy me!"

So we'll need a json file to overwrite for this specific instance. 
Put it in the pages folder, named the same as the page you want to accompany, but with a json extension.