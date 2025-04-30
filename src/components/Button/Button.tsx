import { FC, MouseEventHandler } from "react"
import "./Button.css"

const Button: FC<{
  label: string
  link: string
  marginTop: string
  fontSize?: string
  width?: string
  height?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}> = ({ label, link, marginTop, width, onClick, fontSize, height }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="route-button"
      style={{ marginTop, width, fontSize, height }}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

export default Button
