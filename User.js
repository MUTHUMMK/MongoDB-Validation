const mongoose = require("mongoose")
const addressSchema = mongoose.Schema({
    street: String,
    city: String
});
const createSchema = mongoose.Schema({
    type: Date,
    // immutable: true,
    default: Date
})
const user = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
        validate: {
            validator: v => v%2 === 0,
            message: props => `${props.value} this age not allowed`
        }
    },
    email: {
        type: String,
        require: true,
        min:10,
    },
    Phone:{        
    type: Number,
    require: true
},
    CreatedAt: {
        createSchema
},
    UpdateAt: {
        createSchema
},
    Hobbies: [String],
    Address: addressSchema
})

module.exports= mongoose.model("User",user)