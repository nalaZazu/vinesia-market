import { POST, GET } from "./Adapter/base";

export const login = (jwtToken) => {
  return POST(`auth/login?token=${jwtToken}`);
};
export const getJWTToken = (data) => {
  return POST(`auth/verify`, data);
};
export const getProfile = () => {
  return GET(`auth/profile`);
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
