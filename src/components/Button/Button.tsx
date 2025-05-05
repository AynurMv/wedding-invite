import { FC } from "react"
import "./Button.css"

const Button: FC<{
  type?: "button" | "submit" | "reset"
  label: string
  link?: string
  className?: string
}> = ({ type = "button", label, link, className }) => {
  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="route-button">
        {label}
      </a>
    )
  }

  return (
    <button type={type} className={`route-button ${className ? className : ""}`}>
      {label}
    </button>
  )
}

export default Button
