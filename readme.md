# Hexagonal Grid Layout for React

![Hexagonal Grid Layout Demo](src/assets/hex-grid-layout-demo.png?raw=true "Hexagonal Grid Layout Demo")

---

#### Motivation:

The work of Jesse Breneman [here](https://ninjarockstar.dev/css-hex-grids/).

While reading the article, I thought, "Why not build some react components for this?"

#### Usage:

```
import HexGrids, { HexGridItem, HexGridList } from "react-hex-grids"
...
<HexGridList>
  <HexGridItem>{item1}<HexGridItem>
  ....
</HexGridList>
```

See [examples](/example/src/App.js)

---

Also available on [bit.dev](https://bit.dev/tsuki/react-hex-grids/hex-grids)

```
bit import tsuki.react-hex-grids/hex-grids
```

Learn more [here](https://docs.bit.dev/docs/workspace#initializing-workspace).

#### Available scripts

In the project directory, you can run:

##### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `yarn prettier:format`

Run prettier to format the code.

##### `yarn rollup:build`

Build using rollup

#### Contributing

PRs are always welcome 😃
