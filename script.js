"use strict"
// ============================ exercise 1 ===============================
/* const obj = {
  num: 10,
  getNumber: function() { return this.num}
}
const bounded = obj.getNumber.bind(obj);

function multiply(arg1, arg2) {
  if (typeof arg1 === "number" && typeof arg2 === "number" && arg1 >= 0 && arg2 >= 0) {
    return arg1 * arg2;
  } else {
    throw new Error("Ошибка");
  }
}

function multiplyBy10(arg) {
  const num = bounded();
  if (typeof arg === "number" && arg >= 0) {
    return num * arg;
  } else {
    throw new Error("Ошибка");
  }
};

multiplyBy10(10); */

//============================ exercise 2 =======================================

class Car {
  #brand
  #model
  #yearOfManufacturing
  #maxSpeed
  #maxFuelVolume
  #fuelConsumption
  #currentFuelVolume = 0
  #isStarted = false
  #mileage = 0

  constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
    if (brand.length < 1 || brand.length > 50 || model.length < 1 || model.length > 50) {
      throw new Error("Некорректное название");
    } else if (yearOfManufacturing < 1900 || yearOfManufacturing > 2021) {
      throw new Error("Некорректный год");
    } else if (maxSpeed < 100 || maxSpeed > 300 || maxFuelVolume < 10 || maxFuelVolume > 50 || typeof fuelConsumption === 'string') {
      throw new Error("Некорректное число")
    }
    this.#brand = brand
    this.#model = model
    this.#yearOfManufacturing = yearOfManufacturing
    this.#maxSpeed = maxSpeed
    this.#maxFuelVolume = maxFuelVolume
    this.#fuelConsumption = fuelConsumption
  }
  get brand() {
    return this.#brand;
  }
  set brand(value) {
    if (value.length < 1 || value.length > 50) {
      throw new Error('Некорректное название ')
    }
    this.#brand = value;
  }
  get model() {
    return this.#model;
  }
  set model(value) {
    if (value.length < 1 || value.length > 50) {
      throw new Error('Некорректное название ')
    }
    this.#model = value;
  }
  get yearOfManufacturing() {
    return this.#yearOfManufacturing;
  }
  set yearOfManufacturing(value) {
    if (value < 1900 || value > 2021) {
      throw new Error("Некорректный год");
    }
    this.#yearOfManufacturing = value;
  }
  get maxSpeed() {
    return this.#maxSpeed;
  }
  set maxSpeed(value) {
    if (value < 100 || value > 300) {
      throw new Error("Некорректное число")
    }
    this.#maxSpeed = value;
  }
  get maxFuelVolume() {
    return this.#maxFuelVolume;
  }
  set maxFuelVolume(value) {
    if (value < 10 || value > 50) {
      throw new Error("Некорректное число");
    }
    this.#maxFuelVolume = value;
  }
  get fuelConsumption() {
    return this.#fuelConsumption;
  }
  set fuelConsumption(value) {
    if (typeof value === 'string') {
      throw new Error("Некорректное число")
    }
    this.#fuelConsumption = value;
  }
  get currentFuelVolume() {
    return this.#currentFuelVolume;
  }
  get isStarted() {
    return this.#isStarted;
  }
  get mileage() {
    return this.#mileage;
  }

  start() {
    if (this.#isStarted) {
      throw new Error('Машина уже заведена');
    }
    this.#isStarted = true;
  }

  shutDownEngine() {
    if (!this.#isStarted) {
      throw new Error('Машина ещё не заведена');
    }
    this.#isStarted = false;
  }

  fillUpGasTank(value) {
    if (typeof value !== 'number' || value <= 0) {
      throw new Error('Неверное количество топлива для заправки');
    } else if (value + this.#currentFuelVolume > 50) {
      throw new Error('Топливный бак переполнен');
    } else {
      this.#currentFuelVolume += value;
    }
  }
  drive(speed, hour) {
    if (typeof speed !== 'number' || speed <= 0) {
      throw new Error('Неверная скорость');
    } else if (typeof hour !== 'number' || hour <= 0) {
      throw new Error('Неверное количество часов');
    } else if (speed > this.#maxSpeed) {
      throw new Error('Машина не может ехать так быстро');
    } else if (!this.#isStarted) {
      throw new Error('Машина должна быть заведена, чтобы ехать');
    } else if ((this.#currentFuelVolume - (this.#fuelConsumption / 100) * (speed * hour)) <= 0) {
      throw new Error('Недостаточно топлива');
    }
    const spentFuel = (this.#fuelConsumption / 100) * (speed * hour);
    this.#currentFuelVolume -= spentFuel;
    this.#mileage = speed * hour;
  }
}