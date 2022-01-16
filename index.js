import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send({ message: 'Home page is here! ;p' })
    res.status(200)
})

app.listen(5000, () => {
    console.log('Server is up and running...')
})