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
console.log(getDestination(getNewCar()))
