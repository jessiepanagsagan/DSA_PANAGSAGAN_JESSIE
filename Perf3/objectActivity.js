// Create an object called car with the properties type, model, and color.
let car = {
    type: "Luxury", // The type of the car is set to "Luxury".
    model: "Bentley Continental GT", // the model of the car is Bentley Continental GT
    color: "Silver" // the color of the car is Silver
};
  
  
  console.log(typeof car); 
  // Output: object
  
  car.type = "Luxury";
  console.log(car);  
  // Output: { type: 'Luxury', model: 'Bentley Continental GT', color: 'Silver' }
  
  car.wheels = 4;
  console.log(car);  
  // Output: { type: 'Luxury', model: 'Bentley Continental GT', color: 'Silver', wheels: 4 }
  