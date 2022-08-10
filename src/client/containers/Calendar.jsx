import React from "react";

import Calendar from 'react-calendar';

import '../../styles/Calendar.scss';

//import 'react-calendar/dist/Calendar.css';

function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of dates to add class to
    return 'day-title'
  }
}

const CalendarPage = (props) => {
    return(
        <div>
            <Calendar tileClassName={tileClassName}/>
        </div>
    )
}

export default CalendarPage;