import { useEffect, useRef, useState } from "react"
import ContentPage from "./components/ContentPage/ContentPage"
import EnvelopeInviteAnimation from "./components/EnvelopeInviteAnimation/EnvelopeInviteAnimation"
import "./App.scss"

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying((prev) => !prev)
  }

  // Обновляем ширину при изменении размера
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isSmallScreen = windowWidth < 640

  return (
    <div className="app">
      {!animationCompleted ? (
        <EnvelopeInviteAnimation
          isSmallScreen={isSmallScreen}
          onOpenComplete={() => {
            setAnimationCompleted(true)
            togglePlay()
          }}
        />
      ) : (
        <ContentPage
          isSmallScreen={isSmallScreen}
          animationCompleted={animationCompleted}
          togglePlay={togglePlay}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
        />
      )}
    </div>
  )
}

export default App
