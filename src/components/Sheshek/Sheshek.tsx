import "./Sheshek.css"

type SheshekType = {
  top: string
  left: string
  link?: string
  marginBottom: string
}

const Sheshek = ({ top, left, link, marginBottom }: SheshekType) => {
  return (
    <div className="sheshek" style={{ position: "relative", top, left, marginBottom }}>
      <img
        src={link ? link : "https://static.tildacdn.com/tild3066-3263-4639-b238-376139373231/Group_86.svg"}
      />
    </div>
  )
}

export default Sheshek
