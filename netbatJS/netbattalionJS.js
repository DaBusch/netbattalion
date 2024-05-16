; ( ( ) => {
    let r = {}, s = {},
    o = document .querySelectorAll( "[data-bind]" )
    for( i of o ) {
        let u = i .dataset,

// ---- Variables ----------------------------------------
        t = u. bind .trim() .split(","),
        y = t[ 0 ],
        v = t[ 1 ]
        v && (r[ y ] = eval( v ) ?? i.innerHTML)

// ---- Functions ----------------------------------------
        s[ y ] ?? ( s[ y ] = [] ),
        s[ y ] .push( [ i, Function( u .set ) ] )
    }

// ---- Observe ------------------------------------------
    ref = new Proxy(
        r, {
            set: ( k, t, e ) => {
                k[ t ] = e
                for ( i of s[ t ] ) i[ 1 ] ( me = i[ 0 ] ) 
            }
        }
    )
} )()
