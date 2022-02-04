import { styled } from "../../../stitches.config";

const Heading = styled("h1", {
  // Reset
  margin: "0",
  overflowWrap: "break-word",
  fontWeight: "$bold",
  fontSize: "$3",
  marginBottom: "$3",

  variants: {
    fluid: {
      true: {
        fontSize: "clamp(1.5rem, 4vw + 1rem, 3rem)",
        minHeight: "0vh",
      },
    },
  },
});

export default Heading;
