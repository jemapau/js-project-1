var yo = require('yo-yo');

module.exports = function(pic){
  return yo`<div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${pic.url}">
    </div>
    <div class="card-content">
      <span class="card-title activator">Card Title<i class="material-icons right">more_vert</i></span>
      <a href="/user/${pic.user.username}" class="card-title">
        <img src="${pic.user.avatar}" class="avatar"/>
          <span class="username">${pic.user.username}</span>
      </a>
      <small class="rigt time">A day ago</small>
      <p>
        <a href="#"><i class="fa fa-heart-o" aria-hiddn="true"></i></a>
        <span class="left likes">${pic.likes} Me gusta</span>
      </p>
    </div>
  </div>`
}
