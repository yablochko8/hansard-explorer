import { useState } from 'react'
import './App.css'
import { getSitting } from './serverCalls'
import { DatePicker } from './components/DatePicker'
import { JsonViewer } from './components/JsonViewer'



function App() {

  const [selectedDate, setSelectedDate] = useState<Date>(new Date('2002-04-16'))

  const [sittingDate, setSittingDate] = useState<Date | null>(null)

  const [sitting, setSitting] = useState<any>(null)

  const handleSubmit = (date?: Date) => {

    const submissionDate = date || selectedDate;
    console.log("submitted!")
    if (submissionDate) {
      getSitting(submissionDate).then((sitting) => {
        setSitting(sitting);
        setSittingDate(submissionDate);
      });
    }
    else {
      console.log("no date selected")
    }
  }

  const changeDateAndSubmit = (date: Date) => {
    setSelectedDate(date);
    handleSubmit(date);
  }

  console.log("selectedDate", selectedDate)
  return (
    <div className="flex flex-col items-center justify-start h-screen w-screen p-4">
      <DatePicker selectedDate={selectedDate} onDateChange={changeDateAndSubmit} />
      {/* <button onClick={handleSubmit}>Fetch</button> */}

      {sitting && (
        <>
          <div>
            API response for {sittingDate?.toLocaleDateString()}
          </div>
          <JsonViewer data={sitting} />
        </>
      )}
      {sittingDate && !sitting && (
        <div>
          No response for {sittingDate?.toLocaleDateString()}
        </div>
      )}
    </div>
  )
}

export default App
