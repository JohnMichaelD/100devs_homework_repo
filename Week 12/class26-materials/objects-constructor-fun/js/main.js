//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size,toppings,crust,sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce

    this.estimatedDeliveryTime = function(){
        console.log('Calculating')
    }

    this.burnMouth = function(){
        console.log('oiOIWHEPFIHEFJOis');
    }

    this.frisbee = function(){
        console.log('YEEEET')
    }
}

let pizza = new PizzaMachine('Large',['spinach','garlic'],'Deep Dish','Heavy')

function PizzaMachineTwo(size,toppings,crust,sauce){
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce

    this.estimatedDeliveryTime = function(){
        console.log('Calculating')
    }

    this.burnMouth = function(){
        console.log('oiOIWHEPFIHEFJOis');
    }

    this.frisbee = function(){
        console.log('YEEEET')
    }
}