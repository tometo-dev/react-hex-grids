import React, { useState } from "react"
import HexGrids, { HexGridItem, HexGridList } from "react-hex-grids"

function App() {
  const [defaultUsage, setDefaultUsage] = useState(false)
  return (
    <>
      <button
        onClick={() => {
          setDefaultUsage((value) => !value)
        }}
      >
        toggle
      </button>
      {defaultUsage ? (
        <HexGrids items={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
      ) : (
        <HexGridList>
          <HexGridItem>1</HexGridItem>
          <HexGridItem>2</HexGridItem>
          <HexGridItem>3</HexGridItem>
          <HexGridItem>4</HexGridItem>
          <HexGridItem>5</HexGridItem>
          <HexGridItem>6</HexGridItem>
        </HexGridList>
      )}
    </>
  )
}

export default App
