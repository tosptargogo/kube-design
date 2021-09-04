var IEContentLoaded = function IEContentLoaded(w, callback) {
  var d = w.document;
  var done = false;

  var init = function init() {
    if (!done) {
      done = true;
      callback();
    }
  };

  var polling = function polling() {
    try {
      d.documentElement.doScroll("left");
    } catch (e) {
      setTimeout(polling, 50);
      return;
    }

    init();
  };

  polling();

  d.onreadystatechange = function () {
    if (d.readyState === "complete") {
      d.onreadystatechange = null;
      init();
    }
  };
};

var DOMReady = function DOMReady(fn) {
  if (document.addEventListener) {
    if (["complete", "loaded", "interactive"].indexOf(document.readyState) > -1) {
      setTimeout(fn, 0);
    } else {
      var loadFn = function loadFn() {
        document.removeEventListener("DOMContentLoaded", loadFn, false);
        fn();
      };

      document.addEventListener("DOMContentLoaded", loadFn, false);
    }
  } else if (document.attachEvent) {
    IEContentLoaded(window, fn);
  }
};

export default DOMReady;