//Create a stopwatch object that has four properties and three methods

let stopwatch = {};

//four properties
stopwatch.color = 'black';
stopwatch.brand = 'Nike';
stopwatch.style = 'Sport';
stopwatch.size = 'Adult';
//
stopwatch.start = function (){
    console.log("Starting");
}

stopwatch.stop = function ()
{
    console.log("Stopping");
}

stopwatch.sayBrand = function (){
    console.log(stopwatch.brand);
}