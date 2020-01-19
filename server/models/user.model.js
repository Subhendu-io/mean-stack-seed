const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: 'Usernae can\'t be empty.',
        unique: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: 'Email can\'t be empty.',
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: 'Password can\'t be empty.',
        trim: true,
        minlength: [4, 'Password must be atleast 4 character long']
    },
    // saltSecret: String
}, {
    timestamps: true,
});

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid email');

// userSchema.pre('save', function(next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });

mongoose.model('User', userSchema);
