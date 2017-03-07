var yo = require('yo-yo');
var layout = require('../layout');
var translate = require('../translate');

module.exports = function (user){
  var el = yo`<div class="container user-page">
    <div class="row">
      <div class="col s12 m10 offset-m1 l8 offset-12 center-align heading">
        <div class="row">
          <div class="col s12 m10 offset-m1 l3 offset-l3 center">
            <img  src="${user.avatar}" class="responsive-img circle"/>
          </div>
          <div class="co s12 m10 offset-m1 l6 left-align">
            <h2 class="hide-on-large-only center-align">
              ${user.username}
            </h2>
            <h2 class="hide-on-med-and-down center-align">
              ${user.username}
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        ${user.pictures.map(function (picture) {
          return yo`<div class="col s12 m6 l4">
            <div class="picture-container">
              <img src="${picture.src}" alt="" class="picture"/>
              <div class="likes">
                <div class="fa fa-heart">${picture.likes}</div>
              </div>
            </div>
          </div>`
        })}
      </div>
    </div>
  </div>`

  return layout(el)
}
