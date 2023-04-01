const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    for(let i=0; i<arr.length; i++){
        str+=arr[i] + ' ';
    }
    console.log(`Семья состоит из: ${str}`)
}
 showFamily(family);



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

 function standardizeStrings(arr) {
    let i =0;
    for(let value of favoriteCities){
        i++;
        console.log(`${i}:${value}`);
    }
 }
 standardizeStrings(favoriteCities);
