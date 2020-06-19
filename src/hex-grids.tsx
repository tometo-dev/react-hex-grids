import React from "react"
import "./styles.scss"

const GridList: React.FC = ({ children }) => (
  <ul className="hex-grid__list">{children}</ul>
)

const GridItem: React.FC = ({ children }) => (
  <li className="hex-grid__item">
    <div className="hex-grid__content">{children}</div>
  </li>
)

const HexGrids: React.FC = () => {
  const items = Array.from(new Array(60)).map((e, i) => i)
  return (
    <GridList>
      {items.map((item, index) => (
        <GridItem key={index}>{item}</GridItem>
      ))}
    </GridList>
  )
}

export default HexGrids
