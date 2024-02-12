const
enc = i => new TextEncoder() .encode(i),
dec = i => new TextDecoder() .decode(i),
i = 192,
cs = crypto .subtle,
siv = e => Array .from( crypto .getRandomValues( new Uint8Array( e ) ) ) .toString(),

saltIvString = siv(16),                            //  SaltIVArrayString Returns number-CSV
iv = siv(16),
b = (salt) => new Uint8Array( salt.split(',') ),   // SaltIvBuffer Returns UInt8Array

// ----------------------------------- GENERATE KEY -----------------

// create the first key
iK = async (pw) => await cs.importKey(
    'raw', enc(pw), 'PBKDF2', false, ['deriveKey']
),
// create the second key
dK = async (pw, salt) => await cs.deriveKey( 
    { name: "PBKDF2", salt: b(salt), iterations: 250000, hash: "SHA-256", },
    await iK(pw),
    { name: "AES-GCM", length: 256 },
    true,
    ['encrypt', 'decrypt']
),

// ----------------------------------- ENCRYPT AND DECRYPT MESSAGE --------------

kT = async (key,s) => s ? await dK(key,s) : key,
mode = { name: "AES-GCM", iv: b( iv ) }

enAES = async (key, mess, iv, s) => {
    let e = [],
    m = await cs.encrypt(
        mode,
        await kT( key, s ),
        enc( mess )
    )
    for ( v of new Uint8Array(m)) {        
        e .push( String .fromCharCode( v + i ) ) }
        e = e .join( '' )
    return e
},

deAES = async (key, encrypted, v, s) => {
    let c = [], t
    for( t of encrypted ) c .push( t .charCodeAt( 0 ) - i );
    let d = await cs.decrypt(
        mode,
        await kT( key, s ),
        new Uint8Array( c )
    )
    return dec( d )
},

// ------------------------------- DIFFIE hELLMAN KEY EXCHANGE ------

genECDHKeyPair = async (use) => {
    return await cs.generateKey(
    {
        name: "ECDH",
        namedCurve: "P-521"
    },
    true,
    use
    )
  },

deriveSecretKey = async (privateKey, publicKey) => {
    return await cs.deriveKey(
        {
            name: "ECDH",
            public: publicKey
        },
        privateKey,
        {
            name: "AES-GCM",
            length: 256
        },
        false,
        ["encrypt", "decrypt"]
    )
},

// ------------------------------- SIGNATE AND VERIFY MESSAGES ------

genECDSAKeyPair = async () => {    
    return await cs.generateKey(
        {
            name: "ECDSA",
            namedCurve: "P-521",
        },
        true,                  //           
        ["sign", "verify"]
    )
},

signMessage = async (mess, privateKey) => {
    let m = enc(mess)
    return await cs.sign(
    {
        name: "ECDSA",
        hash: {name: "SHA-384"},
    },
    privateKey,
    m
    )
 },

 verifyMessage = async (mess, publicKey, signature) => {
    let e = enc(mess)
    return await cs.verify(
      {
        name: "ECDSA",
        hash: {name: "SHA-384"},
      },
      publicKey,
      signature,
      e
    );
 }

 
