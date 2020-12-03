const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});



fetchCoordsByIP('72.141.45.113', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  let longLat = {};
  longLat.latitude = coords.latitude;
  longLat.longitude = coords.longitude;
  console.log(longLat);
});

fetchISSFlyOverTimes({ latitude: 43.4595, longitude: -80.485 }, (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  if (!error) {
    console.log(coords);
  }
});

