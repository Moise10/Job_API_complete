const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
	company: {
		type: String,
		required: [true, 'Please provide a company name'],
		maxlength: 50,
	},
	position: {
		type: String,
		required: [true, 'Please provide a position'],
		maxlength: 100,
	},
	status: {
		type: String,
		enum:['interview', 'declined','pending' ],
		default: 'pending'
	},
	createdBy: {
		//This will set the reference to the User who created the job , user with the right ID
		type: mongoose.Types.ObjectId,
		ref:'User',
    required:[true, 'Please provide user']
	},
},{ timestamps:true});


module.exports = mongoose.model('Job', JobSchema);