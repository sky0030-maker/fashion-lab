
/* FASHION ORBIT — GITHUB CONNECTION TEST */

(() => {
  function init() {
    const orbit = document.querySelector("#fashion-orbit");
    if (!orbit) return false;

    orbit.dataset.githubConnected = "true";

    const label = orbit.querySelector(".sample");
    if (label) {
      label.textContent = "GITHUB SCRIPT CONNECTED";
    }

    const detail = orbit.querySelector("#detail");
    if (detail) {
      detail.innerHTML = `
        <div class="eyebrow">FASHION ORBIT</div>
        <h2>GITHUB CONNECTED</h2>
        <p class="intro">
          외부 JavaScript 연결에 성공했습니다.
        </p>
      `;
    }

    return true;
  }

  if (!init()) {
    const observer = new MutationObserver(() => {
      if (init()) observer.disconnect();
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  }
})();
