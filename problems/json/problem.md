We have all these mustache files, but no data for them.
So it's time to make our global json file!

The cool thing about mustache is it can serve up all sorts of things.
So far we've been using it to substitute in html structure, 
but remember all the way back to our little button atom, 
when we put {{ btnText }} as its text?
You bet mustache can serve up some JSON for what that will say.

First things first, we'll need a directory for our data.
Keep it simple, call it `data`.
For Pattern Lab to compile properly, our global json file must be named: `_data.json`

In that file, we're going to need a JSON object with a name of `btnText` and a value that says `Add to cart`

That looks like this:
`
{
  "btnText": "Add to cart" 
}
`

For more info about JSON syntax, check `http://www.w3schools.com/json/json_syntax.asp`