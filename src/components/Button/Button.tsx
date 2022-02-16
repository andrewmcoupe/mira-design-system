import { styled } from "../../../stitches.config";
import * as Icons from "@radix-ui/react-icons";
import { ComponentProps } from "@stitches/react";

const Button = styled("button", {
  borderRadius: "$3",
  padding: "0 $3",
  fontSize: "$4",
  cursor: "pointer",
  userSelect: "none",
  height: "44px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "max-content",
  border: "none",

  "&:hover": {
    opacity: "0.8",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "0.5",
  },

  defaultVariants: {
    variant: "red",
  },
  variants: {
    stretch: {
      true: {
        width: "100%",
      },
    },
    variant: {
      red: {
        backgroundColor: "$red10",
        color: "white",
      },
      transparentRed: {
        backgroundColor: "transparent",
        color: "$red10",
      },
      green: {
        backgroundColor: "$green10",
        color: "white",
      },
      blue: {
        backgroundColor: "$blue10",
        color: "white",
      },
      orange: {
        backgroundColor: "$orange10",
        color: "white",
      },
      ghost: {
        backgroundColor: "$gray4",
        color: "$hiContrast",

        "&:hover": {
          backgroundColor: "$gray4",
        },
      },
    },
  },
});

export const IconButton = ({
  icon,
  ...props
}: { icon: keyof typeof Icons } & ComponentProps<typeof Button>) => {
  const IconElement = Icons[icon];
  return (
    <Button variant={props.variant} css={{ width: 44, padding: "0 8px" }}>
      <div>
        <IconElement width={22} height={22} />
      </div>
    </Button>
  );
};
export default Button;
