import express from "express"
import connection from "./database/connection"

const app = express()
app.use(express.json())

connection()

import routes from "./routes"
app.use(routes)

app.listen(3000, () => console.log("Server on"))