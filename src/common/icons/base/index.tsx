import React, { ReactNode } from "react";
import styled from "styled-components";

export interface IBaseIconProps extends React.SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
  children?: ReactNode;
}

export const BaseIcon = ({
  color = "currentColor",
  size = "1em",
  children,
  ...rest
}: IBaseIconProps) => {
  return (
    <Svg
      color={color}
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {children}
    </Svg>
  );
};

export const Svg = styled.svg`
  vertical-align: middle;
`;
