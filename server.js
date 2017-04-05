var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})

var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Instagram Feed'});
})

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Instagram Feed - Sign Up'});
})

app.get('/signin', function (req, res) {
  res.render('index' , { title: 'Instagram Feed - Sign In'});
})

app.get('/api/pictures', function (req, res){
  var pictures = [
    {
      user: {
        username: 'gaby.123',
        avatar: 'https://uinames.com/api/photos/female/31.jpg'
      },
      cardtitle: 'Geisha Illustration',
      url: 'https://d13yacurqjgara.cloudfront.net/users/507883/screenshots/3297792/andy_hau_quinn_the_fox_quinnsquips_japan_dribbble.jpg',
      likes: 0,
      liked: false,
      createdAt: +new Date().getTime()
    },
    {
      user: {
        username: 'carol.123',
        avatar: 'https://uinames.com/api/photos/female/16.jpg'
      },
      cardtitle: 'Latern Illustration',
      url: 'https://d13yacurqjgara.cloudfront.net/users/1315300/screenshots/3298040/lghths.jpg',
      likes: 1,
      liked: false,
      createdAt: + new Date().setDate(new Date().getDate() - 10)
    },
  ];

  setTimeout(function () {
    res.send(pictures);
  }, 2000)
});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file :(");
    }
    res.send('File uploaded 😄');
  })
})

app.get('/api/user/:username', (req, res) => {
  const user = {
    username: 'gaby.123',
    avatar: 'https://uinames.com/api/photos/female/31.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://d13yacurqjgara.cloudfront.net/users/35381/screenshots/3342134/ramne.png',
        likes: 3,
      },
      {
        id: 2,
        src: 'https://d13yacurqjgara.cloudfront.net/users/1642524/screenshots/3392782/you_re_monster_enough_2-01.png',
        likes: 4,
      },
      {
        id: 3,
        src: 'https://d13yacurqjgara.cloudfront.net/users/3554/screenshots/2579452/icons.png',
        likes: 8,
      },
      {
        id: 4,
        src: 'https://d13yacurqjgara.cloudfront.net/users/77553/screenshots/2369834/screen_shot_2015-11-24_at_13.21.53.png',
        likes: 15,
      },
      {
        id: 5,
        src: 'https://d13yacurqjgara.cloudfront.net/users/730703/screenshots/2501744/play-europa-citys-magazine-2.jpg',
        likes: 35,
      },
      {
        id: 6,
        src: 'https://d13yacurqjgara.cloudfront.net/users/897821/screenshots/2761023/50-personalidad-historica.png',
        likes: 4,
      },
    ]
  }

  res.send(user);
})

app.get('/:username', function (req, res) {
  res.render('index', {title: `Instagram feeds - ${req.params.username}`})
})

app.get('/:username/:id', function (req, res) {
  res.render('index', {title: `Instagram feeds - ${req.params.username}`})
})

app.listen(3000, function (err) {
  if (err) return console.log('There was an error'), process.exit(1);

  console.log('On the port 3000');
})
