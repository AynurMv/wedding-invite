import "./ZurText.scss"

const ZurText = ({
  text,
  maxWidth,
  marginTop,
  lineHeight,
}: {
  text: string
  maxWidth: string
  marginTop?: string
  lineHeight?: string
}) => (
  <div className="zur-text" style={{ maxWidth, lineHeight }}>
    <h1 style={{ marginTop }}>{text}</h1>
  </div>
)

export default ZurText
