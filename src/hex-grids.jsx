import React from "react"
import "./styles.scss"

const GridList = ({ children }) => (
  <ul className="hex-grid__list">{children}</ul>
)

const GridItem = ({ children }) => (
  <li className="hex-grid__item">{children}</li>
)

const ItemContent = ({ children }) => (
  <div className="hex-grid__content">{children}</div>
)

const Item = ({ children }) => (
  <GridItem>
    <ItemContent>{children}</ItemContent>
  </GridItem>
)

const HexGrids = () => {
  const items = Array.from(new Array(60)).map((e, i) => i)
  return (
    <GridList>
      {items.map((item, index) => (
        <Item key={index}>{item}</Item>
      ))}
    </GridList>
  )
}

export default HexGrids
