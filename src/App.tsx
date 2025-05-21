import { useEffect, useState } from "react"
import ContentPage from "./components/ContentPage/ContentPage"
import EnvelopeInviteAnimation from "./components/EnvelopeInviteAnimation/EnvelopeInviteAnimation"
import "./App.scss"

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Обновляем ширину при изменении размера
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isSmallScreen = windowWidth < 640

  // useEffect(() => {
  //   const timer = setTimeout(() => setAnimationCompleted(true), 5000)
  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <div className="app">
      {!animationCompleted ? (
        <EnvelopeInviteAnimation
          isSmallScreen={isSmallScreen}
          onOpenComplete={() => setAnimationCompleted(true)}
        />
      ) : (
        <ContentPage isSmallScreen={isSmallScreen} animationCompleted={animationCompleted} />
      )}
    </div>
  )
}

export default App
