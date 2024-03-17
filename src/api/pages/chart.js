import { createAPI } from "../api.js";

// 图表接口

export const getList = (data) =>
  createAPI("/api/admin/statistics/env-device-list", "get", data);

export const getInfo = (data) =>
  createAPI("/api/admin/statistics/env-device-info", "get", data);
