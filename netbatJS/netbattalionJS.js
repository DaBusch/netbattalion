( ( ) => {
    let q, r = {}, s = {},
    o = document .querySelectorAll( "[data-bind]" )
    for( i of o ) {
        let u = i .dataset,
        t = u. bind .trim() .split(","),
        y = t[ 0 ],
        v = t[ 1 ]
        v && (r[ y ] = eval( v ) ?? i.innerHTML)
        s[ y ] ?? ( q = s[ y ] = [] ),
        q .push( [ i, Function( u .set ) ] )
    }
    ref = new Proxy(
        r, {
            set: ( k, t, e ) => {
                k[ t ] = e
                for ( i of s[ t ] ) i[ 1 ] ( me = i[ 0 ] ) 
            }
        }
    )
    for ( i in ref ) ref[i]=r[i]
} )()
