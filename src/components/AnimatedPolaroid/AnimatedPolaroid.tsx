import "./AnimatedPolaroid.scss"

type AnimatedPolaroidType = {
  imageUrl: string
  label: string
  label2?: string
  className?: string
}

const AnimatedPolaroid = ({ imageUrl, label, label2 = "", className = "" }: AnimatedPolaroidType) => {
  return (
    <div className={`polaroid-container ${className}`}>
      <div className="polaroid-wrapper">
        <div className="polaroid">
          <img
            className="polaroid-frame"
            src="https://static.tildacdn.com/tild3138-3063-4833-b031-633933633361/polaroid.png"
            alt="Полароидная рамка"
          />
          <img className="polaroid-photo" src={imageUrl} alt="Фото" />
          <div className={`labels ${label2 ? "two" : ""}`}>
            <div className="polaroid-label">{label}</div>
            {label2 && <div className="polaroid-label polaroid-label2">{label2}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedPolaroid
