import mongoose from "mongoose"

const connection = async function() {
    // mongoose.Promise = global.Promise
    try {
        mongoose.connect("mongodb://localhost/MongoCRUD", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
    } catch (err) {
        console.log("Erro no banco de dados")
    }
    console.log("MongoDB on")
}

export default connection