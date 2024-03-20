import { createAPI } from "../api.js";

// 图表接口

export const getList = (data) =>
  createAPI("/dev-api/api/balance/balance_post", "post", data);

export const getInfo = (data) =>
  createAPI("/dev-api/api/Issuebank/bindBank", "post", data);

export const getProList = (data) =>
  createAPI("/dev-api/api/Product/pro_listexport", "get", data);
