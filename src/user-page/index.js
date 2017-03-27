var page = require('page');
var template = require('./template');
var header = require('../header');
var title = require('title');
var empty = require('empty-element');

page('/:username', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container')
  title(`Instagram feed - ${ctx.params.username}`)
  empty(main).appendChild(template(ctx.user))
})

async function loadUser (ctx, next) {
  try {
    ctx.user = await fetch(`/api/user/$(ctx.params.username)`).then(res => res.json())
    next()
  } catch (err) {
    console.log(err)
  }
}
