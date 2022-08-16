const { connectToDb } = require("./db")
const { ObjectId } = require("mongodb")

class BookStoreController {

    getAllBooks = async (_req, res) => {
        let books = []

        const db = await connectToDb()

        db.collection('books')
            .find()     // returns a cursor
            .forEach(book => books.push(book))
            .then(() => {
                res.status(200).json(books)
            })
            .catch(err => {
                res.status(500).json({error: err.message})
            })

    }



    getOneBook = async (req, res) => {

        const book_id = req.params.id

        if(ObjectId.isValid(book_id)){ // if it is a valid Mongo ObjectId

            const db = await connectToDb()

            db.collection('books')
                .findOne({_id: ObjectId(book_id)})
                .then((book) => {
                    res.status(200).json(book)
                })
                .catch(err => {
                    res.status(500).json({error: err.message})
                })
        }
        else{
            res.status(400).json({error: "not a valid doc id"})
        }
    }

    // create New
    createBook = async (req, res) => {

        const book = req.body

        const db = await connectToDb()

        db.collection('books')
            .insertOne(book)
            .then(result => res.status(201).json(result))
            .catch(err => res.status(500).json(err))
    }

    deleteBook = async (req, res) => {
        const db = await connectToDb()

        const id = req.params.id

        if(ObjectId.isValid(id)){
            db.collection('books')
                .deleteOne({_id: ObjectId(id)})
                .then(result => res.status(200).json(result))
                .catch(err => res.status(500).json(err.message))
        }
        else{
            res.status(500).json({err: "no valid id provided"})
        }
    }

    updateBook = async (req, res) => {
        const db = await connectToDb()

        const id = req.params.id
        const updatedData = req.body

        if(ObjectId.isValid(id)){
            db.collection('books')
                .updateOne({_id: ObjectId(id)}, {$set: updatedData})
                .then(result => res.status(200).json(result))
                .catch(err => res.status(500).json(err.message))
        }
        else{
            res.status(500).json({err: "id is not valid"})
        }
    }
}

module.exports = BookStoreController