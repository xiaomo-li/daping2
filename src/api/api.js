/*
 * @Description:
 * @Date: 2022-08-11 22:34:24
 */
import axios from "axios";

// 创建axios实例
const instance = axios.create({
  // baseURL: "./",
  baseURL: "http://38.55.215.190:6328/", // 服务器地址
  timeout: 5000, // request timeout
});

/*
 *	通用接口
 *	参数：网址，方法，数据
 */

// let AUTH_TOKEN =
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJhdWQiOiIiLCJpYXQiOjE3MDYxNDc1MjQsIm5iZiI6MTcwNjE0NzUyNCwiZXhwIjoxNzA2NzUyMzI0LCJyZWYiOjE3MDg3Mzk1MjQsInNjb3BlcyI6ImFjY2Vzc190b2tlbiIsImRhdGEiOnsidWlkIjozfX0.wMdZesgo7XYhhtFRKanOLSXKlps9vezRkzJJm7l2_l4";
// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export const createAPI = (url, method, data) => {
  const config = {};
  config.headers = {
    // "Cache-Control": "no-cache",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  config.params = data;

  return instance({
    url,
    method,
    ...config,
  });
};

// 通用表单接口
export const createFormAPI = (url, method, data) => {
  const config = {};
  config.data = data;
  // 请求头
  config.headers = {
    "Cache-Control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
  };
  config.responseType = "json";

  // 数据编码
  config.transformRequest = [
    function (data) {
      let ret = "";
      for (const it in data) {
        ret +=
          encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      }
      return ret;
    },
  ];
  return instance({
    url,
    method,
    ...config,
  });
};
