import Head from "next/head";
import React from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  IconButton,
  Select,
  Text,
} from "../components";
import { styled } from "@stitches/react";
import ThemeChanger from "../components/ThemeToggle/ThemeToggle";
import { theme } from "../../stitches.config";

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

const ColourSquare = styled("span", {
  minHeight: "20px",
});

const AutoFillingGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "16px",
});

const Stack = styled("div", {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
});

const Header = styled("header", {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
});

const WipBadge = styled(Badge, {
  position: "absolute",
});

const Index = () => {
  return (
    <div>
      <Head>
        <title>Mira Design System</title>
        <meta name="description" content="Mira Design System" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        css={{
          display: "flex",
          flexDirection: "column",
          gap: "$7",
        }}
      >
        <Header>
          <Text size={"2"} css={{ margin: 0, position: "relative" }}>
            Mira Design System
            <WipBadge color={"red"}>WIP v0.0.1</WipBadge>
          </Text>
          <ThemeChanger />
        </Header>
        <section>
          {/* BUTTONS */}
          <Heading>Buttons</Heading>

          <Stack>
            <Button variant={"red"}>Red</Button>
            <Button variant={"green"}>Green</Button>
            <Button variant={"blue"}>Blue</Button>
            <Button variant={"orange"}>Orange</Button>
            <Button variant={"ghost"}>Ghost</Button>
          </Stack>
        </section>

        <section>
          {/* ICON BUTTONS */}
          <Heading>Icon buttons</Heading>

          <Stack>
            <IconButton variant={"red"} icon={"HomeIcon"} />
            <IconButton variant={"green"} icon={"CaretRightIcon"} />
            <IconButton variant={"blue"} icon={"TwitterLogoIcon"} />
            <IconButton variant={"orange"} icon={"GitHubLogoIcon"} />
            <IconButton variant={"ghost"} icon={"BarChartIcon"} />
          </Stack>
        </section>

        <section>
          {/* BADGES */}
          <Heading>Badges</Heading>
          <Stack>
            <Badge color={"red"}>Red</Badge>
            <Badge color={"green"}>Green</Badge>
            <Badge color={"blue"}>Blue</Badge>
            <Badge color={"orange"}>Orange</Badge>
            <Badge color={"contrast"}>Contrast</Badge>
          </Stack>
        </section>

        <section>
          {/* SELECT */}
          <Heading>Select</Heading>
          <Stack>
            <Select defaultValue={"Select..."}>
              <option value="Select..." disabled={true}>
                Select...
              </option>
              <option value="One husky on the wall">
                One husky on the wall
              </option>
              <option value="Two">Two</option>
              <option value="Three">Three</option>
            </Select>
          </Stack>
        </section>

        <section>
          {/* CARDS */}
          <Heading>Cards</Heading>

          <Stack>
            <AutoFillingGrid>
              <Card>
                <Card.Header>Card Header</Card.Header>
                <Card.Body>
                  <Text>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant={"green"}>Card footer</Button>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header>Header no footer</Card.Header>
                <Card.Body>
                  <Text>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Text>
                    Just a card with a card body and nothing else. Not even
                    lorem ipsum.
                  </Text>
                  <Text>Just a card body.</Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Text>
                    Just a card with a card body with a footer only. Not even
                    lorem ipsum.
                  </Text>
                  <Text>Just a card body with a footer.</Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant={"orange"}>Card footer</Button>
                </Card.Footer>
              </Card>
            </AutoFillingGrid>
          </Stack>
        </section>

        <section>
          {/* TEXT */}
          <Heading>Text</Heading>

          <Stack css={{ flexDirection: "column" }}>
            <Text css={{ margin: 0 }}>Size 1</Text>
            <Text size={"1"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Text css={{ margin: 0 }}>Size 2</Text>

            <Text size={"2"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Text css={{ margin: 0 }}>Size 3</Text>

            <Text size={"3"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Text css={{ margin: 0 }}>Size 4</Text>

            <Text size={"4"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Text css={{ margin: 0 }}>Gradient</Text>

            <Text size={"4"} color={"gradient"}>
              The white husky howled as I typed on my keyboard. The text moved
              from red, to green, to blue in a matter of moments.
            </Text>
          </Stack>
        </section>

        <section>
          {/* COLOURS */}
          <Heading>Colors</Heading>
          <Stack css={{ gap: "0px" }}>
            <Stack css={{ gap: "0px", flexDirection: "column" }}>
              {categorisedColors.reds.map((color) => (
                <ColourSquare
                  key={color}
                  css={{
                    width: 100,
                    backgroundColor: `$${color}`,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {color}
                </ColourSquare>
              ))}
            </Stack>
            <Stack css={{ gap: "0px", flexDirection: "column" }}>
              {categorisedColors.greens.map((color) => (
                <ColourSquare
                  key={color}
                  css={{
                    width: 100,
                    backgroundColor: `$${color}`,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {color}
                </ColourSquare>
              ))}
            </Stack>
            <Stack css={{ gap: "0px", flexDirection: "column" }}>
              {categorisedColors.blues.map((color) => (
                <ColourSquare
                  key={color}
                  css={{
                    width: 100,
                    backgroundColor: `$${color}`,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {color}
                </ColourSquare>
              ))}
            </Stack>
            <Stack css={{ gap: "0px", flexDirection: "column" }}>
              {categorisedColors.oranges.map((color) => (
                <ColourSquare
                  key={color}
                  css={{
                    width: 100,
                    backgroundColor: `$${color}`,
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  {color}
                </ColourSquare>
              ))}
            </Stack>
          </Stack>
        </section>
      </Container>
    </div>
  );
};

export default Index;
