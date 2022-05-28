console.log("Hello World!");

//object literal notation, simple way to define an object, but we can 
/* const circle = {
    //key/value pairs
    radius: 1,
    location: {
        //key value pairs
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
}; 

circle.draw();
*/

//this object has three members, the function is a method, the others are properties

//we can access it's members using dot notation

//factory function
/* function createCircle(radius) {
    return {
        //key/value pairs
        radius,
        draw: functi on() {
            console.log('draw');
        }
    };
} */

/*const circle = createCircle(1);
  circle.draw(); */

//constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Circle(10);

//dot notation
circle.location = {x: 1};
//bracket notation
circle['location'] = {x: 1};

//bracket notation can use place holder names that are used in run time
const propertyName = 'location';
circle[propertyName] = {x: 1};

//to enumerate all of the members in an object we can use a for in loop
for (let key in circle){
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}

//to get all the keys in an object, use Object.keys
const keys = Object.keys(circle);
console.log(keys);

// and to check for exsistence of a property or a method in an object, use an in operator
if('radius' in circle)
    console.log('Circle has a radius');