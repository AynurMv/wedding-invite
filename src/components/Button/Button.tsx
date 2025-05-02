import { FC } from "react"
import "./Button.css"

const Button: FC<{
  type?: "button" | "submit" | "reset"
  label: string
  link?: string
  marginTop: string
  fontSize?: string
  width?: string
  height?: string
}> = ({ type = "button", label, link, marginTop, width, fontSize, height }) => {
  const style = { marginTop, width, fontSize, height }

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="route-button" style={style}>
        {label}
      </a>
    )
  }

  return (
    <button type={type} className="route-button" style={style}>
      {label}
    </button>
  )
}

export default Button
