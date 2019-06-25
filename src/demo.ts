// Car (Basic Typing)
const model: string = 'Jeep Wrangler';
const doors: number = 4;
const canOffroad: boolean = true;

// Cars (Array Typing)
let cars: string[];
cars = ['Jeep Wrangler', 'Toyota FJ'];
cars.push(true);

// Can Car Offroad (Function Typing)
const canCarOffroad = (model: string) => {
  switch(model) {
    case 'Jeep Wranger':
      return true;
    case 'Toyota FJ':
      return false;
    default:
      return false;
  }
}

canCarOffroad('Jeep Wrangler'); // return true
canCarOffroad('Toyota FJ'); // return false
canCarOffroad(undefined); // TS error

// Car (Interface)
interface Car {
  model: string;
  doors: number;
  canOffroad: boolean;
}

const Car: Car = { model: 'Jeep Wrangler', doors: 4, canOffroad: true };
const FriendsCar: Car = { model: 'Toyota FJ', doors: false, canOffroad: false };

export default {
  model, doors, canOffroad, cars, FriendsCar
};

