import React, { useState } from 'react';
import monthInfo from './monthInfo.js';

const App = () => {
  const [textBoxes, setTextBoxes] = useState([{ id: 1, month:monthInfo[month - 1].name, date: startDate }]);

  const fixCountAscending = (iArray) => {
    console.log(month)
    console.log(iArray)
    console.log(monthInfo[(month - 1)].numDays)
    if (iArray > monthInfo[(month - 1)].numDays) {
      month = month + 1;
      if (month === 13){
        console.log('DECEMBER')
        month = 1;
      }
      currentDate = 1;
    }
  }
  const fixCountDescending = (iArray) => {
    console.log(month)
    console.log(iArray)
    console.log(monthInfo[(month - 1)].numDays)
    if (iArray < 1) {
      month = month - 1;
      if (month === 0){
        console.log('JANUARY')
        month = 12;
      }
      currentDate = monthInfo[(month - 1)].numDays;
    }
  }

  const addTextBox = () => {
    currentDate = Number(currentDate) + Number(1)
    fixCountAscending(currentDate)
    setTextBoxes([...textBoxes, { id: textBoxes.length + 1, month:monthInfo[Number(month) - Number(1)].name, date: currentDate }]);
  };
  
  const removeTextBox = () => {
    if(textBoxes.length != 1){
      currentDate = Number(currentDate) - Number(1)
      fixCountDescending(currentDate)
      setTextBoxes(textBoxes.slice(0,-1));
    }
  };

  return (
    <div className='primary'>
      <h1>Schedule Planner</h1><br></br>
	  <input type='text' placeholder='Trip Name' className='tripTitle'/>
	  <p><button className='buttonSub'onClick={removeTextBox}>-</button><button className='buttonAdd'onClick={addTextBox}>+</button></p>
      <ul className='calendar'>
        {textBoxes.map((textBox) => (
          <ul>
			<table className='cBox'><textarea className='dateBox'
              type="text"
              //onChange={(event) => handleChange(textBox.id, event)}
            /><br></br>
			<p>{textBox.month + ' ' + textBox.date}</p></table>
          </ul>
        ))}
      </ul>
    </div>
  );
};

var month = Number(window.prompt('Please enter a month (1-12)'))
while(month < 1 || month > 12){
  var month = Number(window.prompt('Please enter a valid month (1-12)'))
}

var startDate = Number(window.prompt('Please enter a start date'))
while(startDate < 1 || startDate > monthInfo[(month - 1)].numDays){
	var startDate = Number(window.prompt('Please enter a valid start date'))
}
var currentDate = startDate

export default App;