import styled from "styled-components";
import { MediaQuery, useMediaQuery } from "../../hooks/useMediaQuery";
import Modal from "../Modal";
import Button from "../Button";
import { theme } from "../../config/theme";

interface IProps {
  onClose: VoidFunction;
  onAccept: VoidFunction;
  mounted?: boolean;
  title: React.ReactNode;
  acceptText: string;
  cancelText?: string;
  disabled?: boolean;
  description?: React.ReactNode;
  aditionalOptions?: Array<{
    onClick: VoidFunction;
    label: React.ReactNode;
  }>;
}

export default function ConfirmCancelDialog(props: IProps) {
  const isDesktop = useMediaQuery((m) => m.MIN_TABLET);

  return (
    <Modal
      onClose={props.onClose}
      mounted={props.mounted}
      rounded
      style={{
        paddingInline: isDesktop ? undefined : 8,
        display: "flex",
        flexDirection: "column",
        backgroundColor: isDesktop ? undefined : "unset",
        gap: isDesktop ? 0 : 8,
        maxHeight: "unset",
        height: "auto",
        marginBottom: 34,
      }}
      anchor={isDesktop ? "center" : "bottom"}
    >
      <Dialog>
        <h2>{props.title}</h2>
        {props.description && <p>{props.description}</p>}
        <Button
          style={{ marginTop: 32 }}
          disabled={props.disabled}
          onClick={() => {
            props.onAccept();
            props.onClose();
          }}
          fullWidth
          backgroundColor={theme.color.ERROR[100]}
          borderColor={theme.color.ERROR[100]}
          color={theme.color.ERROR[700]}
        >
          {props.acceptText}
        </Button>
        {props.aditionalOptions?.map((option) => (
          <Button
            style={{ marginTop: 8 }}
            disabled={props.disabled}
            onClick={() => {
              option.onClick();
              props.onClose();
            }}
            fullWidth
            backgroundColor={theme.color.PRIMARY[100]}
            borderColor={theme.color.PRIMARY[100]}
            color={theme.color.PRIMARY[700]}
          >
            {option.label}
          </Button>
        ))}
      </Dialog>
      <Button
        style={{ marginBottom: isDesktop ? 8 : undefined }}
        fullWidth
        variant="ghost"
        backgroundColor="white"
        onClick={props.onClose}
      >
        {props.cancelText ?? "Volver"}
      </Button>
    </Modal>
  );
}

const Dialog = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 16px;

  @media ${MediaQuery.MIN_TABLET} {
    padding-bottom: 8px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 21px;
  }
`;
