import { motion } from "framer-motion"
import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react"
import Button from "../Button/Button" // Подключи свою кнопку
import "./GuestForm.css"
import NormText from "../NormText/NormText"
import ZurText from "../ZurText"

type FormData = {
  name: string
  attendance: string
  alcohol: string[]
}

const GuestForm: FC<{ xyAnimation: number; duration: number }> = ({ xyAnimation, duration }) => {
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

  const handleSubmit: MouseEventHandler<HTMLAnchorElement> = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbzGSraT8WlixCndF_Gc2ZMLD4yqkWzmfZ9ofTpTC1sYumulLUpP92IAgK9tIfj82hs/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      )
      console.log({ form })
      if (res.ok) {
        alert("Форма успешно отправлена!")
      } else {
        alert("Ошибка при отправке")
      }
    } catch (error) {
      console.error("Ошибка:", error)
    }
  }

  return (
    <div className="guest-form">
      <motion.div
        initial={{ opacity: 0, x: -xyAnimation }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration }}
        viewport={{ once: true, amount: 1 }}
      >
        <ZurText marginTop="100px" maxWidth="560px" text="Анкета гостя" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: xyAnimation }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration }}
        viewport={{ once: true, amount: 1 }}
      >
        <NormText
          marginTop="10px"
          maxWidth="421px"
          text="Просим вас ответить на несколько вопросов до 20 июля, это поможет нам в организации
        торжества"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration }}
        viewport={{ once: true, amount: 0.3 }}
      >
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
              marginTop="30px"
              onClick={handleSubmit}
              width="100px"
              fontSize="16px"
              height="45px"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default GuestForm
