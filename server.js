const express = require('express')
const app = express()
const port = 3001

app.set("view engine", "ejs");

app.use(express.static("public"));
app.set("views", "./views");

app.get('/', (req, res) => res.render("index", {
    title: "Pizza App Home",
    description: "Pizza Center: BY THE WAY I AM FROM SERVER SIDE"
}));

app.get('/:route', (req, res) => {
    res.render("index", {
        title: "about",
        description: "Product of Zen3 Food Inc.: BY THE WAY I AM FROM SERVER SIDE"
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))