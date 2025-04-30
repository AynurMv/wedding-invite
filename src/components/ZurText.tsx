const ZurText = ({
  text,
  maxWidth,
  marginTop = "10px",
}: {
  text: string
  maxWidth: string
  marginTop?: string
}) => (
  <div style={{ maxWidth, textAlign: "center", lineHeight: "81px", fontFamily: "Pips" }}>
    <h1 style={{ margin: "0", marginTop }}>{text}</h1>
  </div>
)

export default ZurText
