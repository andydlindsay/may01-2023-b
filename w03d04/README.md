# W03D04 - Security & Real World HTTP Servers

### To Do
- [x] Storing passwords
- [x] Encrypted cookies
- [x] HTTP Secure (HTTPS)
- [ ] REST
- [ ] More HTTP methods
- [ ] Method Override [Stretch]

### Hashing
* one way process (cannot be undone)
* plaintext password => hashing algo (bcrypt) => 'afsdhkfhasdjfhadhfkasdfasd'
* a salt is added to the password before it gets hashed
* "fajsdfjashdfhasdf" + "password" => hashing algo => 'asdjfhajsdhfjashdjfhasd'

### Encryption
* two way process (can be undone)
* set a cookie => encryption algo => 'afksdhfkahsdKfhzsd' => browser
* 'afksdhfkahsdKfhzsd' => decryption algo => { userId: 'abc' } => route handler

req.cookies.user_id => req.session.user_id
res.cookie('user_id', 'abc') => req.session.user_id = 'abc'
res.clearCookie('user_id') => req.session = null;



/urls/new
/urls/:id


https://localhost:8001/protected
Monster in the Middle (MitM)

asymetric encryption
key to lock and the key to unlock are NOT the same

public
private


https://www.google.com/




