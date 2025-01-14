import { BaseIcon, IBaseIconProps } from "./base";

export default function MinusCircleIcon(props: IBaseIconProps) {
  return (
    <BaseIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="currentColor"
      />
    </BaseIcon>
  );
}
