import { motion } from "framer-motion"
import { FC } from "react"
import ZurText from "../ZurText/ZurText"
import "./DateWithRound.css"

const DateWithRound: FC<{ top?: string }> = ({ top }) => (
  <div className="date" style={{ position: "relative", top }}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      <ZurText marginTop="20px" maxWidth="320px" text="27/07/25" />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <img src="https://static.tildacdn.com/tild3737-6636-4761-b233-343566303366/Group_100_2.svg" />
    </motion.div>
  </div>
)

export default DateWithRound
