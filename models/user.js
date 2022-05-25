const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '姓名未填寫']
        },
        image: {
            type: String,
            default: ""
        }
    },
    {
        versionKey: false
    });

const User = mongoose.model(
        'Profile',
        userSchema
      );
    
module.exports = User;