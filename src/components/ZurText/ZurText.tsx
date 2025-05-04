import "./ZurText.scss"

const ZurText = ({
  text,
  maxWidth,
  marginTop = "10px",
  lineHeight = "81px",
}: {
  text: string
  maxWidth: string
  marginTop?: string
  lineHeight?: string
}) => (
  <div className="zur-text" style={{ maxWidth, textAlign: "center", lineHeight, fontFamily: "Pips" }}>
    <h1 style={{ margin: "0", marginTop }}>{text}</h1>
  </div>
)

export default ZurText
