const express = require('express');
const path = require('path')
const data = require('./data/data.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    res.send(data)
})

app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send(data.find(user => user.id === +id))
})

app.post('/post', (req, res) => {
    res.send(`post request on /post route on port ${PORT}`)
})

app.put('/put', (req, res) => {
    res.send(`put request on /put route on port ${PORT}`)
})

app.delete('/delete', (req, res) => {
    res.send(`delete request on /delete route on port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})