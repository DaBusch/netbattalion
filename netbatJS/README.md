# netbatJS

A minimalistic Javascript reactivity framework to put javascript code into your HTML-dom attributes. Inspired by Alpine JS and HTMX. This may be the tinyest Javascript framework out there.

Minified just 308 Bytes!!! (This README has more than 700 Bytes)

It works, but is maybe not yet finished.

Directives:
- "data-bind" for data binding.
- "data-set" is executed when "data-bind"-variable has changed. Use "ref" to set and call bound variable. Use "me" to get the Element of the "data-set" e.g. "me.innerHTML =   ref.variable"
- For events use standard-attributes e.g. "onclick", "oninput".

The HTML-document is a simple webshop demo. Here is the demo site: https://www.netbattalion.de/netbatjs<br>
To inspect usage go to file: https://github.com/DaBusch/netbattalion/blob/main/netbatJS/netbattalionJS.html
