We have all these mustache files, but no data for them.
So it's time to make our global json file!

The cool thing about mustache is it can serve up all sorts of things.
So far we've been substituting in html structure using partials, but that's just one part of the magic.
Remember all the way back to our basic button atom, with its `{{ btnText }}`?
You bet mustache can absolutely serve us up some JSON for that.

First things first, we'll need a directory for our data.
Keep it simple, call it `data`.

For Pattern Lab to compile properly, our global json file must be named: `_data.json`
The underscore is _very_ important.

In that file, we're going to create a JSON object with a key of `btnText` and a value that says `Add to cart`

That looks like this:
`
{
  "btnText": "Add to cart"
}
`

For more info about JSON syntax, check `http://www.w3schools.com/json/json_syntax.asp`