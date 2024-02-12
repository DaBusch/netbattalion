
---------- FUNCTIONS -------------------

Functions return PROMISE, use "async/await"

    // ----------------------------------- ENCRYPT AND DECRYPT MESSAGE --------------

enAES / deAES ( Password_String || CryptoKey, Plaintext_String,  Iv_UInt8ArrayString, (Salt_UInt8ArrayString)  )

Use Salt with plain text password

    // ------------------------------- DIFFIE HELLMAN KEY EXCHANGE ------
    
genECDHKeyPair()
deriveSecretKey(KeyPair_Alice.privateKey, KeyPair_Bob.publicKey)
and
deriveSecretKey(KeyPair_Bob.privateKey, KeyPair_Alice.publicKey)

    // ------------------------------- SIGNATE AND VERIFY MESSAGES ------------
    
genECDSAKeyPair()
signMessage(text, KeyPair.privateKey)
verifyMessage( text, KeyPair.publicKey, signature)
