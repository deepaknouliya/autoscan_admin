// check token
const isTokenExpired = () => {
  const token = localStorage.getItem("auth_token");
  if (token) return true;
  return false;
};
//is user is logged in
export const isAuthenticated = () => {
  if (isTokenExpired() === true && getLoggedInUser() !== null) return true;
  return false;
};
// user info
export const getUserInfo = () => {
  const user = localStorage.getItem("user_info");
  if (user) return JSON.parse(user);
  return null;
};

// save user token
export const getUserToken = () => {
  return "Bearer " + JSON.parse(localStorage.getItem("authUser"))?.accessToken;
};
