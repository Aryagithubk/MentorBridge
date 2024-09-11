const mongoose = require("mongoose");
const dotenv = require("dotenv");

// dotenv config
dotenv.config();

mongoose.connect(
    "mongodb+srv://localhost:27017",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => {
        console.log("Connected to Database");
    }
);
