// src/jsx/auth.js
export function isLoggedIn() {
  return !!localStorage.getItem('token');
}
