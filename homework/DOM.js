console.log(documen.head);  // Мы обращаемся к хеддеру сайта и можем вывести данные
console.log(document.documentElement); // Получаем элемент с документа 
console.log(documen.body.childNodes); // Получаем узлы которые являеться детьями у боди
console.log(document.body.firstChild); // получаем первый узел
console.log(document.body.lastChild); // получаем последний узел 
console.log(document.querySelector('#current').parentNode.parentNode); //
console.log(document.querySelector('[data-current="3"]').nextSibling); //
console.log(document.querySelector('#current').parentElement); //
console.log(document.querySelector('[data-current="3"]').nextElementSibling); //



for(let node of document.body.childNodes){
    if(node.nodeName =='#text'){
        continue;
    }
    console.log(node);
}