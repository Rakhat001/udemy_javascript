// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

function learnJs(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJs('Javascript', function () {
    console.log('я прошел этот урок');
});