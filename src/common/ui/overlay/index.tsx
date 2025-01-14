import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  to {
    opacity: 0.6;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Screen = styled.div`
  display: inline-block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  opacity: 0;
  animation: ${fadeIn} 0.3s forwards;
`;

const Overlay = (props: { onClick?: () => void }) => {
  return ReactDOM.createPortal(
    <Screen onClick={props.onClick} />,
    document.getElementById("overlay")!
  );
};

export default Overlay;
