const localStorage = global.window.localStorage

export function get (key) {
  // the local storage was populated at login?
  return localStorage.getItem(key)
}

export function set (key, value) {
  if (value === null) {
    localStorage.removeItem(key)
  } else {
    localStorage.setItem(key, value)
  }
}
