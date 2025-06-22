// src/utils/auth.js

// Check if token exists (user is authenticated)
export function isLoggedIn() {
  return !!localStorage.getItem("token");
}

// Get logged-in user's role (student / teacher / admin)
export function getUserRole() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.role || null;
}

// Log out the user
export function signOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
