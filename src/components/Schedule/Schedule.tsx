import { motion } from "framer-motion"
import { FC } from "react"
import "./Schedule.css"
const Schedule: FC<{ xyAnimation: number; duration: number }> = ({ xyAnimation, duration }) => {
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
          <motion.div
            initial={{ opacity: 0, x: -lessXYAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <div className="time">{event.time}</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <img
              src="https://static.tildacdn.com/tild6339-6536-4637-b732-323462356363/Group_93_1.svg"
              alt="Звезда"
              className="icon"
            />
          </motion.div>
          <div className="event-info">
            <motion.div
              initial={{ opacity: 0, x: lessXYAnimation - 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: duration }}
              viewport={{ once: true, amount: 1 }}
            >
              <div className="event-title">{event.title}</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -lessXYAnimation }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: duration }}
              viewport={{ once: true, amount: 1 }}
            >
              <div className="event-description">{event.description}</div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Schedule
