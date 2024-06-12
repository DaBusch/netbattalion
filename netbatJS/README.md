# netbatJS

A minimalistic Javascript reactivity framework to put javascript code into your HTML-dom attributes. Inspired by Alpine JS and HTMX. This may be the tinyest Javascript framework out there.

Minified just 266 Bytes!!! (This README has 824 Bytes)

It works very fine, but maybe it is not yet recommended for production.

Directives:
- "data-bind" for data binding.
- "data-set" is executed when "data-bind"-variable has changed. Use "ref" to set and call bound variable. Use "me" to get the Element of the "data-set" e.g. "me.innerHTML =   ref.variable". Don't set bound variable in the same dom-element, this leads to an infinite update-loop.
- For events use standard-attributes e.g. "onclick", "oninput".

  If you prefer to put the JS-Code into separate files use it like this: "data-bind='variable=value' data-set='yourFunction(argument)'"

The HTML-document is a simple webshop demo. Here is the demo site: https://www.netbattalion.de/netbatjs<br>
To inspect usage go to file: https://github.com/DaBusch/netbattalion/blob/main/netbatJS/netbattalionJS.html
