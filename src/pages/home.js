import { useLayoutEffect } from "react"
import styled from "styled-components"
import { shallow } from "zustand/shallow"
import { useStore } from "../store"
import QuoteModule from "../components/home/QuoteModule"

const Wrapper = styled.div``

export default ({}) => {
  const { socketInit, socketIns } = useStore(
    state => ({
      socketInit: state.socketInit,
      socketIns: state.socketIns,
    }),
    shallow
  )

  // DOM 渲染之前就可以先进行连接
  useLayoutEffect(() => {
    // console.log("==> home page useLayoutEffect")
    socketInit("wss://demotrade.alphazone-data.cn/ws")
    return () => {
      socketIns?.close && socketIns?.close() // 离开 Home 页时主动关闭连接
    }
  }, [])

  return (
    <Wrapper>
      <QuoteModule />
    </Wrapper>
  )
}
