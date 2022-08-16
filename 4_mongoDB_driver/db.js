const { MongoClient } = require("mongodb")

const connectToDb = async () => {
    // local mongoCompass
    // const conn = await MongoClient.connect("mongodb://localhost:27017/bookstore") // is an -> Async task

    // remote mongoAtlas cloud
    const uri = "mongodb+srv://osomaher:test123@osomaher-mongo.rnclztp.mongodb.net/?retryWrites=true&w=majority"
    const conn = await MongoClient.connect(uri) // is an -> Async task
    return conn.db()
}

module.exports = {
    connectToDb
}