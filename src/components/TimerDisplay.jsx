import React from 'react';
function TimerDisplay({timeLeft}){
        const minutes=Math.floor(timeLeft/60);
        const seconds=timeLeft%60;

        const formatTime=(time)=>{
            return time.toString().padStart(1,"0");

        }

        return (
            <div className="time-display">
                <div className="time">
                    {formatTime(minutes)}:{formatTime(seconds)}
                </div>
            </div>
        );
}
export default TimerDisplay;