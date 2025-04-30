import "./AnimatedPolaroid.css"

type AnimatedPolaroidType = {
  imageUrl: string
  left: string
  degree: string
  top: string
  label: string
  label2?: string
  zilyousss?: boolean
  photoTop?: string
  fontSize?: string
  notAnimated?: boolean
}

const AnimatedPolaroid = ({
  imageUrl,
  left,
  degree,
  top,
  label,
  label2 = "",
  zilyousss = false,
  photoTop = "40px",
  fontSize = "27px",
  notAnimated = false,
}: AnimatedPolaroidType) => {
  return (
    <div
      className={`polaroid-container ${notAnimated && "not-animated"}`}
      style={{ transform: `rotate(${degree}deg)`, position: "relative", top }}
    >
      <div className="polaroid-wrapper" style={{ left }}>
        <div className={`polaroid ${zilyousss && "polaroid-delayed"} ${notAnimated && "not-animated"}`}>
          <img
            className="polaroid-frame"
            src="https://static.tildacdn.com/tild3138-3063-4833-b031-633933633361/polaroid.png"
            alt="Полароидная рамка"
          />
          <img className="polaroid-photo" src={imageUrl} alt="Фото" style={{ top: photoTop }} />
          <div className={`labels ${label2 && "two"}`}>
            <div className="polaroid-label" style={{ fontSize }}>
              {label}
            </div>
            {label2 && (
              <div className="polaroid-label2" style={{ fontSize }}>
                {label2}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedPolaroid
