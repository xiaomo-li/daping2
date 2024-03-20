import { createAPI } from "../api.js";

// 登录接口

export const tryLogin = (data) =>
  createAPI("/api/Login/login_post", "post", data);
export const tryRegister = (data) =>
  createAPI("/api/Register/register_post", "post", data);
