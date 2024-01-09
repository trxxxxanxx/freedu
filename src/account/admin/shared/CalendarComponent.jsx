import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import "../../../index.css";

const CalendarComponent = () => {
  return (
    <div className="customDatePickerWidth">
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {/* Adjust max-width based on your design requirements */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar wrapperClassName="datepicker" />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default CalendarComponent;
