const mongoose = require('mongoose');
const User = require('./07_userModel')
const addUser = require('./08_createUser');

mongoose.connect('mongodb+srv://admin:admin@cluster0.zg8gm.mongodb.net/cmad_20Jan?retryWrites=true&w=majority', {
	useUnifiedTopology: true,
	useNewUrlParser: true
})

mongoose.connection
	.once('open', () => {
		console.log('Yahooo! Connection is Established.');
		// addUser();
		// const UserSchema = new mongoose.Schema({
		// name: String,
		// });

		// const User = mongoose.model('books', UserSchema);

		// User.find({}, (err, user) => {
		// 	if(err){
		// 		return console.log("Error");
		// 	}
		// 	console.log("Data", user)
		// })

		User.findOne({ name:"Suneel Kumar" }).then((result) => console.log("Users ", result)).catch((err) => console.log("Err ", err))

		// const joe = new User({ name: 'Suneel Kumar' });
		// console.log(joe.isNew, " joe.isNew");
		// joe.save()
		// .then((u) => {
		// 	console.log('Saved ', u)
		// 	console.log(joe.isNew);
		// })
		// .catch((err) => console.log('Err ', err));

	})
	.on('error', (err) => {
		console.log('Err: ', err);
	})