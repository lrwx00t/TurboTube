(function () {
  var video = document.querySelector(".html5-main-video");
  var controls = document.querySelector(".ytp-chrome-top");
  var left_btn = document.getElementById("turbotube-btn-left");
  var right_btn = document.getElementById("turbotube-btn-right");

  if (video && controls && !left_btn && !right_btn) {
    var speedButtons = `
      <button id="turbotube-btn-left" data-layer="2" class="ytp-button" title="TurboSpeed">
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M16.5 8.5L13 12L16.5 15.5" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 8.5L7 12L10.5 15.5" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
<button id="turbotube-btn-right" data-layer="2" class="ytp-button" title="TurboSpeed">
      <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5L11.5 12L8 15.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 8.5L17.5 12L14 15.5" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z" stroke="currentColor" stroke-width="1.5"/>
</svg></button>
    `;
    controls.insertAdjacentHTML("afterbegin", speedButtons);
    document
      .getElementById("turbotube-btn-right")
      .addEventListener("click", function () {
        document.querySelector("video").playbackRate = 7.0;
      });
    document
      .getElementById("turbotube-btn-left")
      .addEventListener("click", function () {
        document.querySelector("video").playbackRate = 1.0;
      });
  }
})();
