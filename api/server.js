const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

const csrf = require('csurf');
const cookieParser = require('cookie-parser');
var csrfProtection = csrf({ cookie: true });

app.use(express.json())
app.use(express.static(__dirname));
const db = require('./queries');

app.use(express.urlencoded({extended: true}))

app.set('view engine','ejs')
app.use(cookieParser());

app.get('/', csrfProtection, function (req, res) {
    // pass the csrfToken to the view
    res.render('index', { csrfToken: req.csrfToken() });
});

app.post('/api/online-queries/fetch', db.getAllQueries)

app.post('/api/online-queries',csrfProtection, db.createOnlineQuery)

app.get("*", (req, res) => {
    const path = req.path.split('/').pop();
        res.render(path);   
});

app.listen(PORT, () => console.log(`Server up at http://localhost:${PORT}`))
