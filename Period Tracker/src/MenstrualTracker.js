import './Me.css';
import NextCycle from './NextCycle';
import React, { useState } from 'react';

const MenstrualTracker = () => {
  const [startDate, setStartDate] = useState('');
  const [cycleLength, setCycleLength] = useState('');
  const [endDate, setEndDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [cycleRecords, setCycleRecords] = useState([]);
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleCycleLengthChange = (e) => {
    setCycleLength(e.target.value);
    const newEndDate = new Date(startDate);
    newEndDate.setDate(newEndDate.getDate() + parseInt(e.target.value));
    setEndDate(newEndDate.toISOString().split('T')[0]);
  };

  const handleSymptomsChange = (e) => {
    setSymptoms(e.target.value);
  };
  const handleRecordCycle = () => {
    if (startDate && cycleLength && endDate && symptoms) {
      const newRecord = {
        startDate: startDate,
        cycleLength: cycleLength,
        endDate: endDate,
        symptoms: symptoms
      };

      setCycleRecords([...cycleRecords, newRecord]);
      setStartDate('');
      setCycleLength('');
      setEndDate('');
      setSymptoms('');
    } else {
      alert('Please fill in all fields.');
    }
  };



  return (
    <div className="container">
      <div className="menstrual-cycle-tracker">
        <h2>Menstrual Cycle Tracker</h2>
        <div className="input-group">
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={handleStartDateChange} />
        </div>
        <div className="input-group">
          <label>Cycle Length (in days):</label>
          <input type="number" value={cycleLength} onChange={handleCycleLengthChange} />
        </div>
        <div className="input-group">
          <label>End Date:</label>
          <input type="text" value={endDate} readOnly />
        </div>
        <div className="input-group">
          <label>Symptoms:</label>
        </div>
        <textarea value={symptoms} onChange={handleSymptomsChange} />
        <div className="button-container">
          <button onClick={handleRecordCycle}>Record Cycle</button></div>

        <h3>Cycle Records:</h3>
        <ul>
          {cycleRecords.map((record, index) => (
            <li key={index}>
              <p>Start Date: {record.startDate}</p>
              <p>Cycle Length: {record.cycleLength} days</p>
              <p>End Date: {record.endDate}</p>
              <p>Symptoms: {record.symptoms}</p>
            </li>
          ))}

        </ul>
      </div>
    </div>

  );
}


export default MenstrualTracker;