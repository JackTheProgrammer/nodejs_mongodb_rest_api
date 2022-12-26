const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    dateOfCreation: {
        type: Date,
        default: Date.now(),
    }
}, {
    collection: 'students'
});
module.exports = mongoose.model('StudentSchema', studentSchema)