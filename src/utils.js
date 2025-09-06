// Place this file in src directory
// This file contains the functions from the HTML file

export function loadScript(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function () {
    done && done();
  };
  js.onerror = function () {
    done && done(new Error('Failed to load script: ' + src));
  };
  document.head.appendChild(js);
}

export function browserSupportsAllFeatures() {
  return window.Promise && window.fetch && window.Symbol;
}

export function lCss(u, m) {
  var l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = u;
  if (m) l.media = m;
  document.head.appendChild(l);
}
