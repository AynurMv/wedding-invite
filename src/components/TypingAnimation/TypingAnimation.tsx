import { FC } from "react"
import { Typewriter } from "react-simple-typewriter"

import "./TypingAnimation.css"

const TypingAnimation: FC<{ isSmallScreen: boolean }> = ({ isSmallScreen }) => {
  const openConvertText = isSmallScreen
    ? "Открой\nпригласительный\nконверт"
    : "Открой пригласительный конверт"
  return (
    <div className="typing-container">
      <div className="type-writter" style={{ width: isSmallScreen ? "380px" : "700px", textAlign: "center" }}>
        <Typewriter
          words={["Привет!", "У нас скоро свадьба!", openConvertText]}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  )
}

export default TypingAnimation
