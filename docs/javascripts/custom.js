// Nuclear option: block ALL sidebar scroll manipulation
(function() {
  // Block scrollIntoView for sidebar
  const originalScrollIntoView = Element.prototype.scrollIntoView;
  Element.prototype.scrollIntoView = function(options) {
    if (this.closest('.md-sidebar--primary')) {
      return;
    }
    return originalScrollIntoView.call(this, options);
  };

  // Block direct scrollTop manipulation on sidebar
  function lockSidebar() {
    const scrollwrap = document.querySelector('.md-sidebar--primary .md-sidebar__scrollwrap');
    if (scrollwrap && !scrollwrap._locked) {
      scrollwrap._locked = true;
      let allowedScroll = true;
      let userScrollPos = 0;

      // Track user scrolls (mouse wheel, touch)
      scrollwrap.addEventListener('wheel', () => { allowedScroll = true; }, { passive: true });
      scrollwrap.addEventListener('touchmove', () => { allowedScroll = true; }, { passive: true });
      scrollwrap.addEventListener('mousedown', () => { allowedScroll = true; });

      // Store original scrollTop descriptor
      const descriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollTop');

      Object.defineProperty(scrollwrap, 'scrollTop', {
        get: function() {
          return descriptor.get.call(this);
        },
        set: function(val) {
          // Only allow user-initiated scrolls
          if (allowedScroll) {
            userScrollPos = val;
            descriptor.set.call(this, val);
          }
          // Block programmatic scrolls (from MkDocs JS)
          allowedScroll = false;
        },
        configurable: true
      });
    }
  }

  // Lock sidebar when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lockSidebar);
  } else {
    lockSidebar();
  }

  // Re-lock on navigation (for instant loading)
  document.addEventListener('click', function(e) {
    if (e.target.closest('.md-nav__link')) {
      setTimeout(lockSidebar, 0);
    }
  }, true);
})();
