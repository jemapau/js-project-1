var yo = require('yo-yo');

module.exports = function layout(content) {
  return yo`<div class="contentainer">
    ${content}
    </div>`;
}
