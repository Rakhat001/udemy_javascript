const solider = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello")
    }
};

const john = {
    health:100
};

Object.setPrototypeOf(john,solider);
john.sayHello();