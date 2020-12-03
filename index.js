// const {
//   fetchMyIP,
//   fetchCoordsByIP,
//   fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('72.141.45.113', (error, coords) => {
//   if (error) {
//         console.log("It didn't work!" , error);
//         return;
//       }
//     console.log(coords);
//   });

// fetchISSFlyOverTimes({ latitude: 43.4595, longitude: -80.485 }, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   if (!error) {
//     console.log(coords);
//   }
// });

const { nextISSTimesForMyLocation } = require('./iss');

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });

const printPassTimes = function(passTimes) {
  passTimes.forEach(overhead => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(overhead.risetime);
    const duration = overhead.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});