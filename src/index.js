const express = require('express');
const path = require('path')
const data = require('./data/data.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.route('/users')
    .get((req, res) => {
        res.send(data)
    })
    .post((req, res) => {
        console.log('req.body', req.body);
        res.send(req.body);
        res.send(`post request on /users route on port ${PORT}`)
    })
    .put((req, res) => {
        res.send(`put request on /users route on port ${PORT}`)
    })
    .delete((req, res) => {
        res.send(`delete request on /users route on port ${PORT}`)
    })

app.get('/users/:id', (req, res, next) => {
    const { id } = req.params;
    const user = data.find(user => user.id === +id);
    console.log(user);
    res.send(user);

    next();
}, (req, res) => 
    console.log('Did you get the right data?')
);

app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
})