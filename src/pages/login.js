import { useEffect } from "react"
import styled from "styled-components"
import apis from "../services/apis"
import { post } from "../services/http"
import { setStorage } from "../helper/storageHelper"
import strings from "../constants/strings"
import { useStore } from "../store"

const Wrapper = styled.div``

export default ({}) => {
  const klineList = useStore(state => state.klineList)
  useEffect(() => {
    const login = async () => {
      const { error, data } = await post(apis.loginOA2, {
        username: "nanbei123",
        password: "1234567",
        device: "pc",
      })
      if (error) return
      setStorage(strings.storageKeyAccInfo, data)
    }
    login()
  }, [])

  return (
    <Wrapper>
      <p>Page Login</p>
      <p>{JSON.stringify(klineList)}</p>
    </Wrapper>
  )
}
