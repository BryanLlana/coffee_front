import * as s from "./styles";
import { createPortal } from "react-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Overlay from "../../ui/overlay";

export type IModalAnchor = "top" | "bottom" | "left" | "right" | "center";

export interface IModalPositionProps {
  anchor?: IModalAnchor;
}

export interface IProps extends IModalPositionProps {
  width?: string;
  rounded?: boolean;
  mounted?: boolean;
  renderOverlay?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
}

const BorderRadiusByAnchor: Record<IModalAnchor, string> = {
  top: " 0 0 12px 12px",
  bottom: "12px 12px 0 0",
  center: "12px",
  left: "unset",
  right: "unset",
};

const Modal: React.FC<React.PropsWithChildren<IProps>> = (props) => {
  const isDesktop = useMediaQuery((mq) => mq.MIN_TABLET);
  const isCenterAnchored = props.anchor === "center";
  const anchor: IModalAnchor = props.anchor || (isDesktop ? "right" : "bottom");
  const renderOverlay = props.renderOverlay ?? true;

  return props.mounted ? (
    <>
      {renderOverlay && <Overlay onClick={props.onClose} />}
      {createPortal(
        <s.Card
          $width={props.width ? props.width : "375px"}
          $borderRadius={props.rounded ? BorderRadiusByAnchor[anchor] : "unset"}
          $anchor={isCenterAnchored ? undefined : anchor}
          data-centered={isCenterAnchored}
          style={props.style}
        >
          {props.children}
        </s.Card>,
        document.getElementById("overlay")!
      )}
    </>
  ) : null;
};

export default Modal;
