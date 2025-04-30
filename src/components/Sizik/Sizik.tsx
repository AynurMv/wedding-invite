import { FC } from "react"
import "./Sizik.css"

const Sizik: FC<{ margin: string; width: string }> = ({ margin, width }) => (
  <img
    src="https://static.tildacdn.com/tild3861-3961-4233-b635-376534323733/Clip_path_group_7.svg"
    style={{ margin, width }}
  />
)

export default Sizik
