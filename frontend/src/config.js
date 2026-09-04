
const API_BASE_URL = (
  process.env.REACT_APP_API_BASE_URL ||
  (process.env.NODE_ENV === "development"
    ? `http://${window.location.hostname}:5000`
    : "")
).replace(/\/+$/, "");

export default API_BASE_URL;
