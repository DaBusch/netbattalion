
let d = document
, $ = ( v, a ) => {
    let z
    ( ( ) => {
        let x = document .querySelectorAll( v )
        z = a ? x : x[ 0 ]
    })()
    let r = {
        n: z,
        aC: ( v ) => ( z .appendChild( v ), r ),
        cl: ( v ) => ( z .addEventListener( 'click', v) )
    }
    return r
}
, cl = ( z, v ) => ( z .addEventListener( 'click', v) )
, stl = $('#styles').n
, html = $( 'html' ).n
, sys = $('#system').n
, ctr = $('#control').n
// , edt = $( 'button', 'all' ) .n[ 0 ]
, gen = $( 'button', 'all' ) .n[ 0 ]
, b = $( 'button', 'all' ) .n[ 1 ]
// , editor = $('#editor').n
, out = ''

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------
function setLinksAndScripts(data, headOrBody) {
    let d
    for ( let e of headOrBody ) {
        let h = $( 'head' )
        , b = $( 'body' )
        'head' == e ? d = data[e] : 'body' == e && ( d = data )
        if ( d .scripts ) {
            for ( let v of d.scripts) {
                let s = document.createElement('script')
                s.src = v
                'head' == e && h.aC(s)
                'body' == e && b.aC(s)
            }
        }
        if ( d .links) {
            for ( let v of d.links) {
                var l = document.createElement("link");
                l.rel='stylesheet'
                l.href = v;
                'head' == e && h.aC(l)
                'body' == e && b.aC(l)
            }
        }
    }
}
// ----------------------------------------------------------------------------
function c() {
    return new Promise( a => {
        s = () => ( b .removeEventListener( 'click', s ), a() )
        b .addEventListener('click', s );
    } )
}
// ----------------------------------------------------------------------------
function ex( i, o ) {
    html .innerHTML = templates[ data[ i ] .template ] ( data[ i ] )
    o && ( $( 'head' ) .aC( stl ), $( 'body' ) .aC( sys ) )
    setLinksAndScripts( data[ i ], [ 'head', 'body' ] )
    return html .innerHTML
}
// ----------------------------------------------------------------------------
function generate( e, data ) {
    e .stopPropagation()
    for ( let i in data ) {        
        download( ex( i, false ), "text/html", data[ i ] .name )
    }
}
// ----------------------------------------------------------------------------
async function simulate( d ) {
    let i = 0
    while ( !0 ) {
        ex(i, true)
        i++
        i == d .length ? i = 0 : i
        console.log( 'Wait on Click' )
        await c()
    }
}
// ----------------------------------------------------------------------------
// cl( edt, () => editor .classList .toggle( 'invisible' ) )
cl( gen, () => generate( event, data ) )
simulate(data) 
drggbl(ctr)
// drggbl(editor)

function download( x, t, n ) {
    let h = `<!DOCTYPE html>
<html lang="de">
${ x }
</html>
`
    , b = new Blob( [ h ], { type: t })
    , a = d .createElement( 'a' )
    a .download = n
    a .href = URL .createObjectURL( b )
    a .dataset .downloadurl = [ t, a.download, a.href ] .join( ':' )
    a .style .display = "none"
    d .body .appendChild( a )
    a .click()
    d .body .removeChild( a )
    setTimeout( function() { URL .revokeObjectURL( a .href ) }, 1500 )
}
// ----------------------------------------------------------------------------
function drggbl(n) {
    let p1, p2, p3, p4
    n.onmousedown = (e) => {
        e.preventDefault()
        p3 = e.clientX
        p4 = e.clientY
        d.onmouseup = () => d.onmousemove = null//function closeDragElement(){d.onmouseup = null; d.onmousemove = null}
        d.onmousemove = (e) => {
            p1 = p3 - e.clientX
            p2 = p4 - e.clientY
            p3 = e.clientX
            p4 = e.clientY
            n.style.top = (n.offsetTop - p2) + "px"
            n.style.left = (n.offsetLeft - p1) + "px"
        }
    }  
}
