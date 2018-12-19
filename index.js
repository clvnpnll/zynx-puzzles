require('marko/node-require');
let express = require('express');
let bodyParser = require('body-parser');
let markoExpress = require('marko/express');
let app = express();
let port = 8800;

let path = require('path');
let viewsDirectory = path.join(__dirname, '/server/views');
let publicDirectory = path.join(__dirname, '/public');

let comments = [];

let games = [
    {
        id: 1,
        title: 'Lara Croft',
        image: 'https://i.ytimg.com/vi/q8oxNizyTk8/maxresdefault.jpg',
        desc: `The Tomb Raider is back in this challenging entry that adds new wrinkles to the turn-based puzzles
                introduced with Hitman Go. Lara Croft is athletic and adventurous, and her GO game reflects that
                with puzzles that have her dodging boobytraps and deadly enemies as you work your way through 100
                levels split into six chapters. It's an award-winning game that lures you in with its outstanding
                visuals and keeps you playing with its increasingly challenging puzzles.`
    },
    {
        id: 2,
        title: 'Monument Valley',
        image: 'https://d26bwjyd9l0e3m.cloudfront.net/wp-content/uploads/2014/09/Monument-Valley-Grafis-Terbaik-_-Screen.jpg',
        desc: `Monument Valley is an award-winning puzzle game that features outstanding art and sound design. You
                play as Ida, a princess who must find her way through fantastical structures which you must
                manipulate and change to complete the path and help her reach her goal.
                The controls are simple as you tap to move the princess while discovering the different ways you
                can move the structures around. It's an intuitive experience that forces you to look at things from
                a different perspective. If you've never experienced the majestic wonder and mind-bending puzzles
                of Monument Valley, you should definitely check it out. You get the original game as well as a new
                chapter called Ida's Dream with the purchase, while Forgotten Shores features eight new chapters of
                gameplay which are available via an in-app purchase.`
    },
    {
        id: 3,
        title: 'The Room',
        image: 'https://static.giga.de/wp-content/uploads/The-Room-rcm1200x627u.jpg',
        desc: `The Room is a widely celebrated puzzle franchise for Android, with three entries offering hours
                upon hours of challenging puzzle fun. These games are very reminiscent of point-and-click classic
                adventure series such as Myst and Siberia, and each offer hours and hours of entertainment with
                some of the best visuals you'll find in an Android game.
                Controls are as simple as swiping around the screen and double tapping to focus in on an object or
                puzzle. As you progress through the game, you'll find objects that will help you find your way out.
                As you go, more and more of the story is revealed through notebooks left around.`
    },
    {
        id: 4,
        title: 'Zhed',
        image: 'https://i.ytimg.com/vi/1SB9R06qFNM/maxresdefault.jpg',
        desc: 'Tile puzzle game'
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(publicDirectory));
app.use(markoExpress());

app.get('/', (req, res) => {
    let view = require(path.join(viewsDirectory, 'index.marko'));

    let data = {
        games: games
    };

    res.marko(view, data);
})

app.get('/game/:id', (req, res) => {
    let id = req.params.id;
    let view = require(path.join(viewsDirectory, 'article.marko'));
    let game = games.find(game => game.id == id);

    if (!game) {
        res.redirect('/');
    }
    let data = { game };
    res.marko(view, data);
})

app.get('/games', (req, res) => {
    let view = require(path.join(viewsDirectory, 'game.marko'));

    let data = {
        games: games
    };

    res.marko(view, data);
})

app.post('/games', (req, res) => {
    let body = req.body;
    games.push({
        id: games.length + 1,
        title: body.title,
        image: body.image,
        desc: body.desc
    });
    res.redirect('/games');
})

app.get('/article', (req, res) => {
    let view = path.join(viewsDirectory, 'article.html');

    res.type('html');
    res.sendFile(view);
})

app.get('/comment', (req, res) => {
    let view = require(path.join(viewsDirectory, 'comment.marko'));

    let data = {
        comments: comments
    };
    res.marko(view, data);
})

app.post('/comment', (req, res) => {
    let body = req.body;
    comments.push({
        name: body.name,
        comment: body.comment
    });
    console.log(comments);
    res.redirect('/comment');
})

app.listen(port, (err) => {
    if (err) { return console.error(err); }
    console.log('Listening to port ' + port);
}) 