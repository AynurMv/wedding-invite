/* eslint-disable import/no-relative-parent-imports */
import { motion, AnimatePresence } from "framer-motion"
import Lottie from "lottie-react"
import { useState, useEffect } from "react"
import styles from "./EnvelopeInviteAnimation.module.scss"
import envelopeAnimation from "../../assets/kartinki/envelope-animation.json"
// import heartAnimation from "../../assets/kartinki/yorek-animation.json"
// import ringsAnimation from "../../assets/kartinki/rings-animation.json"

import TypingAnimation from "../TypingAnimation/TypingAnimation"

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

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {!isOpened && (
          <>
            <motion.div
              key="envelope"
              className={styles.envelope}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2 }}
              transition={{ duration: 0.5 }}
            >
              <TypingAnimation isSmallScreen={isSmallScreen} />
              <div className={styles.svg} onClick={handleClick}>
                {/* <Lottie className={styles.svgRings} animationData={ringsAnimation} loop={true} /> */}
                <Lottie className={styles.svgEnvelope} animationData={envelopeAnimation} loop={true} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default EnvelopeInviteAnimation
