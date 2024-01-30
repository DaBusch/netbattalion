!( () => {
    let i, q, r = {}, s = {}, e = data,
        o = document .querySelectorAll( '[data-bind]' )
    e .init()
    for ( i in e ) i != 'init' && ( x => {
        for ( i in d = e[ i ] ) self[ i ] = d[ i ]
    } ) ()
    for ( i of o ) {
        let u = i .dataset,
        t = u .bind .split( "," ),
        y = t[ 0 ]
        r[ y ] = t[ 1 ] || i .innerHTML
        !s[ y ] && ( q = s[y] = [] )
        q .push( [ i, Function(u.set) ] )
    }
    for ( i in ref = new Proxy( r, {
        set: ( k, t, e ) => {
            k[ t ] = e
            for ( i of s[ t ] ) i[ 1 ] ( self = i[0] )
        }
    } ) ) ref[ i ] = r[ i ]
} ) ()