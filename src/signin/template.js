var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');


var signinForm = yo`<div class="col s12 m7">
  <div class="row">
    <div class="signup-box">
      <h1 class="title">Instagram feed of friends</h1>
      <form class="signup-form">
        <div class="section">
          <a class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
          <a class="btn btn-fb hide-on-med-and-up">${translate.message('signin')}</a>
        </div>
        <div class="divider"></div>
        <div class="section">
          <input type="email" name="email" placeholder="${translate.message('email')}" />
          <input type="text" name="name" placeholder="${translate.message('fullname')}" />
          <input type="text" name="username" placeholder="${translate.message('username')}" />
          <input type="password" name="password" placeholder="${translate.message('password')}" />
          <button class="btn waves-effect waves-light btn-signup" type="submit">${translate.message('signup.call-to-action')}</button>
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <div class="login-box">
      ¿No tienes una cuenta? <a href="/signup">Registrate</a>
    </div>
  </div>
</div>
`

module.exports = landing(signinForm)
