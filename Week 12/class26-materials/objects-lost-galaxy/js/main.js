//Create a pizza object that has four properties and three methods
let pizza = {}

//properties
pizza.size = 'large'
pizza.toppings = ['spinach','pepperoni','onion','ham','garlic']
pizza.crust = 'stuffed'
pizza.sauce = 'heavy'

//methods
pizza.estimatedDeliveryTime = function(){
    console.log('Calculating...')
}

pizza.burnMouth = function(){
    console.log('HOT!')
}

pizza.frisbee = function(){
    console.log('YEET!')
}

//with literal notation - to make a new pizza, we have to copy and paste.

let pizzaTwo = {}

//properties
pizza.size = 'small'
pizza.toppings = ['spinach','pepperoni','artichoke']
pizza.crust = 'thin'
pizza.sauce = 'normal'

//methods
pizza.estimatedDeliveryTime = function(){
    console.log('Calculating...')
}

pizza.burnMouth = function(){
    console.log('HOT!')
}

pizza.frisbee = function(){
    console.log('YEET!')
}