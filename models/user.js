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
            required: true,
            unique: true,
            validate: {
                validator: () => Promise.resolve(false),
                message: 'Email validation failed'
              }
        },





})


UserSchema