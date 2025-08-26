import React from 'react';
function ControlButtons({isActive,startTimer,stopTimer,resetTimer}){
    return(<div className="control-buttons">
        {!isActive ?(
            <button className='start-btn' onClick={startTimer}>
                Start
            </button>
        ):(
            <button className='stop-btn' onClick={stopTimer}>
                Stop
            </button>
        )}
          <button className='reset-btn' onClick={resetTimer}>
                Reset
            </button>
    </div>
    );
}
export default ControlButtons;
