// CountdownTimer.tsx
import { useState, useEffect } from "react"
import AnimatedWrapper from "../AnimatedWrapper"
import ZurText from "../ZurText/ZurText"
import "./CountdownTimer.scss"

interface CountdownTimerProps {
  target: Date
  xyAnimation: number
  maxWidthOne: string
}

// Функция для правильного склонения слов
const pluralize = (value: number, forms: [string, string, string]) => {
  const mod10 = value % 10
  const mod100 = value % 100
  if (mod100 >= 11 && mod100 <= 14) {
    return forms[2]
  }
  if (mod10 === 1) {
    return forms[0]
  }
  if (mod10 >= 2 && mod10 <= 4) {
    return forms[1]
  }
  return forms[2]
}

const CountdownTimer = ({ target, maxWidthOne, xyAnimation }: CountdownTimerProps) => {
  const calcTimeLeft = () => {
    const now = new Date()
    const diff = target.getTime() - now.getTime()

    if (diff <= 0) return null

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)

    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calcTimeLeft())
    }, 1000)
    return () => clearInterval(timerId)
  }, [target])

  if (!timeLeft) {
    return (
      <AnimatedWrapper x={xyAnimation}>
        <ZurText maxWidth={maxWidthOne} text="Событие уже наступило!" />
      </AnimatedWrapper>
    )
  }

  const { days, hours, minutes, seconds } = timeLeft
  const dayForm = pluralize(days, ["день", "дня", "дней"])
  const hourForm = pluralize(hours, ["час", "часа", "часов"])
  const minuteForm = pluralize(minutes, ["минуту", "минуты", "минут"])
  const secondForm = pluralize(seconds, ["секунду", "секунды", "секунд"])

  return (
    <AnimatedWrapper x={xyAnimation} className="countdown">
      <ZurText marginTop="90px" maxWidth={maxWidthOne} text={`Ждём вас через ${days} ${dayForm}`} />
      <ZurText
        marginTop="0px"
        maxWidth={maxWidthOne}
        text={`${hours} ${hourForm} ${minutes} ${minuteForm}`}
      />
      <div className="inline-text">
        <p>и </p>
        <p className="seconds">{seconds} </p>
        <p className="second-form">{secondForm}!</p>
      </div>
    </AnimatedWrapper>
  )
}

export default CountdownTimer
