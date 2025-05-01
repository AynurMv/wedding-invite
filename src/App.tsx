import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import yorek from "./assets/kartinki/serdtse.svg"
import animePhoto from "./assets/photo/anime.jpg"
import aynurbekPhoto from "./assets/photo/Aynurbek2.png"
import bolgarPhoto from "./assets/photo/bolgar.jpg"
import ikeuPhoto from "./assets/photo/ikeu.jpg"
import zilyousssPhoto from "./assets/photo/zilechka.jpg"
import AnimatedPolaroid from "./components/AnimatedPolaroid"
import Button from "./components/Button/Button"
import DateWithRound from "./components/DateWithRound/DateWithRound"
import GuestForm from "./components/GuestForm/GuestForm"
import NormText from "./components/NormText/NormText"
import Schedule from "./components/Schedule/Schedule"
import Sheshek from "./components/Sheshek"
import Sizik from "./components/Sizik/Sizik"
import TypingAnimation from "./components/TypingAnimation/TypingAnimation"
import ZurText from "./components/ZurText"

import "./App.css"

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setAnimationCompleted(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const xyAnimation = 30
  const duration = 1.2
  const scale = 0.9

  return (
    <div className="app">
      {!animationCompleted ? (
        <TypingAnimation />
      ) : (
        <div className={`content ${animationCompleted ? "visible" : ""}`}>
          <div style={{ display: "block", height: "530px", position: "relative", top: "-33px" }}>
            <motion.div
              initial={{ opacity: 0, x: -xyAnimation }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration }}
              viewport={{ once: true }}
            >
              <AnimatedPolaroid
                label="Айнур"
                imageUrl={aynurbekPhoto}
                degree="-10"
                left="-170px"
                top="17px"
                photoTop="50px"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: xyAnimation }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration }}
              viewport={{ once: true }}
            >
              <AnimatedPolaroid
                label="Зиля"
                imageUrl={zilyousssPhoto}
                degree="10"
                left="165px"
                top="-435px"
                zilyousss
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <ZurText marginTop="30px" maxWidth="420px" text="Айнур + Зиля" />
            <ZurText marginTop="10px" maxWidth="420px" text="=" lineHeight="58px" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: xyAnimation }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <img src={yorek} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <ZurText marginTop="20px" maxWidth="420px" text="Узнали?" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText
              marginTop="20px"
              maxWidth="420px"
              text="Время пронеслось незаметно и у этих двух милых деток скоро свадьба!"
            />
            <NormText marginTop="0px" maxWidth="420px" text="Да-да, мы сами в шоке!" />
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration }}
              viewport={{ once: true, amount: 1 }}
              style={{ position: "relative" }}
            >
              <img
                className="yildiz"
                src="https://static.tildacdn.com/tild6339-6536-4637-b732-323462356363/Group_93_1.svg"
              />
            </motion.div>
          </motion.div>
          <AnimatedPolaroid
            label="Сердца полны любви"
            imageUrl={ikeuPhoto}
            degree="-10"
            left="0px"
            top="40px"
            fontSize="18px"
          />
          <motion.div
            initial={{ opacity: 0, x: -xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <ZurText marginTop="20px" maxWidth="520px" text="Дорогие и любимые" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText
              marginTop="20px"
              maxWidth="520px"
              text="Наша свадьба без вас не будет такой счастливой, уютной и веселой!"
            />
            <NormText marginTop="0px" maxWidth="620px" text="Приглашаем отметить этот день вместе с нами!" />
          </motion.div>
          <DateWithRound top="57px" />
          <motion.div
            initial={{ opacity: 0, scale }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <ZurText marginTop="160px" maxWidth="420px" text="Программа дня" />
          </motion.div>
          <Schedule xyAnimation={xyAnimation} duration={duration} />
          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <ZurText marginTop="200px" maxWidth="520px" text="Место проведения" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <AnimatedPolaroid
              label="Банкетный зал «Болгар»"
              label2="в ресторане «Орловский дворец»"
              imageUrl={bolgarPhoto}
              degree="-1"
              left="0px"
              top="-20px"
              fontSize="18px"
              notAnimated
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText
              marginTop="0px"
              maxWidth="320px"
              text="Мы ждем вас на берегу озера Сенеж в загородном комплексе The Sun Event"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <Button
              marginTop="20px"
              label="ПОСТРОИТЬ МАРШРУТ"
              link="https://yandex.ru/maps/org/orlovskiy_dvorets/107504788052?si=qukqvxb8mb5v0kefr2rvnxwjd0"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <ZurText marginTop="100px" maxWidth="520px" text="Дресс-код" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText
              marginTop="10px"
              maxWidth="580px"
              text="Дорогие друзья! Мы будем счастливы видеть вас на нашей свадьбе в том, в чём вам удобно и приятно — мы не устанавливаем дресс-код"
            />
            <NormText
              marginTop="5px"
              maxWidth="580px"
              text="Единственная просьба: по возможности избегайте слишком ярких цветов, чтобы атмосфера праздника осталась нежной и уютной"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <ZurText marginTop="100px" maxWidth="520px" text="Пожелания" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <Sheshek left="0px" top="15px" marginBottom="20px" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText
              marginTop="10px"
              maxWidth="680px"
              text="Сразу после свадьбы мы улетаем в свадебное путешествие, поэтому мы не успеем насладиться красотой подаренных цветов и будем рады, если вместо цветов вы решите подарить нам бутылочку хорошего вина"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <Sizik margin="40px" width="400px" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText
              marginTop="10px"
              maxWidth="550px"
              text="Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи"
            />
          </motion.div>
          <GuestForm xyAnimation={xyAnimation} duration={duration} />
          <div
            style={{
              maxWidth: "520px",
              textAlign: "center",
              lineHeight: "81px",
              fontFamily: "Pips",
              position: "relative",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration }}
              viewport={{ once: true, amount: 1 }}
            >
              <h1 style={{ margin: "0", marginTop: "100px" }}>Контакты</h1>
              <img
                className="samoletik"
                src="https://static.tildacdn.com/tild3266-6164-4261-b438-323265386237/Group_95_1.svg"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText
              marginTop="30px"
              maxWidth="520px"
              text="Если вы приготовили для нас сюрприз, не забудьте предупредить об этом нашего свадебного организатора"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <NormText marginTop="20px" maxWidth="520px" text="Ольга: +7 (900) 000-00-00" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <a href="https://t.me/zilya_mv">
              <img
                className="telega"
                src="https://static.tildacdn.com/tild3136-3338-4235-b364-313135633861/Black_14.svg"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: xyAnimation }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 1 }}
          >
            <ZurText marginTop="90px" maxWidth="520px" text="Будем вас ждать!" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ display: "flex", opacity: 1, alignItems: "center", flexDirection: "column" }}
          >
            <img className="yorek" src={yorek} />
            <AnimatedPolaroid
              label="С большой любовью,"
              label2="Айнур и Зиля"
              imageUrl={animePhoto}
              degree="-1"
              left="0px"
              top="20px"
              fontSize="18px"
            />
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default App
