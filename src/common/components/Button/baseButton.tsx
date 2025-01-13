import { BtnFontSizes, BtnSizes } from "./utils";
import * as s from "./styles";

type IBtnSizes = "L" | "M" | "S"; // L by default

export interface IBtnThemeProps {
  color: string;
  backgroundColor: string;
  borderColor?: string; // currentColor by default
}

export interface IBtnProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    React.PropsWithChildren {
  size?: IBtnSizes;
  fullWidth?: boolean;
  square?: boolean;
  rounded?: boolean;
}

export default function BaseButton(props: IBtnProps & IBtnThemeProps) {
  const {
    size,
    backgroundColor,
    color,
    borderColor,
    children,
    fullWidth,
    onClick,
    square,
    rounded,
    ...inputProps
  } = props;
  return (
    <s.Btn
      $rounded={rounded}
      $square={square}
      $color={color}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $fullWidth={fullWidth}
      $h={BtnSizes[size || "L"]}
      $fontSize={BtnFontSizes[size || "L"]}
      onClick={props.disabled ? undefined : onClick}
      {...inputProps}
    >
      {children}
    </s.Btn>
  );
}
