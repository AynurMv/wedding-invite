import { FC } from "react"
import ZurText from "../ZurText"
import "./DateWithRound.css"

const DateWithRound: FC<{ top?: string }> = ({ top }) => (
  <div className="date" style={{ position: "relative", top }}>
    <ZurText marginTop="20px" maxWidth="320px" text="27/07/25" />
    <img src="https://static.tildacdn.com/tild3737-6636-4761-b233-343566303366/Group_100_2.svg" />
  </div>
)

export default DateWithRound
