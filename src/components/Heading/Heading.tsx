import { styled, getCssText } from "../../../stitches.config";

const Heading = styled("h1", {
  margin: "0",
  overflowWrap: "break-word",
  fontWeight: "$bold",
  fontSize: "$6",
  marginBottom: "$3",

  "@bp2": {
    fontSize: "$8",
  },
});

export default Heading;
