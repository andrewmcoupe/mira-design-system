import { styled, getCssText } from "../../../stitches.config";

const Heading = styled("h1", {
  margin: "0",
  overflowWrap: "break-word",
  fontWeight: "$7",
  fontSize: "$7",
  marginBottom: "$3",

  "@bp2": {
    fontSize: "$8",
  },
});

export default Heading;
