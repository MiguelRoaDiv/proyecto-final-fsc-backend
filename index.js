const express = require("express")
const app = express()
const port = 5000

app.listen(port, _ => {
    console.log(`Server running in port ${port}`)
})