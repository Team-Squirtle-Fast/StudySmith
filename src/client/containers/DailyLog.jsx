import React from "react";
import { useDispatch } from "react-redux"

import { dailyLog } from "../actions/actions";

/*
res is going to be:
{
    title
    log_body
    log_date
}
*/


const DailyLog = (props) => {
    // const dispatch = useDispatch();

    // dispatch()
    // fetch(`api/log/${username}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //       for (let key in res) {

    //       }
    //   })
    return(
        <div>
            Daily Log;
        </div>
    )
}

export default DailyLog;