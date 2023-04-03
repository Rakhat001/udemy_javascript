const box = document.getElementById('box'),
    btns = document.getElementsByTagName('btns'),
    circles = document.getElementsByClassName('circles'),
    hearts = document.querySelectorAll('hearts'),
    oneHeart = document.querySelector('.heart');



hearts.forEach(item =>{
    item.style.backgroundColor = 'blue'
});





const div = document.createElement('div');
div.classList.add('black');
document.body.append(div);
wrapper.append(div);



hearts[0].before(div);
hearts[0].after(div);
circles[0].remove();
hearts[0].replaceWith(circles[0]);



div.innerHTML = "<h1>Hello world</h1>";
div.textContent = "Hello world";

div.insertAdjacentHTML("", '<h2>Hello</h2>')