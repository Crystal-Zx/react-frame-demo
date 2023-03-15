// import { produce } from "immer"

export const createKlineSlice = set => ({
  klineList: [
    { name: "EURUSD", cnName: "欧元兑美元", resolution: "1D" },
    { name: "GBPUSD", cnName: "英镑兑美元", resolution: "1D" },
  ],
  activeKline: "EURUSD",
  addKline: kline =>
    set(state => {
      state.klineList.push(kline)
    }),
  deleteKline: name =>
    set(state => {
      state.klineList = state.klineList.filter(item => item.name !== name)
    }),
  // changeKlineActive: name => set(state => state.activeKline = name),
})
