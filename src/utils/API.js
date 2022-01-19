const root = "https://aeccc-api.herokuapp.com/";

const request = ({ path, method = "POST", headers = {}, body = "" }) =>
  fetch(new URL(path, root), {
    body,
    method,
    headers,
    mode: "cors",
    credentials: "include",
  });

export { request };
