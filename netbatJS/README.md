# netbatJS

A minimalistic javascript framework to put all your javascript code into your HTML-dom attributes. Inspired by Alpine JS and HTMX.

Just 493 Bytes!!! (This README has 680 Bytes)

It works, but is maybe not yet finished.

Directives:
- "data-data" for object of variables and functions
- "data-init" for executing functions on page loaded
- "data-bind" + "data-set" for data binding (use "ref" to set and call bound variable e.g. "ref.variable")

Bindings need an Element-Id.
For events use standard-attributes e.g. "onclick", "oninput".

To inspect usage go to file: https://github.com/DaBusch/netbattalion/blob/main/netbatJS/netbattalionJS.html

Problems to solve:

- Bindings still need an Id
- I didn't yet get typechecking on numbers to work.
