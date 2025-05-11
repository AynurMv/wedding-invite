/* eslint-disable sonarjs/no-commented-code */
import pause from "@assets/kartinki/pause.svg"
import { useRef, useState } from "react"
import "./AudioPlayer.scss"

const AudioPlayer = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    // if (isPlaying) {
    //   audio.pause()
    // } else {
    //   audio.play()
    // }

    setIsPlaying(!isPlaying)
  }

  return (
    <div id="music-toggle">
      <audio ref={audioRef} src="/your-audio-file.mp3" preload="auto" />
      <button aria-label="Включить музыку" onClick={togglePlay}>
        {isPlaying ? <img src={pause} /> : <div>♪</div>}
      </button>
    </div>
  )
}

export default AudioPlayer
