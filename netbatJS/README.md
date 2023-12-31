# netbatJS

A minimalistic javascript reactivity framework to put javascript code into your HTML-dom attributes. Inspired by Alpine JS and HTMX. This may be the tinyest Javascript framework out there.

Just 392 Bytes!!! (This README has 722 Bytes)

It works, but is maybe not yet finished.

Directives:
- "data-bind" for data binding.
- "data-set" is executed when "data-bind"-variable has changed. Use "ref" to set and call bound variable e.g. "ref.variable".

Notice:
- For events use standard-attributes e.g. "onclick", "oninput".
- Because of use of "eval()" NEVER parse user input or asyncronously loaded code from untrusted sources. Wrong usage may be DANGEROUS.

To inspect usage go to file: https://github.com/DaBusch/netbattalion/blob/main/netbatJS/netbattalionJS.html
