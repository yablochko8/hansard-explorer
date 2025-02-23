import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

// For docs see https://daypicker.dev
type DatePickerProps = {
    selectedDate: Date;
    onDateChange: (date: Date) => void;
}

export const DatePicker = ({ selectedDate, onDateChange }: DatePickerProps) => {
    const startMonth = new Date(1803, 0)
    const endMonth = new Date(2005, 2)

    return (
        <>
            <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={(date: Date | undefined) => date && onDateChange(date)}
                startMonth={startMonth}
                endMonth={endMonth}
                required={false}
            />
        </>
    );
}