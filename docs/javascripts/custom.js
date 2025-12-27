// Disable nav scroll on all page loads and transitions
(function() {
  // Block scrollIntoView for sidebar
  const originalScrollIntoView = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(options) {
    if (this.closest('.md-sidebar--primary')) return;
    return originalScrollIntoView.call(this, options);
  };

  // Preserve scroll position on ANY document change
  let savedScroll = 0;
  const sidebar = () => document.querySelector('.md-sidebar--primary .md-sidebar__scrollwrap');

  // Save position before navigation
  document.addEventListener('click', () => {
    const s = sidebar();
    if (s) savedScroll = s.scrollTop;
  }, true);

  // Restore after DOM updates
  new MutationObserver(() => {
    const s = sidebar();
    if (s && savedScroll) s.scrollTop = savedScroll;
  }).observe(document.body, { childList: true, subtree: true });
})();
