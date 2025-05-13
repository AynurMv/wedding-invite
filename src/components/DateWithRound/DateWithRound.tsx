import AnimatedWrapper from "../AnimatedWrapper"
import ZurText from "../ZurText/ZurText"
import "./DateWithRound.css"

const DateWithRound = () => (
  <div className="date">
    <AnimatedWrapper scale={0.8} duration={1.5} delay={1}>
      <ZurText marginTop="20px" maxWidth="320px" text="27/07/25" />
    </AnimatedWrapper>
    <AnimatedWrapper>
      <img src="https://static.tildacdn.com/tild3737-6636-4761-b233-343566303366/Group_100_2.svg" />
    </AnimatedWrapper>
  </div>
)

export default DateWithRound
