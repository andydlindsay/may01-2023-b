# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [ ] REST
- [ ] More HTTP methods
- [ ] Method Override [Stretch]

### Storing Passwords
* We **never** want to store passwords as plain text
* Passwords should always be _hashed_ 
* **Hashing**:
  * The original string is passed into a function that performs some kind of transformation on it and returns a different string (the _hash_)
  * This is a one way process: a hashed value cannot be retrieved
* We make hashing more secure by adding a _salt_ to the original string prior to hashing
* This [helps to protect against Rainbow Table attacks](https://stackoverflow.com/questions/420843/how-does-password-salt-help-against-a-rainbow-table-attack)

### Encrypted Cookies
* Plain text cookies can be manipulated by users
* It's better practice to use _encrypted_ cookies
* **Encryption**:
  * Similar to hashing, the string is scrambled/transformed by a function
  * This is a two-way process: encrypted strings can be decrypted by the intended recipient

### HTTP Secure (HTTPS)
* HTTPS uses Transport Layer Security (TLS) to encrypt communication between client and server
* Encrypted using asymmetric cryptography which uses a public key and private key system
* The public key is available to anyone who wants it and is used to encrypt the communication
* The private key is known only to the receiver and is used to decrypt the communication

### When to use...
* Plain Text Cookies:
  * Almost never use plain cookies
  * Maybe for:
    * Language selection
    * Shopping cart for non-logged in users
    * Analytics
* Encrypted Cookies:
  * Do this by default
  * Only store a way to uniquely identify the user (eg. `user_id` or `username` can be used to look up values in a database or object)

### Useful Links
* [Plain Text Offenders](https://github.com/plaintextoffenders/plaintextoffenders/blob/master/offenders.csv)
* [How Does Encryption Work?](https://medium.com/searchencrypt/what-is-encryption-how-does-it-work-e8f20e340537)
* [What is HTTPS?](https://www.cloudflare.com/learning/ssl/what-is-https/)
* [Asymmetric Cryptography](https://searchsecurity.techtarget.com/definition/asymmetric-cryptography)
* [Client Session vs Server Session](http://www.rodsonluo.com/client-session-vs-server-session)
* [Resource Naming](https://restfulapi.net/resource-naming/)
* [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
* [Method Override Package](https://www.npmjs.com/package/method-override)
* [Express Response Object](http://expressjs.com/en/api.html#res)
* [List of common Express middleware](https://expressjs.com/en/resources/middleware.html)
