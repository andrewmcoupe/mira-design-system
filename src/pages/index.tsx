import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Container, Heading, Badge, Text } from "../components";
import { styled, theme } from "../../stitches.config";

const ColourSquare = styled("span", {
  minHeight: "100px",
  borderRadius: "$1",
});

const DottedLeftContainer = styled("div", {
  paddingLeft: "$2",
  borderLeft: "dotted",
  marginBottom: "$4",
});

const AutoFillingGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px",
});

const Level2Heading: React.FC = ({ children }) => (
  <Heading as={"h2"} css={{ fontSize: "$7" }}>
    {children}
  </Heading>
);

const categorisedColors = Object.keys(theme.colors).reduce(
  (
    acc: {
      reds: string[];
      greens: string[];
      blues: string[];
      oranges: string[];
      contrast: string[];
    },
    curr: string
  ) => {
    if (curr.includes("red")) {
      acc.reds.push(curr);
    }
    if (curr.includes("blue")) {
      acc.blues.push(curr);
    }
    if (curr.includes("green")) {
      acc.greens.push(curr);
    }
    if (curr.includes("orange")) {
      acc.oranges.push(curr);
    }
    if (curr.includes("Contrast")) {
      acc.contrast.push(curr);
    }

    return acc;
  },
  {
    reds: [],
    greens: [],
    blues: [],
    contrast: [],
    oranges: [],
  }
);

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mira Design System</title>
        <meta name="description" content="Mira Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as={"main"} css={{ fontFamily: "$poppins" }}>
        <Heading>Mira Design System</Heading>
        <section>
          <DottedLeftContainer>
            <Level2Heading>Headings</Level2Heading>
            <Heading css={{ my: 0 }}>The white husky</Heading>
            <Heading
              css={{
                my: 0,
                fontSize: "$5",
                "@bp2": {
                  fontSize: "$7",
                },
              }}
            >
              The white husky
            </Heading>
            <Heading
              css={{
                my: 0,
                fontSize: "$4",
                "@bp2": {
                  fontSize: "$6",
                },
              }}
            >
              The white husky
            </Heading>
          </DottedLeftContainer>
          <DottedLeftContainer>
            <Level2Heading>Text</Level2Heading>
            <Text size={"1"}>The white husky howls in the night</Text>
            <Text size={"2"}>The white husky howls in the night</Text>
            <Text size={"3"}>The white husky howls in the night</Text>
            <Text size={"4"}>The white husky howls in the night</Text>
          </DottedLeftContainer>
          <Level2Heading>Badges</Level2Heading>
          <DottedLeftContainer
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Badge color={"red"}>white husky</Badge>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Badge color={"green"}>white husky</Badge>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Badge color={"blue"}>white husky</Badge>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Badge color={"orange"}>white husky</Badge>
            </div>
          </DottedLeftContainer>
          <Level2Heading>Buttons</Level2Heading>
          <DottedLeftContainer
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
              alignItems: "start",
            }}
          >
            <Button variant={"red"}>Primary button</Button>
            <Button variant={"green"}>Green button</Button>
            <Button variant="blue">Blue button</Button>
            <Button variant="orange">Blue button</Button>
            <Button variant={"ghost"}>Ghost button</Button>
            <Button stretch>Stretch button</Button>
          </DottedLeftContainer>
        </section>
        <DottedLeftContainer>
          <Level2Heading>Colours</Level2Heading>
          <Heading css={{ fontSize: "$4", my: "$4" }}>Reds</Heading>

          <AutoFillingGrid
            css={{
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "1px",
            }}
          >
            {categorisedColors.reds.map((color) => (
              <ColourSquare
                key={color}
                css={{
                  backgroundColor: `$${color}`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {color}
              </ColourSquare>
            ))}
          </AutoFillingGrid>
          <Heading css={{ fontSize: "$4", my: "$4" }}>Blues</Heading>
          <AutoFillingGrid
            css={{
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "1px",
            }}
          >
            {categorisedColors.blues.map((color) => (
              <ColourSquare
                key={color}
                css={{
                  backgroundColor: `$${color}`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {color}
              </ColourSquare>
            ))}
          </AutoFillingGrid>
          <Heading css={{ fontSize: "$4", my: "$4" }}>Greens</Heading>
          <AutoFillingGrid
            css={{
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "1px",
            }}
          >
            {categorisedColors.greens.map((color) => (
              <ColourSquare
                key={color}
                css={{
                  backgroundColor: `$${color}`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {color}
              </ColourSquare>
            ))}
          </AutoFillingGrid>
          <AutoFillingGrid
            css={{
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: "1px",
            }}
          >
            {categorisedColors.oranges.map((color) => (
              <ColourSquare
                key={color}
                css={{
                  backgroundColor: `$${color}`,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {color}
              </ColourSquare>
            ))}
          </AutoFillingGrid>
        </DottedLeftContainer>
      </Container>
    </div>
  );
};

export default Home;
