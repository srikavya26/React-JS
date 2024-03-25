import './Mes.css';

import React, { useState } from 'react';

const NextCycle = () => {
    const [startDate, setStartDate] = useState('');
    const [predictedDates, setPredictedDates] = useState([]);

    const handleStartDateChange = (e) => {
        setStartDate(e.target.value);
        calculatePredictedDates(e.target.value);
    };

    const calculatePredictedDates = (startDate) => {
        const cycleLengthOptions = [28, 32];
        const predictedDatesArray = cycleLengthOptions.map((cycleLength) => {
            const predictedDate = new Date(startDate);
            predictedDate.setDate(predictedDate.getDate() + cycleLength);
            return predictedDate.toISOString().split('T')[0];
        });
        setPredictedDates(predictedDatesArray);
    };

    return (

        <div className="container">
            <div className="menstrual-cycle-tracker">
                <h2>Menstrual Cycle Predictor</h2>
                <div className="input-group">
                    <label>Start Date:</label>
                    <input type="date" value={startDate} onChange={handleStartDateChange} />
                </div>
                <h3>Your Next Cycle Dates Could be from these dates:</h3>
                <ul>
                    {predictedDates.map((date, index) => (
                        <li key={index}>{date}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NextCycle;