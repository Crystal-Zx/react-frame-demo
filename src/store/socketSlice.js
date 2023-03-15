import SocketClient from "../services/websocket/SocketClient"

export const createSocketSlice = (set, get) => ({
  socketIns: null, // SocketClient 实例对象 { socket, url, handleFn, ...}
  socketState: -1, // -1：未连接，0： 正在连接，1 -> 连接成功，2：连接失败
  handleInsStateChange: (socketState, socketIns = null) =>
    set(state => {
      state.socketState = socketState
      state.socketIns = socketIns
    }),
  socketInit: url => {
    new SocketClient(url, get().handleInsStateChange)
  },
})
