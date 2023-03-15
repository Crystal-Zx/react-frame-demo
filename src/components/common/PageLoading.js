import styled from "styled-components"
import colors from "../../constants/colors"

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.background};
  .loading,
  .loading > div {
    position: relative;
    box-sizing: border-box;
  }
  .loading > div {
    display: inline-block;
    float: none;
    background-color: ${colors.theme};
    border: 0 solid currentColor;
    width: 20px;
    height: 20px;
    margin: 4px;
    border-radius: 100%;
    animation: ball-pulse 1.2s ease infinite;
  }
  .loading > div:nth-child(1) {
    animation-delay: -300ms;
  }
  .loading > div:nth-child(2) {
    animation-delay: -200ms;
  }
  .loading > div:nth-child(3) {
    animation-delay: -100ms;
  }
  .loading > div:nth-child(4) {
    animation-delay: 0ms;
  }
  @keyframes ball-pulse {
    0%,
    60%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    30% {
      opacity: 0.1;
      transform: scale(0.01);
    }
  }
`

const PageLoading = ({ className }) => {
  return (
    <Wrapper className={className}>
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Wrapper>
  )
}

export default PageLoading
