// // src/jsx/auth.js

export function isLoggedIn() {
  return !!localStorage.getItem('token');
}


export function signOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}