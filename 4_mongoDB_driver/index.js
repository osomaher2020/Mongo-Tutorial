const express = require("express")
const bookStoreRoutes = require("./BookStoreRoutes")

// init app & middleware
const app = express()
app.use(express.json())

app.use("/books", bookStoreRoutes)

// routes
app.get("/", (_req, res) => res.json({message: "home"}))

app.listen(3000, () => console.log(`started on http://localhost:3000`))