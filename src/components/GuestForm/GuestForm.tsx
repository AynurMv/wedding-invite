import { ChangeEventHandler, MouseEventHandler, useState } from "react"
import Button from "../Button/Button" // Подключи свою кнопку
import "./GuestForm.css"
import NormText from "../NormText/NormText"
import ZurText from "../ZurText"

type FormData = {
  name: string
  attendance: string
  alcohol: string[]
}

const GuestForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    attendance: "",
    alcohol: [],
  })

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, checked } = e.target
    setForm((prev) => {
      const alcohol = checked ? [...prev.alcohol, value] : prev.alcohol.filter((item) => item !== value)
      return { ...prev, alcohol }
    })
  }

  const handleSubmit: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault()
    console.log("Данные отправлены:", form)
  }

  return (
    <div className="guest-form">
      <ZurText marginTop="100px" maxWidth="560px" text="Анкета гостя" />
      <NormText
        marginTop="10px"
        maxWidth="421px"
        text="Просим вас ответить на несколько вопросов до 20 июля, это поможет нам в организации
        торжества"
      />

      <div className="guest-form__form">
        <div className="guest-form__group">
          <label className="guest-form__label">Ваше имя и фамилия</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="guest-form__input"
            required
          />
        </div>
        <div className="guest-form__group">
          <div className="guest-form__legend">Сможете ли вы присутствовать?</div>
          <label className="guest-form__radio">
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={form.attendance === "yes"}
              onChange={handleInputChange}
            />
            Смогу / сможем присутствовать
          </label>
          <label className="guest-form__radio">
            <input
              type="radio"
              name="attendance"
              value="maybe"
              checked={form.attendance === "maybe"}
              onChange={handleInputChange}
            />
            Затрудняюсь ответить, сообщу позже
          </label>
          <label className="guest-form__radio">
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={form.attendance === "no"}
              onChange={handleInputChange}
            />
            Не смогу прийти
          </label>
        </div>

        <div className="guest-form__group">
          <div className="guest-form__legend">Какой алкоголь предпочитаете?</div>
          <p className="guest-form__hint">Можно выбрать несколько вариантов</p>
          {["Игристое", "Вино белое", "Вино красное", "Виски", "Не пью алкоголь"].map((item) => (
            <label key={item} className="guest-form__checkbox">
              <input
                type="checkbox"
                value={item}
                checked={form.alcohol.includes(item)}
                onChange={handleCheckboxChange}
              />
              {item}
            </label>
          ))}
        </div>

        <div className="guest-form__submit">
          <Button
            label="Отправить"
            link=""
            marginTop="10px"
            onClick={handleSubmit}
            width="130px"
            fontSize="16px"
            height="45px"
          />
        </div>
      </div>
    </div>
  )
}

export default GuestForm
