import aynurbekPhoto from "./assets/Aynurbek2.png"
import zilyousssPhoto from "./assets/zilechka.jpg"
import AnimatedPolaroid from "./components/AnimatedPolaroid"
import "./App.css"

function App() {
  return (
    <div className="app">
      <h1>Мы женимся нахуй</h1>
      <div style={{ position: "relative" }}>
        <AnimatedPolaroid
          imageUrl={aynurbekPhoto}
          degree="-10"
          left="-180px"
          top="17px"
          alt="Полароидное фото"
        />
        <AnimatedPolaroid
          imageUrl={zilyousssPhoto}
          degree="10"
          left="180px"
          top="87px"
          alt="Полароидное фото"
        />
      </div>

      {/* Можно добавить и другие компоненты с другими параметрами */}
    </div>
  )
}

export default App
