var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
  title('Instagram Feed');
  var main = document.getElementById('main-container');

  var pictures = [
    {
      user: {
        username: 'gaby.123',
        avatar: 'https://uinames.com/api/photos/female/31.jpg'
      },
      url: 'https://d13yacurqjgara.cloudfront.net/users/507883/screenshots/3297792/andy_hau_quinn_the_fox_quinnsquips_japan_dribbble.jpg',
      liked: true
    },
    {
      user: {
        username: 'carol.123',
        avatar: 'https://uinames.com/api/photos/female/16.jpg'
      },
      url: 'https://d13yacurqjgara.cloudfront.net/users/1315300/screenshots/3298040/lghths.jpg',
      likes: 300,
      liked: true
    },
  ];

  empty(main).appendChild(template(pictures));
})
