// import { useDispatch } from "react-redux";
// import { logoutAction } from "../../redux/account";

export default class {
  static set = (key, value) =>
    window.localStorage.setItem(key, JSON.stringify(value));
  static get = (key) => {
    const t = window.localStorage.getItem(key);
    if (t === "undefined" || t === null) return "";

    if (t === "true" || t === "false" || typeof t === "boolean") return t;

    if (t.length > 0) return JSON.parse(t);

    return "";
  };
  static clear = () => {
    // let dispatch = useDispatch();
    // dispatch(logoutAction());

    window.localStorage.clear();
  };
}
