import { motion } from "framer-motion";
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
} & ComponentProps<typeof Button>;

const ProgressButton = (props: ActionButtonProps) => {
  const [isPressing, setIsPressing] = React.useState(false);

  const handlePress = () => {
    setIsPressing(true);
  };

  const handlePressCancel = () => {
    setIsPressing(false);
  };

  return (
    <Button
      {...props}
      onMouseUp={handlePressCancel}
      onMouseDown={handlePress}
      onTouchStart={handlePress}
      onTouchCancel={handlePressCancel}
      css={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ButtonText>{props.children}</ButtonText>
      <Progress
        variant={props.progressColor}
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
