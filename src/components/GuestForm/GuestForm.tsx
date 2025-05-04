import { motion, AnimatePresence } from "framer-motion"
import { ChangeEventHandler, FC, FormEventHandler, useState } from "react"
import Button from "../Button/Button" // Подключи свою кнопку
import "./GuestForm.css"
import NormText from "../NormText/NormText"
import ZurText from "../ZurText/ZurText"

type FormData = {
  name: string
  attendance: string
  alcohol: string[]
}

const GuestForm: FC<{
  extraClassName?: string
  xyAnimation: number
  duration: number
}> = ({ xyAnimation, duration }) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    attendance: "",
    alcohol: [],
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    try {
      const url =
        "https://script.google.com/macros/s/AKfycbzJXbW9g9L4zvklStwxGigCNoiAMiwTLPLIFJ6-U6BJ8l1HWLqyDkX5zYsFTANizguk/exec"
      const formData = new FormData(e.currentTarget)
      await fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      })
      setTimeout(() => setIsSubmitted(true)) // Скрываем форму через 2 секунды
    } catch (error) {
      setTimeout(() => setIsSubmitted(true))
      console.error("Ошибка:", error)
    }
  }
  console.log({ isSubmitted })
  return (
    <AnimatePresence>
      <motion.div
        key={isSubmitted ? "success" : "form"} // Уникальный ключ для анимации
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.5 }}
        className={`guest-form ${isSubmitted ? "" : "visible"}`}
      >
        {isSubmitted ? (
          <div className="success">
            <ZurText marginTop="100px" maxWidth="560px" text="Форма успешно отправлена!" />
            <NormText
              marginTop="10px"
              maxWidth="421px"
              text="Спасибо за ваши ответы, это очень поможет нам в организации!"
            />
          </div>
        ) : (
          <form className="guest-form" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, x: -xyAnimation }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <ZurText marginTop="100px" maxWidth="560px" text="Анкета гостя" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: xyAnimation }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration }}
              viewport={{ once: true, amount: 0.9 }}
            >
              <NormText
                marginTop="10px"
                maxWidth="421px"
                text="Просим вас ответить на несколько вопросов до 20 июля, это поможет нам в организации торжества"
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
                        name="alcohol"
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
                    type="submit"
                    label="Отправить"
                    link=""
                    marginTop="30px"
                    width="130px"
                    fontSize="16px"
                    height="45px"
                  />
                </div>
              </div>
            </motion.div>
          </form>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default GuestForm
