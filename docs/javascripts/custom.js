// Brute force: keep resetting sidebar to top
(function() {
  function resetSidebar() {
    const s = document.querySelector('.md-sidebar--primary .md-sidebar__scrollwrap');
    if (s) s.scrollTop = 0;
  }

  // Reset repeatedly on page load
  function hammerReset() {
    for (let i = 0; i < 20; i++) {
      setTimeout(resetSidebar, i * 50);
    }
  }

  // On initial load
  hammerReset();
  document.addEventListener('DOMContentLoaded', hammerReset);
  window.addEventListener('load', hammerReset);

  // On any click (navigation)
  document.addEventListener('click', function(e) {
    if (e.target.closest('a')) {
      hammerReset();
    }
  }, true);

  // Block scrollIntoView
  const orig = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(o) {
    if (this.closest('.md-sidebar--primary')) return;
    return orig.call(this, o);
  };
})();
