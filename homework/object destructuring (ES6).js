const options = {
    name:'test',
    width: 1024,
    height:1024,
    colors:{
        border:'black',
        bg:'red',
    },
    makeTest:function(){
        console.log("Test");
    }
};
options.makeTest();

delete options.name;
console.log(options);

for(let key in options){
    if(typeof(options[key])=== 'object'){
        for(let i in options[key]){
            console.log(`Свойтсво ${i}, имеет значение ${options[key][i]}`);
        }
    }
        else {
            console.log(`Свойтсво ${key}, имеет значение ${options[key]}`);
        }
    }

console.log(Object.keys(options));
console.log(Object.keys(options).length);

const {border,bg} = options.colors;
console.log(border);