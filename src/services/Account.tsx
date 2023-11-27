import { POST, GET } from "./Adapter/base";

export const login = (jwtToken: any) => {
  return POST(`auth/login?token=${jwtToken}`);
};
export const getJWTToken = (data: any) => {
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

export const signup = (user: any) => {
  return POST(`auth/register`, user);
};
