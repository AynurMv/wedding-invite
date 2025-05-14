import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface EnvelopeInviteAnimationProps {
  onOpenComplete: () => void
}

const EnvelopeInviteAnimation = ({ onOpenComplete }: EnvelopeInviteAnimationProps) => {
  const [isOpened, setIsOpened] = useState(false)

  // После окончания анимации открытия вызываем коллбек
  useEffect(() => {
    if (isOpened) {
      const timeout = setTimeout(() => {
        onOpenComplete()
      }, 800) // длина анимации в ms
      return () => clearTimeout(timeout)
    }
  }, [isOpened, onOpenComplete])

  const handleClick = () => {
    setIsOpened(true)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-pink-50 to-white">
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            key="envelope"
            className="relative w-64 h-40 perspective-600"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {/* Нижняя часть конверта */}
            <motion.div
              className="absolute w-full h-2/3 bottom-0 bg-white border-2 border-gold rounded-b-lg"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{ originY: 1 }}
            />

            {/* Клапан конверта */}
            <motion.div
              className="absolute w-full h-1/2 top-0 bg-white border-2 border-gold border-b-0 rounded-t-lg z-10"
              initial={{ rotateX: 0 }}
              animate={{ rotateX: 0 }}
              exit={{ rotateX: -120 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ transformOrigin: "top center" }}
            />

            {/* Кнопка открытия */}
            <motion.button
              key="button"
              onClick={handleClick}
              className="absolute bottom-[-3rem] left-1/2 transform -translate-x-1/2 inline-flex items-center px-6 py-3 bg-gold text-white rounded-lg shadow-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              💌 Открыть приглашение
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* После открытия */}
      <AnimatePresence>
        {isOpened && (
          <motion.div
            key="content"
            className="absolute inset-0 flex items-center justify-center bg-white z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {/* Здесь можно рендерить TypingAnimation или основной контент */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnvelopeInviteAnimation
