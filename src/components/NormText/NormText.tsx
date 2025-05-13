import { FC } from "react"
import "./NormText.scss"

type NormTextProps = {
  text: string
  maxWidth: string
  marginTop?: string
  style?: object
}

const NormText: FC<NormTextProps> = ({ text, maxWidth, marginTop = "10px", style = {} }) => {
  return (
    <div className="norm" style={{ maxWidth, ...style }}>
      <h4 style={{ margin: "0", marginTop }}>{text}</h4>
    </div>
  )
}

export default NormText
