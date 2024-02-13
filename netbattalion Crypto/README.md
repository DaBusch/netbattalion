
---------- FUNCTIONS -------------------

Functions return PROMISE, use "async/await"

    // ----------------------------------- ENCRYPT AND DECRYPT MESSAGE --------------

siv(UInt) // get Salt or IV

enAES / deAES ( Password_String || CryptoKey, Plaintext_String,  Iv_UInt8ArrayString, (Salt_UInt8ArrayString)  )

Use Salt with plain text password

    // ------------------------------- DIFFIE HELLMAN KEY EXCHANGE ------
    
genECDHKeyPair ()

deriveSecretKey ( KeyPair_Alice .privateKey, KeyPair_Bob .publicKey )

and

deriveSecretKey ( KeyPair_Bob .privateKey, KeyPair_Alice .publicKey )

    // ------------------------------- SIGNATE AND VERIFY MESSAGES ------------
    
genECDSAKeyPair ()

signMessage ( text, KeyPair .privateKey )

verifyMessage ( text, KeyPair .publicKey, signature )

    // ------------------------------- ES6 MODULE ------------

Use named imports
