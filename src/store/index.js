import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { persist, createJSONStorage } from "zustand/middleware"
import { createKlineSlice } from "./klineSlice"
import { createSymbolSlice } from "./symbolSlice"
import { createUserSlice } from "./userSlice"
import { createSocketSlice } from "./socketSlice"

// 打印 store 的变化（TODO: 正式环境需删除）
const log = config => (set, get, api) =>
  config(
    (...args) => {
      console.log("  applying", args, get())
      set(...args)
      console.log("  new state", get())
    },
    get,
    api
  )

// NOTE: 不需要持久化存储的黑名单
const PersistBlacklist = ["socketIns", "socketState"]

export const useStore = create(
  persist(
    immer(
      log((...a) => ({
        ...createKlineSlice(...a),
        ...createSymbolSlice(...a),
        ...createUserSlice(...a),
        ...createSocketSlice(...a),
      }))
    ),
    {
      name: "wt-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !PersistBlacklist.includes(key)
          )
        ),
    } // 将store数据持久化保存在 sessionStorage
  )
)
