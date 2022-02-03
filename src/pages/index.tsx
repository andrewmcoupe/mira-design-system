import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Button, Container } from "../components";

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
          <h2>Button</h2>
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
        </section>
      </Container>
    </div>
  );
};

export default Home;
