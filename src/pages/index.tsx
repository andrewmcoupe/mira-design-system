import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Container, Heading } from "../components";
import { styled } from "../../stitches.config";

const ColourSquare = styled("span", {
  minHeight: "100px",
});
const DottedLeftContainer = styled("div", {
  paddingLeft: "$2",
  borderLeft: "dotted",
  marginBottom: "$4",
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mira Design System</title>
        <meta name="description" content="Mira Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as={"main"} css={{ fontFamily: "$recursive" }}>
        <Heading fluid={true}>Welcome to Mira Design System</Heading>
        <section>
          <Heading as={"h2"} css={{ fontSize: "$2" }}>
            Buttons
          </Heading>
          <DottedLeftContainer
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
              alignItems: "start",
            }}
          >
            <Button color={"primary"}>Primary button</Button>
            <Button color="secondary">Secondary button</Button>
            <Button color="ghost">Ghost button</Button>
            <Button size="l">Large primary button</Button>
            <Button color={"secondary"} size="l">
              Large secondary button
            </Button>
            <Button color={"ghost"} size="l">
              Large ghost button
            </Button>
            <Button stretch>Stretch button</Button>
          </DottedLeftContainer>
        </section>
        <DottedLeftContainer>
          <Heading as={"h2"} css={{ fontSize: "$2" }}>
            Colours
          </Heading>
          <p>Pink</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
              gap: "1px",
            }}
          >
            <ColourSquare css={{ backgroundColor: "$pink1" }} />
            <ColourSquare css={{ backgroundColor: "$pink2" }} />
            <ColourSquare css={{ backgroundColor: "$pink3" }} />
            <ColourSquare css={{ backgroundColor: "$pink4" }} />
            <ColourSquare css={{ backgroundColor: "$pink5" }} />
            <ColourSquare css={{ backgroundColor: "$pink6" }} />
            <ColourSquare css={{ backgroundColor: "$pink7" }} />
            <ColourSquare css={{ backgroundColor: "$pink8" }} />
            <ColourSquare css={{ backgroundColor: "$pink9" }} />
            <ColourSquare css={{ backgroundColor: "$pink10" }} />
            <ColourSquare css={{ backgroundColor: "$pink11" }} />
          </div>
          <p>Blue</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, minmax(20px, 1fr))",
              gap: "1px",
            }}
          >
            <ColourSquare css={{ backgroundColor: "$blue1" }} />
            <ColourSquare css={{ backgroundColor: "$blue2" }} />
            <ColourSquare css={{ backgroundColor: "$blue3" }} />
            <ColourSquare css={{ backgroundColor: "$blue4" }} />
            <ColourSquare css={{ backgroundColor: "$blue5" }} />
            <ColourSquare css={{ backgroundColor: "$blue6" }} />
            <ColourSquare css={{ backgroundColor: "$blue7" }} />
            <ColourSquare css={{ backgroundColor: "$blue8" }} />
            <ColourSquare css={{ backgroundColor: "$blue9" }} />
            <ColourSquare css={{ backgroundColor: "$blue10" }} />
            <ColourSquare css={{ backgroundColor: "$blue11" }} />
          </div>
        </DottedLeftContainer>
      </Container>
    </div>
  );
};

export default Home;
