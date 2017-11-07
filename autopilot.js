function getNewCar() {
  var newCar = {'city': 'Toronto',
  'passengers': 0,
  'gas':100};
  return newCar;
}

function addCar(cars, newCar) {
  cars.push(newCar);
  console.log('Adding new car to fleet. Fleet size is now ' + cars.length);
}

function pickUpPassenger(car) {
  car.passengers += 1;
  car.gas -= 10;
  console.log('Picked up passenger. Car now has ' + car.passengers + ' passengers');
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
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= cityDistance;
  return 'Drove to ' + car.city + '. Remaining gas: ' + GetGasDisplay(car.gas) + '.'
}
var car = getNewCar();
console.log(drive(car, 80));
