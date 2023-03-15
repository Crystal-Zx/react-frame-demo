import { RouterProvider } from "react-router-dom"
import router from "./router"
import "antd/dist/reset.css" // 抹平样式差异的文件

export default () => {
  return <RouterProvider router={router}></RouterProvider>
}
