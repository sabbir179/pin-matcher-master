// 4 digit Pin number generating 
const pinDisplay = document.getElementById('pinDisplay');
const randomBtn = document.querySelector('.generate-btn');
randomBtn.addEventListener('click', function () {
    
    let randomNumber = '';
    for(var i = 0; i < 4; i++){
        randomNumber += Math.round(Math.random() * 9);
    }
    pinDisplay.value = randomNumber;

})

// Number pad 
const numDisplay = document.getElementById('numberDisplay');
const allNumBtn = document.querySelectorAll('.numBtn');

for(let i = 0; i < allNumBtn.length; i++){
    allNumBtn[i].addEventListener('click', function(){
        let number = allNumBtn[i].innerText;
        numDisplay.value += number;
    })
}


// Backspace or single digit remove 

const backspaceBtn = document.querySelector('.backspace');
backspaceBtn.addEventListener('click', function(){
    let current = numDisplay.value;
    numDisplay.value = current.slice(0, -1);
})

// Clear all number

const clearAllBtn = document.querySelector('.clearAll');
clearAllBtn.addEventListener('click', function(){
    numDisplay.value = '';
})

// Match with generated pin number 
const actionRemain = document.getElementById('actionRemain');
const matchedText = document.getElementById('matchedText');
const notMatchedText = document.getElementById('notMatchedText');

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('click', function(){
    
    let count = parseInt(actionRemain.innerText);

    if(numDisplay.value == '' && count !=0){
        alert('Please enter generated pin')
    } 
    else if(numDisplay.value == pinDisplay.value && count > 0){
        matchedText.style.display = 'block';
        notMatchedText.style.display = 'none';
    }
    else if(count > 0){
        notMatchedText.style.display = 'block';
        matchedText.style.display = 'none';
        actionRemain.innerText  = actionRemain.innerText - 1;
        count--;
    }

    if(count == 0){
        document.querySelector('.action-left').style.color = 'red';
    }
})