export default function authHeader() {
  const obj = JSON.parse(localStorage.getItem("authUser"))

  if (obj && obj.accessToken) {
    return obj.accessToken;
  } else {
    return {}
  }
}