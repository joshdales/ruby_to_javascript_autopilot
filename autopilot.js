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
  car['passengers'] =+ 1;
  car['gas'] -= 10;
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

function GetGasDisplay(gas_amount) {
  return car.gas + '%';
}

car = getNewCar()
console.log(GetGasDisplay(car));
