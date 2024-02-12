const
enc = i => new TextEncoder() .encode(i),
dec = i => new TextDecoder() .decode(i),
i = 192,
cs = crypto .subtle,
siv = e => Array .from( crypto .getRandomValues( new Uint8Array( e ) ) ) .toString(),//  SaltIVArrayString Returns number-CSV
b = (salt) => new Uint8Array( salt.split(',') ),                                     //  SaltIvBuffer Returns UInt8Array

// ----------------------------------- GENERATE KEY -----------------

// create the first key
iK = async ( pw ) => await cs .importKey(
    'raw', enc( pw ), 'PBKDF2', false, [ 'deriveKey' ]
),
// create the second key
dK = async ( p, salt ) => await cs .deriveKey( 
    { name: "PBKDF2", salt: b(salt), iterations: 250000, hash: "SHA-256" },
    await iK( p ),
    { name: "AES-GCM", length: 256 },
    true,
    [ 'encrypt', 'decrypt' ]
),

// ----------------------------------- ENCRYPT AND DECRYPT MESSAGE --------------

kT = async ( key, s ) => s ? await dK( key, s ) : key,

enAES = async ( key, mess, iv, s ) => {
    let e = [],
    m = await cs .encrypt(
        { name: "AES-GCM", iv: b( iv ) },
        await kT( key, s ),
        enc( mess )
    )
    for ( v of new Uint8Array( m )) {        
        e .push( String .fromCharCode( v + i ) ) }
        e = e .join( '' )
    return e
},

deAES = async ( k, enc, v, s ) => {
    let c = [], t
    for( t of enc ) c .push( t .charCodeAt( 0 ) - i );
    let d = await cs .decrypt(
        { name: "AES-GCM", iv: b( v ) },
        await kT( k, s ),
        new Uint8Array( c )
    )
    return dec( d )
},

// ------------------------------- DIFFIE hELLMAN KEY EXCHANGE ------

genECDHKeyPair = async () => {
    return await cs .generateKey(
    {
        name: "ECDH",
        namedCurve: "P-521"
    },
    true,
    [ 'deriveKey' ]
    )
  },

deriveSecretKey = async ( prK, puK ) => {
    return await cs .deriveKey(
        {
            name: "ECDH",
            public: puK
        },
        prK,
        {
            name: "AES-GCM",
            length: 256
        },
        false,
        [ "encrypt", "decrypt" ]
    )
},

// ------------------------------- SIGNATE AND VERIFY MESSAGES ------

genECDSAKeyPair = async () => {    
    return await cs .generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-521",
        },
        true,                  //           
        [ "sign", "verify" ]
    )
},

signMessage = async ( m, prK ) => {
    return await cs .sign(
    {
        name: "ECDSA",
        hash: { name: "SHA-384" },
    },
    prK,
    enc( m )
    )
 },

 verifyMessage = async ( m, puK, s ) => {
    return await cs .verify(
      {
        name: "ECDSA",
        hash: { name: "SHA-384" },
      },
      puK,
      s,
      enc( m )
    );
 }

 
