import React from 'react';
function TimeSetter({minutes,seconds,setMinutes,setSeconds,disabled}){
    return(
        <div className="time-setter">
        <h3>Set Time</h3>
        <div className="inputs">
            <div className="input-group">
                <label>Minutes:</label>
                <input
                type="number"
                min="0"
                max="59"
                value={minutes}
                onChange={(e)=>setMinutes(Number(e.target.value))}/>
            </div>
             <div className="input-group">
                <label>Seconds:</label>
                <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e)=>setSeconds(Number(e.target.value))}/>
            </div>
        </div>
    </div>
    );
}
export default TimeSetter;