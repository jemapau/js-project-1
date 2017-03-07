var yo = require('yo-yo');

module.exports = function layout(content) {
  return yo`<div class="contentainer">
    <div class="preloader-background">
      <div class="preloader-wrapper small active">
        <div class="spinner-layer spinner-green">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div>
          <div class="gap-patch">
            <div class="circle"></div>
          </div>
          <div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </div>
    ${content}
    </div>`;
}
