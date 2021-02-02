const User = require('./07_userModel');

function addUser(){
    const joe = new User({ name: 'Suneel Kumar' });
    
    joe.save()
    .then((u) => console.log('Saved ', u))
    .catch((err) => console.log('Err ', err));
}

module.exports = addUser;