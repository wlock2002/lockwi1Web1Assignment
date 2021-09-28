const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require("path");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')))

app.set("view engine","ejs");



app.get('/', (req, res) => res.render('index'))
app.get('/help', (req, res) => res.send('Ah, high school. Back when wed sit in AP English class and listen to the teacher go on about the supposed symbolism in classic works of literature for what felt like hours. Lo and behold, its entirely possible that some writers just want to write a damn sentence that doesnt contain some sort of brilliant imagery. All the way back in 2013, a Tumblr user pointed out the line "What, you egg?" in Shakespeares MacBeth. Was Shakespeare trying to convey some sort of secret meaning here? Its possible, but its more likely he just wanted to throw in a silly insult.'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))