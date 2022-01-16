import express from 'express'

const app = express()


app.get('/', (req, res) => {
    res.send({ message: 'Home page is here!' })
})

app.get('/api/v1/test', (req, res, next) => {
    res.send({
        data: {
            type: 'text',
            x: '10.33',
            y: '26.72'
        }
    })
})
app.listen(5000, () => {
    console.log('Server is up and running...')
})