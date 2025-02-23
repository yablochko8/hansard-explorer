import { useState } from 'react'
import './App.css'
import { getSitting } from './serverCalls'
import { DatePicker } from './components/DatePicker'



function App() {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date('2002-04-16'))
  const [sitting, setSitting] = useState<any>(null)

  const handleSubmit = () => {
    console.log("submitted!")
    if (selectedDate) {
      getSitting(selectedDate).then((sitting) => {
        setSitting(sitting);
      });
    }
    else {
      console.log("no date selected")
    }
  }

  console.log("selectedDate", selectedDate)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <button onClick={handleSubmit}>Submit</button>

      {sitting && (
        <div>
          Sitting found with length {sitting.length}
        </div>
      )}
    </div>
  )
}

export default App
