import musicTrack from "@assets/Dzho_Kiri_End_of_Beginning.mp3"
import pauseIcon from "@assets/kartinki/pause.svg"
import playIcon from "@assets/kartinki/play.svg"
import { useRef, useState, useEffect } from "react"
import "./AudioPlayer.scss"

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

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

  useEffect(() => {
    togglePlay()
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener("ended", handleEnded)
    return () => audio.removeEventListener("ended", handleEnded)
  }, [])

  return (
    <div id="music-toggle">
      <audio ref={audioRef} src={musicTrack} preload="auto" loop={false} />
      <button className={isPlaying ? "pause" : "play"} type="button" onClick={togglePlay}>
        <img src={isPlaying ? pauseIcon : playIcon} />
      </button>
    </div>
  )
}

export default AudioPlayer
