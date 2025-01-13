import * as s from "./styles";
import OptionalBadge from "../OptionalBadge";

interface IProps extends React.PropsWithChildren {
  labelContent?: React.ReactNode;
  inlineError?: React.ReactNode;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  optional?: boolean;
}

export default function FieldWrapper(props: IProps) {
  return (
    <s.Container style={props.style}>
      {props.labelContent && (
        <label style={props.labelStyle}>
          <span>{props.labelContent}</span>
          {props.optional && <OptionalBadge />}
        </label>
      )}
      {props.children}
      {props.inlineError && <s.InlineError>{props.inlineError}</s.InlineError>}
    </s.Container>
  );
}
