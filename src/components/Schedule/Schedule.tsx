import "./Schedule.css"
const Schedule = () => {
  const events = [
    {
      time: "15:30",
      title: "Welcome",
      description: "Время пролетит незаметно за играми и новыми знакомствами",
    },
    {
      time: "16:00",
      title: "Церемония",
      description: "Будем очень рады разделить этот важный момент с вами",
    },
    {
      time: "17:00",
      title: "Банкет",
      description: "Насладитесь этим вечером, будет много любви, танцев и веселья",
    },
  ]

  return (
    <div className="schedule">
      {events.map((event, idx) => (
        <div key={idx} className="event-row">
          <div className="time">{event.time}</div>
          <img
            src="https://static.tildacdn.com/tild6339-6536-4637-b732-323462356363/Group_93_1.svg"
            alt="Звезда"
            className="icon"
          />
          <div className="event-info">
            <div className="event-title">{event.title}</div>
            <div className="event-description">{event.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Schedule
