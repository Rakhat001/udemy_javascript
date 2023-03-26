const someString = 'This is some strange string';

function reverse(str) {
    let str2 = '';
    if (typeof (str) === 'string') {
        for (let i = str.length - 1; i >= 0; i--) {
            str2 += str[i];
        }
        console.log(str2)
    }
    else{
        console.log("Ошибка")
    }
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length ===0 ? str = 'Нет доступнгых валют' : str = 'Доступные валюты:\n';
    for(let i =0; i<arr.length; i++){
        if(arr[i]===missingCurr){
            continue;
        }
        str+= `${arr[i]}\n`;
    }
    console.log(str);
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')

 
