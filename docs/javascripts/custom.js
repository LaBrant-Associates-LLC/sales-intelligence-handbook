// Nuclear option: completely disable scrollIntoView for sidebar
(function() {
  const originalScrollIntoView = Element.prototype.scrollIntoView;

  Element.prototype.scrollIntoView = function(options) {
    // Check if this element is inside the left sidebar
    if (this.closest('.md-sidebar--primary')) {
      return; // Do nothing for sidebar elements
    }
    // Allow normal behavior elsewhere
    return originalScrollIntoView.call(this, options);
  };
})();

// Also block scroll on navigation clicks
document.addEventListener('click', function(e) {
  const link = e.target.closest('.md-nav__link');
  if (link) {
    const sidebar = document.querySelector('.md-sidebar--primary .md-sidebar__scrollwrap');
    if (sidebar) {
      const scrollPos = sidebar.scrollTop;
      requestAnimationFrame(() => {
        sidebar.scrollTop = scrollPos;
      });
    }
  }
}, true);
