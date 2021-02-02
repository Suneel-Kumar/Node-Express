const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://admin:admin@cluster0.zg8gm.mongodb.net/cmad_20Jan?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection
    .once('open', () => {
        console.log('Yahooo! Connection is Established.');
    })
    .on('error', (err) => {
        console.log('Err: ', err);
    })

const UserSchema = new Schema({
    name: {
        type: String,
        required : [true, "Name Should be Required"]
    }
});

const User = mongoose.model('users', UserSchema);

module.exports = User;