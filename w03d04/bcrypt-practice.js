const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);

// console.log('salt:', salt);

const plaintextPassword = 'monkeyfuzz';

const hash = bcrypt.hashSync(plaintextPassword, salt);

// console.log('hash:', hash);

const storedHash = '$2a$10$ze5tSwqhZO8Kj9xdZT/IPO.VhRAkoQf3CWZ5VjZE3KQLa9wnXXM0y';

const result = bcrypt.compareSync('monkeyfuzz', storedHash);

console.log('result:', result);

