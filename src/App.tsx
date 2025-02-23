import { useState } from 'react'
import './App.css'
import { getSitting } from './serverCalls'



function App() {
  const [day, setDay] = useState(16)
  const [month, setMonth] = useState(4)
  const [year, setYear] = useState(2002)

  const [sitting, setSitting] = useState(null)

  const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDay(parseInt(event.target.value));
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    getSitting({ year, month, day }).then((sitting) => {
      setSitting(sitting);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input type="number" value={day} onChange={handleDayChange} />
      <input type="number" value={month} onChange={handleMonthChange} />
      <input type="number" value={year} onChange={handleYearChange} />
      <button onClick={handleSubmit}>Submit</button>

      {sitting && (
        <div>
          {Object.keys(sitting).map((key) => (
            <li key={key}>
              {key}: {JSON.stringify(sitting[key])}
            </li>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
