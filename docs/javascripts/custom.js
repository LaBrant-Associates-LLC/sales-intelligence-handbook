// Force sidebar to stay at top
(function() {
  function resetSidebar() {
    var scrollwrap = document.querySelector('.md-sidebar--primary .md-sidebar__scrollwrap');
    if (scrollwrap) {
      scrollwrap.scrollTop = 0;
    }
  }

  // Reset on load
  window.addEventListener('load', function() {
    setTimeout(resetSidebar, 0);
    setTimeout(resetSidebar, 50);
    setTimeout(resetSidebar, 100);
    setTimeout(resetSidebar, 200);
  });

  // Reset on instant navigation (MkDocs Material feature)
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(resetSidebar, 0);
    setTimeout(resetSidebar, 50);
    setTimeout(resetSidebar, 100);
  });

  // Observe for location changes
  if (typeof document$ !== 'undefined') {
    document$.subscribe(function() {
      setTimeout(resetSidebar, 0);
      setTimeout(resetSidebar, 50);
      setTimeout(resetSidebar, 100);
    });
  }
})();
