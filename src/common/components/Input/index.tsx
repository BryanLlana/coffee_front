import React, { forwardRef } from "react";
import * as s from "./styles";

export interface IBaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  smallSize?: boolean;
  startElement?: React.ReactNode;
  endElement?: React.ReactNode;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}
const Input = forwardRef<HTMLInputElement, IBaseInputProps>((props, ref) => {
  const {
    startElement,
    endElement,
    style,
    containerProps,
    smallSize,
    onChange,
    type,
    ...inputProps
  } = props;

  return (
    <s.Wrapper
      $small={smallSize || false}
      $disabled={props.disabled || false}
      $hasStartEl={!!startElement}
      $hasEndEl={!!endElement}
      style={style}
      {...containerProps}
    >
      {startElement}
      <input
        type={type === "number" ? "text" : type || "text"}
        ref={ref}
        {...inputProps}
        onChange={(e) => {
          if (type === "number" && isNaN(Number(e.target.value))) return;
          onChange?.(e);
        }}
      />
      {endElement}
    </s.Wrapper>
  );
});

export default Input;
