# netbatJS

A minimalistic javascript framework to put all your javascript code into your HTML-dom attributes. Inspired by Alpine JS and HTMX.

Just 493 Bytes!!! (This README has 880 Bytes)

It works, but is maybe not yet finished.

Directives:
- "data-data" for object of variables and functions. Has to be in BODY-Tag.
- "data-init" for executing functions on page loaded. Has to be in BODY-Tag.
- "data-bind" + "data-set" for data binding. "data-set" is executed when "data-bind"-variable has changed. Use "ref" to set and call bound variable e.g. "ref.variable".

Notice:
- Bindings need an Element-Id.
- For events use standard-attributes e.g. "onclick", "oninput".

To inspect usage go to file: https://github.com/DaBusch/netbattalion/blob/main/netbatJS/netbattalionJS.html

Problems to solve:
- Bindings still need an Id
- I didn't yet get typechecking on numbers to work.
