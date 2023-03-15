import axios from "axios"
import { message } from "antd"

const accType = 1
const baseUrl = {
  1: "https://demotrade.alphazone-data.cn", // 模拟盘
  2: "https://livetrade.alphazone-data.cn", // 实盘
}
const STATUS_MSG = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  // wt 接口专享
  204: "登录令牌为空",
  205: "登录令牌解析失败",
  206: "交易账户不存在",
  207: "登录令牌过期",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  // alpha 接口专享
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
}

const axiosIns = axios.create({
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  timeout: 1000, // 请求超时时间
})

export const get = url =>
  axiosIns
    .get(url)
    .then(data => ({ data, error: null }))
    .catch(handleError)

export const post = (url, data) =>
  axiosIns
    .post(url, data)
    .then(data => ({ data, error: null }))
    .catch(handleError)

// NOTE: 统一错误处理
const handleError = error => {
  let errMsg = ""
  if (error.response) {
    // 请求成功发出且服务器也响应了状态码，但状态代码超出了 2xx 的范围
    // console.log(error.response.data)
    // console.log(error.response.status)
    // console.log(error.response.headers)
    errMsg = STATUS_MSG[error.response.status]
  } else if (error.request) {
    // 请求已经成功发起，但没有收到响应
    // `error.request` 在浏览器中是 XMLHttpRequest 的实例，
    // 而在node.js中是 http.ClientRequest 的实例
    // console.log(error.request)
    errMsg = "无法连接到服务器，请稍后"
  } else {
    // 发送请求时出了点问题
    // console.log("Error", error.message)
    errMsg = error?.message || "请求失败，请重试"
  }
  message.error(errMsg)
  return { data: null, error: errMsg }
}

// NOTE: 请求拦截
axiosIns.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // console.log("==> 请求拦截", config)
    if (config.url.indexOf("http") === -1) {
      // 非完整 url 需要在 headers 里加入当前账号特定的 baseUrl
      config.headers = {
        ...config.headers,
        baseUrl: baseUrl[accType],
      }
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    // console.log("==> 请求拦截 error", error)
    return Promise.reject(error)
  }
)
// NOTE: 响应拦截
axiosIns.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么
    // console.log("==> 响应拦截", response)
    const { data, msg, status: alphaStatus, code: wtStatus } = response.data // 后端接口返回值
    if (alphaStatus == 1 || wtStatus == 1) {
      // 请求成功
      return response.data.data
      // return { error: null, data: data }
    } else if (wtStatus >= 204 && wtStatus <= 207) {
      // token 过期
      // TODO: 跳转到登录页
      window.location.href = "/login"
      return Promise.reject(new Error("token 过期"))
    }
    // throw new Error(msg || "网络请求失败")
    return Promise.reject(new Error(msg || "网络请求失败"))
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数
    // console.log("==> 响应拦截 error", error)
    return Promise.reject(error)
  }
)
