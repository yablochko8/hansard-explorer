import { useState } from 'react'
import './App.css'
import { getSitting } from './serverCalls'
import { DatePicker } from './components/DatePicker'
import { JsonViewer } from './components/JsonViewer'



function App() {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date('2002-04-16'))

  const [sittingDate, setSittingDate] = useState<Date | null>(null)

  const [sitting, setSitting] = useState<any>(null)

  const handleSubmit = () => {
    console.log("submitted!")
    if (selectedDate) {
      getSitting(selectedDate).then((sitting) => {
        setSitting(sitting);
        setSittingDate(selectedDate);
      });
    }
    else {
      console.log("no date selected")
    }
  }

  console.log("selectedDate", selectedDate)
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen p-4">
      <DatePicker selectedDate={selectedDate} onDateChange={setSelectedDate} />
      <button onClick={handleSubmit}>Fetch</button>

      {sitting && (
        <>
          <div>
            Sitting (for {sittingDate?.toLocaleDateString()}) found with length {sitting.length}
          </div>
          <JsonViewer data={sitting} />
        </>
      )}
      {sittingDate && !sitting && (
        <div>
          No sitting found for {sittingDate?.toLocaleDateString()}
        </div>
      )}
    </div>
  )
}

export default App
