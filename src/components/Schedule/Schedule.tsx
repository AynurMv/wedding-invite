import { FC } from "react"
import "./Schedule.css"
import AnimatedWrapper from "../AnimatedWrapper"
const Schedule: FC<{ xyAnimation: number }> = ({ xyAnimation }) => {
  const lessXYAnimation = xyAnimation - 15
  const events = [
    {
      time: "15:30",
      title: "Welcome",
      description: "Время пролетит незаметно за играми и новыми знакомствами",
    },
    {
      time: "16:00",
      title: "Церемония",
      description: "Будем очень рады разделить этот важный момент с вами",
    },
    {
      time: "17:00",
      title: "Банкет",
      description: "Насладитесь этим вечером, будет много любви, танцев и веселья",
    },
  ]

  return (
    <div className="schedule">
      {events.map((event, idx) => (
        <div key={idx} className="event-row">
          <AnimatedWrapper x={-lessXYAnimation}>
            <div className="time">{event.time}</div>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <img
              src="https://static.tildacdn.com/tild6339-6536-4637-b732-323462356363/Group_93_1.svg"
              alt="Звезда"
              className="icon"
            />
          </AnimatedWrapper>
          <div className="event-info">
            <AnimatedWrapper x={lessXYAnimation - 10}>
              <div className="event-title">{event.title}</div>
            </AnimatedWrapper>
            <AnimatedWrapper x={-lessXYAnimation}>
              <div className="event-description">{event.description}</div>
            </AnimatedWrapper>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Schedule
