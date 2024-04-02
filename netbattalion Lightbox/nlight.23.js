; ( () => {
    let i, ck = 'click', b = '#ntbtlx ', d = document, sx, ex, dl = 40,

    //------------------- Helper Funktions ------------------------------------
    //--------------------$ ck d et q ev tc fw bk cl load s n g q j k l st
    et = ( e ) => e .target,
    q = ( e, v ) => e .querySelectorAll( v ),
    ev = ( i, a, f ) => i .addEventListener( a, f ),
    tc = ( e ) => e .changedTouches[ 0 ] .clientX,
    st = ( a, b ) => setTimeout( a, b ),
    $ = v => {
        let z = d .querySelector( v ),
        t = {
            d : z,
            e : ( e, f ) => ( ev( z, e, f ), t ),
            a : v => ( c .add( v ), t ),
            r : v => ( c .remove( v ), t ),
            p : v => ( s .opacity = v, t ),
            v : v => ( s .height = v, t )
        },
        c = z.classList,
        s = z.style    
        return t
    }

    //------------------- FF, BW, CLOSE LIGHTBOX ------------------------------
    let fw = () => ( ++j == l && (j = 0), s() ),
    bk = () => ( --j < 0 && (j = l-1), s() ),
    cl = e => (
        ( et( e ) == $( b ) .d || et( e ) == $( b +'#c' ) .d )
        && (
            $( b ) .p( '0' ),
            $( b + '#l' ) .p( '0' ),
            st( () => $( b ) .v( '0' ), 250 ) )
        
    ),

    //------------------- SHOW IMAGE-------------------------------------------
    load = url => {
        return new Promise( ( rs ) => (
            ev( i = new Image(), 'load', e => rs( i ) ),
            i .src = url,
            i
         ) );
    },

    s = () => {
        $( '#x' ) .p('1')
        load( k[ j ] [ 0 ])
        .then( ( i ) => {
            $( b + '#l' ) .p('0')
            st ( () => {
                $ ( b + '#s' ) .d .setAttribute( 'src', i.src )
                $ ( b + '#t' ) .d .innerHTML = k[ j ] [ 1 ]
                st ( () => {                
                    $( b + '#l' ) .p('1')
                    $( '#x' ) .p('0')
                }, 150 )
            }, 250 )
        })
    },    

    //------------------- INIT GALLERY ----------------------------------------
    n = d.createElement( 'div' ),
    g = q( d, '.nb-gallery' ), y,
    j, k = [], l

    for ( i = 0; i < g .length; i++ ) {
        ev( g[ i ], ck, e => {
            e .preventDefault()
            p = v => v.parentNode
            var h = x = et( e )
            while ( ! h .classList .contains( 'nb-gallery' ) ) {
                h = p( h )
            }
            k = []
            for ( v of h = q( h, 'a' ) ) {
                k .push( [ v.href, v.title ] )
                if ( v == x || v == p( x ) ) {
                    j = Array .from(h) .indexOf(v)
                }
            }
            l = k.length

    //------------------- OPEN LIGHTBOX ---------------------------------------
            et( e ) .nodeName == 'IMG' && (
                s(),
                $( b ) .e( ck, cl ) .v('100%') .p( '1' ),
                $( b + '#x' ). p( '1' )
            )
    } ) };
    n .id = 'ntbtlx'
    n .innerHTML = `<div id="l" class="inv"><figure id="w"><img id="s"><ficgcaption id="t"></figcaption></figure></div><div id="b"></div><div id="c"></div><div id="f"></div><div id="x" class="inv"><div id="z"></div><div id="y"></div></div>`
    $( "body" ) .d .appendChild( n )
    $( b ) .a( 'inv' ) .a( 'off' )
    $( b + '#b' ) .e( ck, bk )
    $( b + '#f' ) .e( ck, fw )
    $( b + '#c' ) .e( ck, cl )

    //------------------- TOUCH EVENTS ----------------------------------------
    y = $( b + '#l' ) .e( 'touchstart', ( e ) => ( e.stopPropagation(), sx = tc( e ) ), true )
    y .e( 'touchend', ( e ) => ( ex = parseInt( tc( e ) ) - sx, ex > dl ? bk() : ex < -dl && fw() ), false )
} ) ()
