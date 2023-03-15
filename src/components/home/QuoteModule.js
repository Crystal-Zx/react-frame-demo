import { useState, useEffect } from "react"
import styled from "styled-components"
import { useStore } from "../../store"

const Wrapper = styled.div``

export default ({}) => {
  const { socketIns, socketState } = useStore(state => ({
    socketIns: state.socketIns,
    socketState: state.socketState,
  }))
  const [symbolList, setSymbolList] = useState(null)

  useEffect(() => {
    if (socketState == 1) {
      socketIns.send({ cmd: "symbols", args: [""] })
      socketIns.subscribe("symbol", setSymbolList)
    }
  }, [socketState])

  // console.log("==> QuoteModule effect: ", socketIns, socketState)

  return <Wrapper>{JSON.stringify(symbolList, null, 2)}</Wrapper>
}
