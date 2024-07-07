function Route( cfg, dat, tpl, tle ) {
    let q = ( v ) => document.querySelector( v )
    , hst = history
    , ref = ''
    , tpo = cfg .templates
    , bod = q( cfg .render )
    , ttl = q( 'title' )
    , spl = ( a, b ) => a .split( b )
    , dom = ( a, b ) => ( bod .innerHTML = b .join( '' ), ttl .innerHTML = a )
    , f = ( p, t, h ) => {
        let [ pth, src ] = spl( p, '?' )
        if ( pth != ref ) {
            fetch( cfg .prot + cfg .host + pth + ( src ? '?' + src : '' ) )
            .then( a => a .json( ) ) .then( a => {
                    let r = spl( pth, '/' )
                    !t ? h = tle : null 
                    !tpo[t] && ( h = t, t = tpl )
                    hst .pushState( { t: t, h: h, d: ( Array .isArray( a ) ? a : a[ r[ 0 ] ] ) }, '', location.origin + '/' +  r[ 0 ])
                    let s = hst. state
                    dom( s .h, s .d .map( tpo[ s .t ] ) )
                    ref = p[0]
        }            )        }
    }
    , s = (a, b) => b ? localStorage .setItem( a, b ) : localStorage .getItem( a )
// ------------------------------------ INITIAL -------------------------------

    s( 'p' ) && cfg .openLast                                        // --- read localstorage, set history state
        ? ( p = s( 'p' ), t = s( 't' ), h = s( 'h' ), f( p, t, h ) )
        : ( hst .replaceState( { t: tpl, h: ( tle ? tle : ''),  d: dat }, '', '' )
            , dat && dom( tle, dat .map( tpo[ tpl ] ) )
        )
    window .addEventListener( 'popstate', e => {                     // --- history buttons and state
        let s = e. state
        dom( s .h, s .d .map( tpo[ s .t ] ) )
    } )
    !cfg .unload && ( window.onbeforeunload = () => true )           // --- if someone hits the reload button 

// ------------------------------------ RETURN --------------------------------

    return function( e, t, h ) {                                     // --- menu on click
        e .preventDefault( )
        let p = e .target .getAttribute( 'href' )
        cfg .openLast && ( s( 'p', p ), s( 't', t ), s( 'h', h ) )
        f(p, t, h)
    }
}
