import { motion, useMotionValue } from "framer-motion";
import { styled, theme } from "../../../stitches.config";
import Button from "../Button/Button";
import React from "react";
import { ComponentProps } from "@stitches/react";

const Progress = styled(motion.div, {
  zIndex: 1,
  content: "",
  position: "absolute",
  background: "darkgray",
  border: "none",
  height: "100%",
  width: "100%",
  top: 0,
  left: 0,

  defaultVariants: {
    variant: "red",
  },

  variants: {
    variant: {
      red: {
        background: "$red10",
      },
      green: {
        background: "$green10",
      },
      blue: {
        background: "$blue10",
      },
      orange: {
        background: "$orange10",
      },
    },
  },
});

const ButtonText = styled("span", {
  zIndex: 2,
});

export type ActionButtonProps = {
  progressColor: "red" | "green" | "blue" | "orange";
  onProgressComplete?: () => void;
} & ComponentProps<typeof Button>;

const ProgressButton = (props: ActionButtonProps) => {
  const { progressColor, onProgressComplete, ...buttonProps } = props;
  const x = useMotionValue(0);
  const [isPressing, setIsPressing] = React.useState(false);

  React.useEffect(
    () =>
      x.onChange((latest) => {
        // @ts-ignore
        if (latest === "0%") {
          onProgressComplete?.();
        }
      }),
    [onProgressComplete, props, x]
  );

  const handlePress = () => {
    setIsPressing(true);
  };

  const handlePressCancel = () => {
    setIsPressing(false);
  };

  return (
    <Button
      {...buttonProps}
      onMouseUp={handlePressCancel}
      onMouseDown={handlePress}
      onTouchStart={handlePress}
      onTouchCancel={handlePressCancel}
      onTouchEnd={handlePressCancel}
      css={{
        position: "relative",
        overflow: "hidden",
        WebkitTapHighlightColor: "transparent",
        "&:hover": {
          opacity: 1,
        },
      }}
    >
      <ButtonText>{props.children}</ButtonText>
      <Progress
        style={{ x }}
        variant={progressColor}
        initial={{ x: "-101%" }}
        transition={{
          ease: "linear",
          duration: 1,
        }}
        animate={{ x: isPressing ? 0 : "-101%" }}
      />
    </Button>
  );
};

export default ProgressButton;
