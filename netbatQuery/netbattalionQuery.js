$ = (e, t) => {
    let r = {
        d: 0,
        each: (e, d) => {
            for (t in e) d(r)
            return r;
        },
        html: (e) =>
            '' == e || e
                ? (console.log(!e), (r.d.innerHTML = e), r)
                : r.d.innerHTML,
        class: (e, t) => (r.d.classList[e](t), r),
        style: (e, t) => ((r.d.style[e] = t), r),
        event: (e, t, d, n) =>
            'add' == e ?
                (r.d.addEventListener(t, d, n), r)
                : 'remove' == e ?
                    (r.d.removeEventListener(t, d, n), r) : r,
        insert: (e) => {
            let t = document.createElement(e);
            return r.d.appendChild(t), (r.d = t), r
        },
        parent: () => ((r.d = r.d.parentNode), r),
        attribute: (e, t, d) =>
            'set' == e ?
                (r.d.setAttribute(t, d), r)
                : 'remove' == e ?
                    (r.d.removeAttribute(t), r)
                    : 'get' == e ?
                        r.d.getAttribute(t)
                        : r,
    };
    return (
        (() => {
            let d = document.querySelectorAll(e)
            1 == d.length
                ? (r.d = d[0])
                : (() => {
                      for (let e of d) (r.d = e), t(r)
                  })()
        })(),
        r
    );
}

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
