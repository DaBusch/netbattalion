!(()=>{


    const $ = (v) => v.dataset,
    h = $(document .getElementsByTagName ( 'body' )[0]),
    o = document .querySelectorAll ( ' [ data-bind ] ' ), // bound
    d = eval ( " ( " + h .data + " ) " ),
    n = eval ( " ( " + h .init + " ) " )
for ( let i in d ) {
  window [ i ] = d [ i ]
}
for ( let i in n ) {
    n [ i ]()
  }


//   q=document.querySelectorAll('[data-click]')[0]


        // q.addEventListener('click', ()=>alert('q.dataset.click'))
// --- CLICK ---
// for ( let i of document .querySelectorAll ( '[data-click]' ) ) {
//   console.log('q.dataset.click')
//     i .addEventListener ( 'click', ( ) => eval ( i .dataset .click ) )
// }

// ================================================================================
    var b = { } // bindings
    var r = { } // reactive
    for ( let i of o ) { // bound
        // r[i.dataset.bind.split('=')[0]] = eval(i.dataset.bind)
        console .log ( r [ $(i) .bind ] = i .innerHTML )
        // ref[i.dataset.bind] = i .innerHTML
    }
    // -----------------------------------------------------------
    for ( let i in r ) {
        b [ i ] = [ ]
        for ( e of o ) {
            let x = 0
            if ( $(e) .bind == i ) {//.split('=')[0]
                b [ i ] .push (
                    { [ e .id ] : eval ( ' ( ) => { ' + $(e) .set + ' } ' ) }
                )
            // b[i][0][el.id](el)
            }
        }
    }
    ref = new Proxy ( r, {
        set: ( t, k, v ) => {
            t [ k ] = v
            for ( f of b [ k ] ) {
                    for ( let k in f ) {
                        self = document .getElementById ( k )
                        f [ k ] ( self )
                    }
                }
            return true;
        }
    });
// =================================================================================
// ------------ FRAMEWORK ------------------------

for ( let a in b) {
    ref[a] = r[a]
}})()