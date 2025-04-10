import "./AnimatedPolaroid.css"

type AnimatedPolaroidType = {
  imageUrl: string
  alt: string
  left: string
  degree: string
  top: string
  zilyousss?: boolean
}

const AnimatedPolaroid = ({ imageUrl, alt, left, degree, top, zilyousss = false }: AnimatedPolaroidType) => {
  return (
    <div className="anim-parent" style={{ transform: `rotate(${degree}deg)`, position: "relative", top }}>
      <div className="tn-atom__sbs-anim-wrapper" style={{ left }}>
        <div className={`tn-atom tn-atom-${zilyousss ? "zilyousss" : ""}`}>
          <img
            className="tn-atom__img"
            src="https://static.tildacdn.com/tild3138-3063-4833-b031-633933633361/polaroid.png"
            alt={alt}
          />
          <img className="tn-atom__img2" src={imageUrl} alt={alt} />
        </div>
      </div>
    </div>
  )
}

export default AnimatedPolaroid
