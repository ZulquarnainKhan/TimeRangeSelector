import React, { useState } from 'react';

const TimeRangeSelector = () => {
    const [startTime, setStartTime] = useState(5);
    const [endTime, setEndTime] = useState(22);
    const excludedTime = ["13-14", "17"];

    const handleStartTimeChange = (e) => {
        const newStartTime = parseInt(e.target.value);
        if (newStartTime <= endTime) {
            setStartTime(newStartTime);
            console.log({
                selectedTimeRange: [`${newStartTime}`, `${endTime}`],
                excludedTime: excludedTime,
            });
        }
    };

    const handleEndTimeChange = (e) => {
        const newEndTime = parseInt(e.target.value);
        if (newEndTime >= startTime) {
            setEndTime(newEndTime);
            console.log({
                selectedTimeRange: [`${startTime}`, `${newEndTime}`],
                excludedTime: excludedTime,
            });
        }
    };

    return (
        <div>
            <div style={{ border: '1px solid silver', backdropFilter:'blur(5px)',boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',padding: '4rem 3rem', borderRadius:'10px',display: 'flex', gap: '10px',flexDirection:'column' }}>
                <div style={{display:'flex', gap:'1rem', marginBottom:'2rem'}}>

                    <label style={{fontWeight:'700', display:'flex',gap:'8px'}}>
                        Start Time:
                        <input
                            type="number"
                            min="0"
                            max="24"
                            value={startTime}
                            onChange={handleStartTimeChange}
                            style={{borderRadius:'5px'}}
                            
                        />
                    </label>
                    <label style={{fontWeight:'700', display:'flex',gap:'8px'}}>
                        End Time:
                        <input
                            type="number"
                            min="0"
                            max="24"
                            value={endTime}
                            onChange={handleEndTimeChange}
                            style={{borderRadius:'5px'}}
                        />
                    </label>
                </div>
                <div>
                    Selected Time Range: {startTime}:00 - {endTime}:00
                </div>
                <div>Excluded Time: {excludedTime.join(', ')}</div>
            </div>
        </div>
    );
};

export default TimeRangeSelector;