var yo = require('yo-yo');
var moment = require('moment');

if(!window.Intl) {
  window.Intl = require('intl');
  
}


var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');
require('intl-relativeformat/dist/locale-data/fr.js');

var rf = new IntlRelativeFormat('fr');

module.exports = function pictureCard(pic){
  var el;
  function render(picture) {
    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${picture.url}">
      </div>
      <div class="card-content">
        <span class="card-title activator">${picture.user.username}</span>
        <a href="/user/${picture.user.username}" class="card-title">
          <img src="${picture.user.avatar}" class="avatar"/>
        </a>
        <small class="right time">${rf.format(picture.createdAt)}</small>
        <p>
          <a href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o" aria-hiddn="true"></i></a>
          <a href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart" aria-hiddn="true"></i></a>
          <span class="left likes">${picture.likes} Me gusta</span>
        </p>
      </div>
    </div>`;
  }

  function like(liked){
    pic.liked = liked;
    pic.likes += liked ? 1 : -1;
    var newEl = render(pic);
    yo.update(el, newEl);
    return false;
  }

  el = render(pic);
  return el;
}
