netbatQuery is a JavaScript library designed to simplify HTML DOM tree traversal and manipulation and event handling like jQuery.

761 Bytes

// $('tag|#id|.class|[data-foo="value"]|...', callback) returns one element or NodeList (NodeList needs Callback-function),<br>
// .d dom-element<br>
// .each('callback(d)') -> loops throught Data-Object<br>
// .html('innerHTML')<br>
// .class('add|remove', 'class')<br>
// .style('property', 'value')<br>
// .event('add|remove', 'event', 'callback')<br>
// .insert('newChild')<br>
// .parent()<br>
// .attribute('set|get|remove', 'attribute', 'value')
