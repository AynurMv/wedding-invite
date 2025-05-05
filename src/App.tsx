import bolgarPhoto from "@assets/photo/bolgar.jpg"
import { useEffect, useState } from "react"
import yorek from "./assets/kartinki/serdtse.svg"
import animePhoto from "./assets/photo/anime.jpg"
import aynurbekPhoto from "./assets/photo/Aynurbek2.png"
import ikeuPhoto from "./assets/photo/ikeu.jpg"
import zilyousssPhoto from "./assets/photo/zilechka.jpg"
import AnimatedPolaroid from "./components/AnimatedPolaroid"
import AnimatedWrapper from "./components/AnimatedWrapper"
import Button from "./components/Button/Button"
import DateWithRound from "./components/DateWithRound/DateWithRound"
import GuestForm from "./components/GuestForm/GuestForm"
import NormText from "./components/NormText/NormText"
import Schedule from "./components/Schedule/Schedule"
import Sheshek from "./components/Sheshek"
import Sizik from "./components/Sizik/Sizik"
import TypingAnimation from "./components/TypingAnimation/TypingAnimation"
import ZurText from "./components/ZurText/ZurText"
import "./App.scss"

function App() {
  const [animationCompleted, setAnimationCompleted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimationCompleted(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  const xyAnimation = 30
  const scale = 0.9

  const textMaxWidthOne = "420px"
  const maxWidthOne = "520px"
  const maxWidthTwo = "580px"

  const marginTop10 = "10px"
  const marginTop20 = "20px"
  const marginTop100 = "100px"

  return (
    <div className="app">
      {!animationCompleted ? (
        <TypingAnimation />
      ) : (
        <div className={`content ${animationCompleted ? "visible" : ""}`}>
          <div className="polaroids-container">
            <AnimatedWrapper x={-xyAnimation}>
              <AnimatedPolaroid label="Айнур" className="polaroid-aynur" imageUrl={aynurbekPhoto} />
            </AnimatedWrapper>
            <AnimatedWrapper x={xyAnimation} amount={0.1}>
              <AnimatedPolaroid label="Зиля" className="polaroid-zilya" imageUrl={zilyousssPhoto} />
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper scale={scale}>
            <ZurText marginTop="50px" maxWidth={textMaxWidthOne} text="Айнур + Зиля" />
            <ZurText marginTop={marginTop10} maxWidth={textMaxWidthOne} text="=" lineHeight="58px" />
          </AnimatedWrapper>
          <AnimatedWrapper y={xyAnimation}>
            <img src={yorek} />
          </AnimatedWrapper>
          <AnimatedWrapper x={-xyAnimation}>
            <ZurText marginTop={marginTop20} maxWidth={textMaxWidthOne} text="Узнали?" />
          </AnimatedWrapper>
          <AnimatedWrapper x={xyAnimation}>
            <NormText
              marginTop={marginTop20}
              maxWidth={textMaxWidthOne}
              text="Время пронеслось незаметно и у этих двух милых деток скоро свадьба!"
            />
            <NormText marginTop="0px" maxWidth={textMaxWidthOne} text="Да-да, мы сами в шоке!" />
            <AnimatedWrapper x={-10} relative>
              <img
                className="yildiz"
                src="https://static.tildacdn.com/tild6339-6536-4637-b732-323462356363/Group_93_1.svg"
              />
            </AnimatedWrapper>
          </AnimatedWrapper>
          <AnimatedPolaroid className="polaroid-ikeu" label="Сердца полны любви" imageUrl={ikeuPhoto} />
          <AnimatedWrapper x={-xyAnimation}>
            <ZurText marginTop={marginTop20} maxWidth={maxWidthOne} text="Дорогие и любимые" />
          </AnimatedWrapper>
          <AnimatedWrapper x={xyAnimation}>
            <NormText
              marginTop={marginTop20}
              maxWidth={maxWidthOne}
              text="Наша свадьба без вас не будет такой счастливой, уютной и веселой!"
            />
            <NormText marginTop="0px" maxWidth="620px" text="Приглашаем отметить этот день вместе с нами!" />
          </AnimatedWrapper>
          <DateWithRound />
          <AnimatedWrapper scale={scale}>
            <ZurText marginTop="160px" maxWidth={textMaxWidthOne} text="Программа дня" />
          </AnimatedWrapper>
          <Schedule xyAnimation={xyAnimation} />
          <AnimatedWrapper x={xyAnimation}>
            <ZurText marginTop="200px" maxWidth={maxWidthOne} text="Место проведения" />
          </AnimatedWrapper>
          <AnimatedWrapper amount={0.5}>
            <AnimatedPolaroid
              className="polaroid-bolgar"
              label="Банкетный зал «Болгар»"
              label2="в ресторане «Орловский дворец»"
              imageUrl={bolgarPhoto}
            />
          </AnimatedWrapper>
          <AnimatedWrapper x={xyAnimation}>
            <NormText
              marginTop="0px"
              maxWidth="320px"
              text="Мы ждем вас на берегу озера Сенеж в загородном комплексе The Sun Event"
            />
          </AnimatedWrapper>
          <AnimatedWrapper>
            <Button
              label="ПОСТРОИТЬ МАРШРУТ"
              link="https://yandex.ru/maps/org/orlovskiy_dvorets/107504788052?si=qukqvxb8mb5v0kefr2rvnxwjd0"
            />
          </AnimatedWrapper>
          <AnimatedWrapper>
            <ZurText marginTop={marginTop100} maxWidth={maxWidthOne} text="Дресс-код" />
          </AnimatedWrapper>
          <AnimatedWrapper x={-xyAnimation}>
            <NormText
              marginTop={marginTop10}
              maxWidth={maxWidthTwo}
              text="Дорогие друзья! Мы будем счастливы видеть вас на нашей свадьбе в том, в чём вам удобно и приятно — мы не устанавливаем дресс-код"
            />
            <NormText
              marginTop="5px"
              maxWidth={maxWidthTwo}
              text="Единственная просьба: по возможности избегайте слишком ярких цветов, чтобы атмосфера праздника осталась нежной и уютной"
            />
          </AnimatedWrapper>
          <AnimatedWrapper x={xyAnimation}>
            <ZurText marginTop={marginTop100} maxWidth={maxWidthOne} text="Пожелания" />
          </AnimatedWrapper>
          <AnimatedWrapper>
            <Sheshek />
          </AnimatedWrapper>
          <AnimatedWrapper x={-xyAnimation}>
            <NormText
              marginTop={marginTop10}
              maxWidth="680px"
              text="Сразу после свадьбы мы улетаем в свадебное путешествие, поэтому мы не успеем насладиться красотой подаренных цветов и будем рады, если вместо цветов вы решите подарить нам бутылочку хорошего вина"
            />
          </AnimatedWrapper>
          <AnimatedWrapper>
            <Sizik />
          </AnimatedWrapper>
          <AnimatedWrapper x={xyAnimation}>
            <NormText
              marginTop={marginTop10}
              maxWidth="550px"
              text="Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи"
            />
          </AnimatedWrapper>
          <GuestForm xyAnimation={xyAnimation} />
          <div className="contacts">
            <AnimatedWrapper>
              <h1>Контакты</h1>
              <img
                className="samoletik"
                src="https://static.tildacdn.com/tild3266-6164-4261-b438-323265386237/Group_95_1.svg"
              />
            </AnimatedWrapper>
          </div>
          <AnimatedWrapper x={-xyAnimation}>
            <NormText
              marginTop="30px"
              maxWidth={maxWidthOne}
              text="Если вы приготовили для нас сюрприз, не забудьте предупредить об этом нашего свадебного организатора"
            />
          </AnimatedWrapper>
          <AnimatedWrapper x={xyAnimation}>
            <NormText marginTop={marginTop20} maxWidth={maxWidthOne} text="Ольга: +7 (900) 000-00-00" />
          </AnimatedWrapper>
          <AnimatedWrapper>
            <a href="https://t.me/zilya_mv">
              <img
                className="telega"
                src="https://static.tildacdn.com/tild3136-3338-4235-b364-313135633861/Black_14.svg"
              />
            </a>
          </AnimatedWrapper>
          <AnimatedWrapper x={xyAnimation}>
            <ZurText marginTop="90px" maxWidth={maxWidthOne} text="Будем вас ждать!" />
          </AnimatedWrapper>
          <AnimatedWrapper className="konets" amount={0.5}>
            <img className="yorek" src={yorek} />
            <AnimatedPolaroid
              className="polaroid-anime"
              label="С большой любовью,"
              label2="Айнур и Зиля"
              imageUrl={animePhoto}
            />
          </AnimatedWrapper>
        </div>
      )}
    </div>
  )
}

export default App
