const { MongoClient } = require("mongodb")

const connectToDb = async () => {
    const conn = await MongoClient.connect("mongodb://localhost:27017/bookstore") // is an -> Async task
    return conn.db()
}

module.exports = {
    connectToDb
}