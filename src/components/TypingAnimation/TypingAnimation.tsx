import Lottie from "lottie-react"
import { FC } from "react"
import { Typewriter } from "react-simple-typewriter"
// eslint-disable-next-line import/no-relative-parent-imports
import heartAnimation from "../../assets/kartinki/yorek-animation.json"
import "./TypingAnimation.css"

const TypingAnimation: FC<{ isSmallScreen: boolean }> = ({ isSmallScreen }) => {
  return (
    <div className="typing-container">
      <div style={{ width: 400, height: 400 }}>
        <Lottie animationData={heartAnimation} loop={true} />
      </div>
      <div className="type-writter" style={{ width: isSmallScreen ? "200px" : "400px", textAlign: "center" }}>
        <Typewriter
          words={["Привет!", "У нас скоро свадьба!"]}
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
