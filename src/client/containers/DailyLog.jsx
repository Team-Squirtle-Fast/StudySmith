import React from "react";

const DailyLog = (props) => {
    fetch('/api/log/:')
      .then((res) => res.json())
      .then((res) => {

      })
    return(
        <div>
            Daily Log;
        </div>
    )
}

export default DailyLog;