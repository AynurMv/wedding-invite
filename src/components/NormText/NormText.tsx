import { FC } from "react"
import "./NormText.css"

type NormTextProps = {
  text: string
  maxWidth: string
  marginTop?: string
}

const NormText: FC<NormTextProps> = ({ text, maxWidth, marginTop = "10px" }) => {
  return (
    <div className="norm" style={{ maxWidth, textAlign: "center", lineHeight: "41px" }}>
      <h4 style={{ margin: "0", marginTop }}>{text}</h4>
    </div>
  )
}

export default NormText
