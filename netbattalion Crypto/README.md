
---------- FUNCTIONS -------------------

Functions return PROMISE, use "async/await"

    // ----------------------------------- ENCRYPT AND DECRYPT MESSAGE --------------

siv(UInt) // get Salt or IV

enAES / deAES ( Password_String || CryptoKey, Plaintext_String,  Iv_UInt8ArrayString, (Salt_UInt8ArrayString)  )

Use Salt with plain text password

    // ------------------------------- DIFFIE HELLMAN KEY EXCHANGE ------
    
genECDHKeyPair()<br>
deriveSecretKey(KeyPair_Alice.privateKey, KeyPair_Bob.publicKey)<br>
and<br>
deriveSecretKey(KeyPair_Bob.privateKey, KeyPair_Alice.publicKey)

    // ------------------------------- SIGNATE AND VERIFY MESSAGES ------------
    
genECDSAKeyPair()<br>
signMessage(text, KeyPair.privateKey)<br>
verifyMessage( text, KeyPair.publicKey, signature)

    // ------------------------------- ES6 MODULE ------------

Use named imports
