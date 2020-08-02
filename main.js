const randomBtn = document.querySelector('.generate-btn');
randomBtn.addEventListener('click', function () {
    
    let randomNumber = '';
    for(var i = 0; i < 4; i++){
        randomNumber += Math.round(Math.random() * 9);
    }
    pinDisplay.value = randomNumber;


})

