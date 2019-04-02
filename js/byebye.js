var PleaseDontGo = (function() {
  var s;

  return {
    settings: {
      originalTitle: document.title,
      // New title when tab is changed
      newTitle: 'Leaving so soon?!',
      favicon: document.querySelectorAll('[rel="icon"]')[0],
      originalFavicon: document.querySelectorAll('[rel="icon"]')[0].href,
      // New favicon when tab is changed
      newFavicon: 'assets/dontgo.png'
    },

    init: function() {
      s = this.settings;
      this.visibility();
    },

    visibility: function() {
      document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
          setTimeout(function() {
            document.title = s.newTitle;
            s.favicon.setAttribute('href', s.newFavicon);
          }, 1500);
        } else {
          document.title = s.originalTitle;
          s.favicon.setAttribute('href', s.originalFavicon);
        }
      });
    }
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  PleaseDontGo.init();
});
