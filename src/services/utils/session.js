// import { useDispatch } from "react-redux";
// import { logoutAction } from "../../redux/account";

export default class {
  static set = (key, value) =>
    typeof window !== "undefined"
      ? window.localStorage.setItem(key, JSON.stringify(value))
      : null;

  static get = (key) => {
    const t =
      typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
    if (t === "undefined" || t === null) return "";

    if (t === "true" || t === "false" || typeof t === "boolean") return t;

    if (t.length > 0) return JSON.parse(t);

    return "";
  };
  static clear = () => {
    // let dispatch = useDispatch();
    // dispatch(logoutAction());
    typeof window !== "undefined" ? window.localStorage.clear() : null;
  };
}
