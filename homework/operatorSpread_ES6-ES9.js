function copy(mainObj){
    let objCopy = {};

    let key;

    for(key in mainObj){
        objCopy[key]=mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a:5,
    b:1,
    c:8,
    v:{
        z:5,
        m:4
    }
    
};


const copy_numbers = copy(numbers);
copy_numbers.a = 10;
console.log(numbers);
console.log(copy_numbers);


const add = {
    d:17,
    e:20
};
// console.log(Object.assign(numbers,add))
const clone = Object.assign({},add);
clone.d = 2;
console.log(clone);
console.log(add);


const video = ['youtube','vimeo','rutube'],
blogs = ['wordpress','livejpurnal','blogger'],
internet = [...video, ...blogs, 'vk','facebook'];
console.log(internet);



function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];

log(...num);