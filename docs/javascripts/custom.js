// Disable nav auto-scroll behavior
document.addEventListener('DOMContentLoaded', function() {
  // Override scrollIntoView for sidebar elements
  const sidebar = document.querySelector('.md-sidebar--primary');
  if (sidebar) {
    const observer = new MutationObserver(function() {
      // Reset scroll position when nav changes
      const scrollwrap = sidebar.querySelector('.md-sidebar__scrollwrap');
      if (scrollwrap) {
        // Store and restore scroll position
        const scrollTop = scrollwrap.scrollTop;
        requestAnimationFrame(() => {
          scrollwrap.scrollTop = scrollTop;
        });
      }
    });
    observer.observe(sidebar, { subtree: true, attributes: true, attributeFilter: ['class'] });
  }
});

// Prevent scrollIntoView on active nav items
Element.prototype._scrollIntoView = Element.prototype.scrollIntoView;
Element.prototype.scrollIntoView = function(options) {
  if (this.closest('.md-sidebar--primary')) {
    return; // Block scroll for sidebar elements
  }
  return this._scrollIntoView(options);
};
