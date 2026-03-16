export function update_query(key, value) {
  var url = new URL(window.location);
  url.searchParams.set(key, value);
  var newurl =
    url.protocol +
    "//" +
    url.host +
    url.pathname +
    (url.search ? url.search : "");
  window.history.replaceState({ path: newurl }, "", newurl);
}

export function push_url(url) {
  window.history.pushState({ path: url }, "", url);
}
