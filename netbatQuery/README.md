netbatQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation and event handling like jQuery.

761 Bytes

// $('tag|#id|.class|[data-foo="value"]|...', callback) returns one element or NodeList (NodeList needs Callback-function),
// .d dom-element
// .each('callback(d)') -> loops throught Data-Object
// .html('innerHTML')
// .class('add|remove', 'class')
// .style('property', 'value')
// .event('add|remove', 'event', 'callback')
// .insert('newChild')
// .parent()
// .attribute('set|get|remove', 'attribute', 'value')
