# Mira Design System

A personal design system built using [Stitches](http://stitches.dev)!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Run Storybook

```bash
npm run storybook
# or
yarn storybook
```

## Pre commit

Prior to every commit, `lint-staged` will run some checks and fix/reformat when it can.

- ESLint
- Prettier
- TypeScript compilation

## Continuous integration

After pushing any changes to the remote, GitHub actions will also run some checks.

- Unit testing
- Visual regression testing
