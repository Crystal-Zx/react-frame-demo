import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// import reportWebVitals from "./reportWebVitals"

/** 当你使用严格模式（React.StrictMode）时，React 会对每个组件进行两次渲染，以便你观察一些意想不到的结果。在 React 17 中，取消了其中一次渲染的控制台日志，以便让日志更容易阅读。
为了解决社区对这个问题的困惑，在 React 18 中，官方取消了这个限制。如果你安装了React DevTools，第二次渲染的日志信息将显示为灰色，以柔和的方式显式在控制台。 */
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
