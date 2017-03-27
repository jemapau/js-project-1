var page = require('page');
var template = require('./template');
var title = require('title');
var empty = require('empty-element');
var header = require('../header');

page('/:username', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container');
  title(`Instagram feed - ${ctx.params.username}`);
  empty(main).appendChild(template(ctx.user));
  $('modal-trigger').leanModal();
});

page('/:username/:id', header, loadUser, function (ctx, next) {
  var main = document.getElementById('main-container');
  title(`Instagram feed - ${ctx.params.username}`);
  empty(main).appendChild(template(ctx.user));
  $(`#modal${ctx.params.id}`).openModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    startingTop: '4%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    complete: function () {
      const path = `/${ctx.params.username}`;
      page(path)
    }
  });
});

async function loadUser (ctx, next) {
  try {
    ctx.user = await fetch(`/api/user/$(ctx.params.username)`).then(res => res.json())
    next()
  } catch (err) {
    console.log(err)
  }
}
