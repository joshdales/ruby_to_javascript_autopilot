function getNewCar() {
  var newCar = {'city': 'Toronto',
  'passengers': 0,
  'gas':100};
  return newCar;
}

function addCar(cars, newCar) {
  cars.push(newCar);
  return 'Adding new car to fleet. Fleet size is now ' + cars.length;
}

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 10;
  return 'Picked up passenger. Car now has ' + car.passengers + ' passengers';
}

function getDestination(car) {
  if (car.city === 'Toronto') {
    return 'Mississauga';
  } else if (car.city === 'Mississauga') {
    return 'London';
  } else if (car.city === 'London'){
    return 'Toronto';
  }
}

function fillUpGas(car) {
  var oldGas = car.gas;
  car.gas = 100;
  return 'Filled up to ' + car.gas + ' on gas from ' + oldGas + '.';
}

function GetGasDisplay(gasAmount) {
  return gasAmount + '%';
}

function drive(car, cityDistance) {
  if (car.gas < cityDistance) {
    console.log(fillUpGas(car));
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  return 'Drove to ' + car.city + '. Remaining gas: ' + GetGasDisplay(car.gas) + '.'
}

function dropOffPassengers(car) {
  var previousPasserngers = car.passengers;
  car.passengers = 0;
  return 'Dropped off ' + previousPasserngers + ' passengers.'
}

function act(car) {
  distanceBetweenCities = 50

  if (car.gas < 20) {
    return fillUpGas(car);
  } else if (car.passengers < 3) {
    return pickUpPassenger(car);
  } else {
    if (car.gas < distanceBetweenCities) {
      return fillUpGas(car);
    }
    var droveTo = drive(car, distanceBetweenCities);
    var passengersDropped = dropOffPassengers(car);
    return droveTo + passengersDropped
  }
}

function commandFleet(cars) {
  cars.forEach(function (car, i) {
    var action = act(car);
    console.log('Car ' + (i+1) + ': ' + action);
  })
  console.log('---');
}

function addOneCarPerDay(cars, numDays) {
  for (var i = 0; i <= numDays; i++) {
    var newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars)
  }
}

var cars = [];
addOneCarPerDay(cars, 10);
