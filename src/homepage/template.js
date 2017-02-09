var yo = require('yo-yo');

var template = yo`
<nav class="header">
  <div class="nav-wrapper">
    <div class="container">
      <div class="row">
        <div class="col s12 m6 offset-m1">
          <a href="/" class="brand-logo title">Instagram feed</a>
        </div>
        <div class="col s12 m6 push-m10">
          <a href="#" class="btn btn-large btn-flat dropdown-button" data-activates="drop-user">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>Sign Out
          </a>
          <ul id="drop-user" class="dropdown-content">
            <li><a href="#">Salir</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</nav>
`

module.exports = template;
