import { useEffect, useState } from "react"
import yorek from "./assets/kartinki/serdtse.svg"
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

  return (
    <div className="app">
      {!animationCompleted ? (
        <TypingAnimation />
      ) : (
        <>
          <div style={{ display: "block", height: "530px", position: "relative", top: "-33px" }}>
            <AnimatedPolaroid
              label="Айнур"
              imageUrl={aynurbekPhoto}
              degree="-10"
              left="-170px"
              top="17px"
              photoTop="50px"
            />
            <AnimatedPolaroid
              label="Зиля"
              imageUrl={zilyousssPhoto}
              degree="10"
              left="165px"
              top="-455px"
              zilyousss
            />
          </div>
          <ZurText marginTop="70px" maxWidth="420px" text="Айнур + Зиля =" />
          <img src={yorek} />
          <ZurText marginTop="20px" maxWidth="420px" text="Узнали?" />
          <NormText
            marginTop="20px"
            maxWidth="420px"
            text="Время пронеслось незаметно и у этих двух милых деток скоро свадьба!"
          />
          <NormText marginTop="0px" maxWidth="420px" text="Да-да, мы сами в шоке!" />
          <AnimatedPolaroid
            label="Сердца полны любви"
            imageUrl={ikeuPhoto}
            degree="-10"
            left="0px"
            top="40px"
            fontSize="18px"
          />
          <ZurText marginTop="20px" maxWidth="520px" text="Дорогие и любимые" />
          <NormText
            marginTop="20px"
            maxWidth="420px"
            text="Наша свадьба без вас не будет такой счастливой, уютной и веселой!"
          />
          <NormText marginTop="0px" maxWidth="520px" text="Приглашаем отметить этот день вместе с нами!" />
          <DateWithRound top="57px" />
          <ZurText marginTop="160px" maxWidth="420px" text="Программа дня" />
          <Schedule />
          <ZurText marginTop="200px" maxWidth="520px" text="Место проведения" />
          <AnimatedPolaroid
            label="Банкетный зал «Болгар»"
            label2="в ресторане «Орловский дворец»"
            imageUrl={bolgarPhoto}
            degree="-1"
            left="0px"
            top="20px"
            fontSize="18px"
            notAnimated
          />
          <NormText
            marginTop="0px"
            maxWidth="320px"
            text="Мы ждем вас на берегу озера Сенеж в загородном комплексе The Sun Event"
          />
          <Button
            marginTop="20px"
            label="ПОСТРОИТЬ МАРШРУТ"
            link="https://yandex.ru/maps/org/orlovskiy_dvorets/107504788052?si=qukqvxb8mb5v0kefr2rvnxwjd0"
          />
          <ZurText marginTop="100px" maxWidth="520px" text="Дресс-код" />
          <NormText
            marginTop="10px"
            maxWidth="680px"
            text="Дорогие друзья! Мы будем счастливы видеть вас на нашей свадьбе в том, в чём вам удобно и приятно — мы не устанавливаем дресс-код. Единственная просьба: по возможности избегайте слишком ярких цветов, чтобы атмосфера праздника осталась нежной и уютной"
          />
          <ZurText marginTop="100px" maxWidth="520px" text="Пожелания" />
          <Sheshek left="0px" top="15px" marginBottom="20px" />
          <NormText
            marginTop="10px"
            maxWidth="680px"
            text="Сразу после свадьбы мы улетаем в свадебное путешествие, поэтому мы не успеем насладиться красотой подаренных цветов и будем рады, если вместо цветов вы решите подарить нам бутылочку хорошего вина"
          />
          <Sizik margin="40px" width="400px" />
          <NormText
            marginTop="10px"
            maxWidth="550px"
            text="Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи"
          />
          <GuestForm />
        </>
      )}
    </div>
  )
}

export default App
