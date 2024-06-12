; ( ( ) => {
    let r = {}, f = {}
    for( i of document .querySelectorAll( "[data-bind]" ) ) {
        let d = i .dataset,
// ---- Variables ----------------------------------------
        b = d .bind .split( "=" ),
        y = b[ 0 ] .trim()
        b[ 1 ] && ( r[ y ] = eval( b[ 1 ] ) )

// ---- Functions ----------------------------------------
        w = f[ y ] ?? ( f[ y ] = [] ),
        w .push( [ i, Function( d .set ) ] )
    }

// ---- Observe ------------------------------------------
    ref = new Proxy(
        r, {
            set: ( r, p, v ) => {
                r[ p ] = v
                for ( i of f[ p ] ) i[ 1 ] ( me = i[ 0 ] ) 
            }
        }
    )
} )()
