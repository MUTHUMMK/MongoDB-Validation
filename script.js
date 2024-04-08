const mongoose = require("mongoose");
const User = require('./User.js');
main().catch(err => console.log(err.message));
// const connectDB = mongoose.connect("mongodb+srv://BROMAGWEB:bromagweb@bromagweb.s3oc5mv.mongodb.net/test?retryWrites=true&w=majority");
// connectDB.then((db) => {
//     console.log("Connected correctly to server");
// }, (err) => { console.log(err); });

// async function main (){
//     await  mongoose.connect("mongodb+srv://BROMAGWEB:bromagweb@bromagweb.s3oc5mv.mongodb.net/test?retryWrites=true&w=majority");
//     const data = await User.create({
//         name: "mmk",
//         age: 20,
//         email: "mmk@gmail.com"
//     })
//     console.log(data);
// }
async function main() {
    const connectDB= await mongoose.connect("mongodb+srv://BROMAGWEB:bromagweb@bromagweb.s3oc5mv.mongodb.net/test?retryWrites=true&w=majority");
    const data= await User.create({
        name: "Muthu",
        age: 25,
        email: "mmk@gmail.com",
        Phone: 9786926580,
        age: 32,
        createAt: 10,
        Address: {
            street: "kamuthi"
        },
        Hobbies: ["cricket","chess"],
    });
    console.log(data);
};
