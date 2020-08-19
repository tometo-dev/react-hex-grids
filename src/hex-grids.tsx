import React from "react"
import "./styles.scss"

export const HexGridList: React.FC = ({ children }) => (
  <ul className="hex-grid__list">{children}</ul>
)

export const HexGridItem: React.FC = ({ children }) => (
  <li className="hex-grid__item">
    <div className="hex-grid__content">{children}</div>
  </li>
)

interface HexGridsProps {
  items: Array<any>
}

const HexGrids: React.FC<HexGridsProps> = ({ items }) => {
  return (
    <HexGridList>
      {items.map((item, index) => (
        <HexGridItem key={index}>{item}</HexGridItem>
      ))}
    </HexGridList>
  )
}

export default HexGrids
