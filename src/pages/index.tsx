import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Container } from "../components";
import { styled } from "../../stitches.config";

const ColourSquare = styled("span", {
  height: 50,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mira Design System</title>
        <meta name="description" content="Mira Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as={"main"}>
        <h1>Welcome to Mira Design System</h1>
        <section>
          <fieldset style={{ borderRadius: 6 }}>
            <legend style={{ fontWeight: "bold", fontSize: 24 }}>Button</legend>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "16px",
                alignItems: "start",
              }}
            >
              <Button color="primary">Primary button</Button>
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
            </div>
          </fieldset>
        </section>
        <section>
          <fieldset style={{ borderRadius: 6 }}>
            <legend style={{ fontWeight: "bold", fontSize: 24 }}>
              Colours
            </legend>
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
          </fieldset>
        </section>
      </Container>
    </div>
  );
};

export default Home;
