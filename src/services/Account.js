import { POST } from "./Adapter/base";

export const login = (data) => {
  return POST(`auth/login`, data);
};
// export const forgotPassword = (data) => {
//   return POST(`forgot_password`, data);
// };
// export const updatePassword = (data) => {
//   return POST(`reset_password`, data);
// };

export const signup = (user) => {
  return POST(`auth/register`, user);
};
