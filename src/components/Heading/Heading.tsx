import { FunctionComponent } from "react";
import { styled } from "../../../stitches.config";

const Heading = styled("h1", {
  margin: "0",
  overflowWrap: "break-word",
  fontWeight: "$7",
  fontSize: "$7",
  marginBottom: "$3",

  "@bp2": {
    fontSize: "$8",
  },

  defaultVariants: {
    size: "1",
  },

  variants: {
    gradient: {
      true: {
        backgroundColor: "rgb(255,48,48)",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,48,48,1) 4%, rgba(118,226,43,1) 48%, rgba(75,225,255,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },
    },
    size: {
      1: {
        fontSize: "$8",
      },
      2: {
        fontSize: "$7",
      },
      3: {
        fontSize: "$6",
      },
      4: {
        fontSize: "$5",
      },
      5: {
        fontSize: "$4",
      },
      6: {
        fontSize: "$3",
      },
    },
  },
});

export default Heading;
