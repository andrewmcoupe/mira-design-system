import Head from "next/head";
import React from "react";
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Input,
  Select,
  Text,
  Label,
  IconButton,
  ProgressButton,
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

const ColStack = styled(Stack, {
  flexDirection: "column",
  gap: "4px",
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
            <IconButton variant={"red"} icon={"AvatarIcon"} />
            <IconButton variant={"green"} icon={"CheckboxIcon"} />
            <IconButton variant={"blue"} icon={"DiscIcon"} />
            <IconButton variant={"orange"} icon={"CircleBackslashIcon"} />
            <IconButton variant={"ghost"} icon={"PaddingIcon"} />
          </Stack>
        </section>

        <section>
          {/* PROGRESS BUTTONS */}
          <Heading>Progress buttons</Heading>
          <Text>Click or press and hold to see them in action!</Text>

          <Stack>
            <ProgressButton progressColor={"blue"} variant={"red"}>
              Hold on tight!
            </ProgressButton>
            <ProgressButton progressColor={"red"} variant={"green"}>
              Hold on tight!
            </ProgressButton>
            <ProgressButton progressColor={"green"} variant={"blue"}>
              Hold on tight!
            </ProgressButton>
            <ProgressButton progressColor={"blue"} variant={"orange"}>
              Hold on tight!
            </ProgressButton>
            <ProgressButton
              progressColor={"red"}
              variant={"blue"}
              onProgressComplete={() => alert("Do something")}
            >
              With onComplete callback
            </ProgressButton>
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
          {/* LABEL */}
          <Heading>Labels</Heading>
          <Stack>
            <Label>Label</Label>
          </Stack>
        </section>

        <section>
          {/* SELECT */}
          <Heading>Select</Heading>
          <Stack>
            <ColStack>
              <Label htmlFor={"select1"}>Select</Label>
              <Select id={"select1"} defaultValue={"Select an option..."}>
                <option value="Select..." disabled={true}>
                  Select an option...
                </option>
                <option value="One husky on the wall">
                  One husky on the wall
                </option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Select>
            </ColStack>
            <ColStack>
              <Label htmlFor={"select2"}>Disabled select</Label>
              <Select
                id={"select2"}
                defaultValue={"Disabled select..."}
                disabled={true}
              >
                <option value="Select..." disabled={true}>
                  Disabled select...
                </option>
                <option value="One husky on the wall">
                  One husky on the wall
                </option>
                <option value="Two">Two</option>
                <option value="Three">Three</option>
              </Select>
            </ColStack>
          </Stack>
        </section>

        <section>
          {/* INPUT */}
          <Heading>Inputs</Heading>
          <Stack>
            <Input />
            <Input placeholder={"Disabled..."} disabled={true} />
            <Input placeholder={"Invalid..."} state={"invalid"} />
            <Input
              placeholder={"Invalid with icon..."}
              state={"invalid"}
              icon={"TrashIcon"}
            />
            <Input placeholder={"With icon..."} icon={"HomeIcon"} />
            <Input
              placeholder={"Disabled with icon"}
              icon={"HomeIcon"}
              disabled={true}
            />
          </Stack>
          <Stack css={{ marginTop: "$4" }}>
            <ColStack>
              <Label htmlFor={"username"}>GitHub username</Label>
              <Input id={"username"} />
            </ColStack>
            <ColStack>
              <Label htmlFor={"label"}>Label</Label>
              <Input id={"label"} icon={"AvatarIcon"} />
            </ColStack>
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
          {/* HEADINGS */}
          <Heading>Headings</Heading>

          <ColStack>
            <Label>h1</Label>
            <Heading size={"1"}>
              The white husky howled as I typed on my keyboard.
            </Heading>

            <Label>h2</Label>
            <Heading as={"h2"} size={"2"}>
              The white husky howled as I typed on my keyboard.
            </Heading>

            <Label>h2 with gradient</Label>
            <Heading as={"h2"} size={"2"} gradient={true}>
              The white husky howled as I typed on my keyboard.
            </Heading>

            <Label>h3</Label>
            <Heading as={"h3"} size={"3"}>
              The white husky howled as I typed on my keyboard.
            </Heading>

            <Label>h4</Label>
            <Heading as={"h4"} size={"4"}>
              The white husky howled as I typed on my keyboard.
            </Heading>

            <Label>h5</Label>
            <Heading as={"h5"} size={"5"}>
              The white husky howled as I typed on my keyboard.
            </Heading>

            <Label>h6</Label>
            <Heading as={"h6"} size={"6"}>
              The white husky howled as I typed on my keyboard.
            </Heading>
          </ColStack>
        </section>

        <section>
          {/* TEXT */}
          <Heading>Text</Heading>

          <ColStack>
            <Label>Size 1</Label>
            <Text size={"1"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Label>Size 2</Label>

            <Text size={"2"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Label>Size 3</Label>

            <Text size={"3"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Label>Size 4</Label>

            <Text size={"4"}>
              The white husky howled as I typed on my keyboard.
            </Text>
            <Label>Gradient</Label>

            <Text size={"4"} color={"gradient"}>
              The white husky howled as I typed on my keyboard. The text moved
              from red, to green, to blue in a matter of moments.
            </Text>
          </ColStack>
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
