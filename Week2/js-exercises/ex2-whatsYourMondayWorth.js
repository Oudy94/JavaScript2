"use strict";

function dayWorth(tasks, hourlyRate) {

  const durations = tasks.map(workDuration => (workDuration.duration)); //Select duration time only
  const hourRating = durations.map(workRating => (workRating/60 * hourlyRate)); //Multiply each duration by a per - hour rate
  const totalPrice = hourRating.reduce((total, mondayDuration) => total + mondayDuration, 0).toFixed(2); //sum it all up.

  return `€${totalPrice}`
  
}

const mondayTasks = [{
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25));
console.log(dayWorth(mondayTasks, 13.37));
