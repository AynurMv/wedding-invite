import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import "./EnvelopeInviteAnimation.scss"
// import TypingAnimation from "../TypingAnimation/TypingAnimation"

interface EnvelopeInviteAnimationProps {
  isSmallScreen: boolean
  onOpenComplete: () => void
}

const EnvelopeInviteAnimation = ({ isSmallScreen, onOpenComplete }: EnvelopeInviteAnimationProps) => {
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    if (isOpened) {
      const timeout = setTimeout(onOpenComplete, 800)
      return () => clearTimeout(timeout)
    }
  }, [isOpened, onOpenComplete])

  const handleClick = () => setIsOpened(true)
  console.log(isSmallScreen)
  return (
    <div className="envelope-container">
      {/* <TypingAnimation isSmallScreen={isSmallScreen} /> */}

      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="envelope"
            className="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="envelope-bottom"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ transformOrigin: "bottom" }}
            />
            <motion.div
              className="envelope-flap"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: -120 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformOrigin: "top center" }}
            />
            <motion.button
              className="open-button"
              onClick={handleClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💌 Открыть приглашение
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpened && (
          <motion.div
            key="content"
            className="content-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {/* Тут можно вставить TypingAnimation или основной контент */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnvelopeInviteAnimation
