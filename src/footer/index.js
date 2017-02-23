var yo = require('yo-yo');
var translate = require('../translate').message;

var el = yo`
<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l12 center-align"><a href="#" data-activates="dropdown1" class="dropdown-button btn">${translate('language')}</a>
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#" onclick=${lang.bind(null, 'es')}>${translate('spanish')}</a></li>
          <li><a href="#" onclick=${lang.bind(null, 'en-US')}>${translate('english')}</a></li>
          <li><a href="#" onclick=${lang.bind(null, 'fr')}>${translate('french')}</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col s12 l12 center-align">2017 - ${translate('policy')} - <i class="fa fa-heart" aria-hidden="true"></i></div>
    </div>
  </div>
</footer>`;

function lang(locale){
  localStorage.setItem("locale", locale);
  location.reload();
  return false
}

document.body.appendChild(el);
