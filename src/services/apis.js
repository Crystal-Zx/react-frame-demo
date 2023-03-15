export default {
  login: "/v1/login",
  loginOA1: "https://v2.alphazone-data.cn/alpha/api/v2/getFireOffer",
  loginOA2: "https://v2.alphazone-data.cn/guest/api/v2/getFireOfferTwo",
  getDate: "https://v1.alphazone-data.cn/academy/api/v1/getdate",
  getSymbols: "/v1/symbols",
  getPositionOrders: "/v1/position",
  getHistoryOrders: "/v1/closed", // 历史持仓单
  getHistoryLimitOrders: "/v1/pending", // 历史挂单
  getAccountInfo: "/v1/account_info",
  modifyOrder: "/v1/order/modify",
  closeOrder: "/v1/order/close",
  openOrder: "/v1/order/open",
  getNewsData: "https://www.jin10.com/flash_newest.js",
  getSymbolInfo: "/v1/symbol_info",
  getCalendarData: ({ year, month, date }) =>
    `https://cdn-rili.jin10.com/web_data/${year}/daily/${month}/${date}/economics.json`,
  getCalendarEventData: ({ year, month, date }) =>
    `https://cdn-rili.jin10.com/web_data/${year}/daily/${month}/${date}/event.json`,
  getEcoData: "https://v1.alphazone-data.cn/academy/api/v1/getEconomicList", // 日历经济数据
  getEcoEvent: "https://v1.alphazone-data.cn/academy/api/v1/getEventList", // 日历经济事件
  getEcoModalData:
    "https://v1.alphazone-data.cn/academy/api/v1/getEconomicByName", // 日历弹窗的图标和表格数据
  // "https://v1.alphazone-data.cn/academy/api/v1/getEconomicByName", // 日历弹窗的图标和表格数据
}
