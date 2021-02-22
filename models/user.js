const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            required: true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            match: [/.+@.+\..+/]
        },

        thoughts: {
            type: Array,
            required: true,
            enum: ['thoughtText' , 'createdAt', 'username', 'reactions']
        },

        friends: {
            type: Array,
            required: true,
            enum: ['usernmame', 'email', 'thoughts', 'friends']
        }

})

 UserSchema.virtual('friendCount').get(function() {
    return this.friends.reduce(

    );
  });
  
  const User = model('User', UserSchema);
  
  module.exports = User;
  